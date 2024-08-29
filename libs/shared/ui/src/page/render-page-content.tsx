import { ReactNode, cloneElement } from 'react';

import { List } from 'react-native-paper';
import { ClassInput } from 'twrnc';

import { DarkModeCard } from '../dark-mode-card';
import { tw } from '../tailwind';
import { VersionCard } from '../version-card';

const baseComponents = {
  // @ts-expect-error children will be passed in the clone element
  'List.Subheader': <List.Subheader />,
  VersionCard: <VersionCard />,
  // @ts-expect-error children will be passed in the clone element
  'List.Section': <List.Section />,
  DarkModeCard: <DarkModeCard />,
};

type ComponentName = keyof typeof baseComponents;

type ComponentConfig = {
  componentName: ComponentName;
  children?: string | ComponentConfig[];
  className?: ClassInput;
};

export const renderPageContent = (contents: ComponentConfig[]): ReactNode =>
  contents.map(({ componentName, className, children, ...rest }, index) => {
    const component = baseComponents[componentName];

    const props = { style: tw.style(className), ...rest };
    return component
      ? cloneElement(
          component,
          { key: index, ...props },
          Array.isArray(children) ? renderPageContent(children) : children
        )
      : null;
  });
