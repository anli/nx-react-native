import { ReactNode, cloneElement } from 'react';

import { List } from 'react-native-paper';
import { ClassInput } from 'twrnc';

import { tw } from '../tailwind';

export type PageComponent = Record<string, JSX.Element>;

const baseComponents: PageComponent = {
  // @ts-expect-error children will be passed in the clone element
  'List.Subheader': <List.Subheader />,
  // @ts-expect-error children will be passed in the clone element
  'List.Section': <List.Section />,
};

type ComponentName = string;

type ComponentConfig = {
  componentName: ComponentName;
  children?: string | ComponentConfig[];
  className?: ClassInput;
};

export const renderPageContent = (
  contents: ComponentConfig[],
  additionalComponents: PageComponent = {}
): ReactNode => {
  const components = { ...baseComponents, ...additionalComponents };

  return contents.map(
    ({ componentName, className, children, ...rest }, index) => {
      const component = components[componentName];
      const props = { style: tw.style(className), ...rest };

      return component
        ? cloneElement(
            component,
            { key: index, ...props },
            Array.isArray(children)
              ? renderPageContent(children, additionalComponents)
              : children
          )
        : null;
    }
  );
};
