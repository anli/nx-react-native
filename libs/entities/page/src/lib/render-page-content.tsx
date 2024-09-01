import { ReactNode, cloneElement } from 'react';
import { View, Text } from 'react-native';

import { tw } from '@shared/ui';
import { Image } from 'expo-image';
import { List } from 'react-native-paper';
import { ClassInput } from 'twrnc';

export type PageComponent = Record<string, JSX.Element>;

const baseComponents: PageComponent = {
  // @ts-expect-error children will be passed in the clone element
  'List.Subheader': <List.Subheader />,
  // @ts-expect-error children will be passed in the clone element
  'List.Section': <List.Section />,
  View: <View />,
  Image: <Image />,
  Text: <Text />,
};

const getDefaultStyle = (componentName: ComponentName): ClassInput[] => {
  switch (componentName) {
    case 'Text':
      return ['text-onBackground dark:text-dark-onBackground'];
    default:
      return [];
  }
};

const getComponentProps = (
  props: Record<string, unknown>,
  componentName: ComponentName
): Record<string, unknown> =>
  Object.fromEntries(
    Object.entries(props).map(([key, value]) => {
      switch (key) {
        case 'className':
          return [
            'style',
            tw.style(
              ...[...getDefaultStyle(componentName), value as ClassInput]
            ),
          ];
        default:
          return [key, value];
      }
    })
  );

type ComponentName = string;

type ComponentConfig = {
  componentName: ComponentName;
  children?: string | ComponentConfig[];
  className?: ClassInput;
  source?: string;
};

export const renderPageContent = (
  contents: ComponentConfig[],
  additionalComponents: PageComponent = {}
): ReactNode => {
  const components = { ...baseComponents, ...additionalComponents };

  return contents.map(({ componentName, children, ...rest }, index) => {
    const component = components[componentName];
    const props = getComponentProps(rest, componentName);

    return component
      ? cloneElement(
          component,
          { key: index, ...props },
          Array.isArray(children)
            ? renderPageContent(children, additionalComponents)
            : children
        )
      : null;
  });
};
