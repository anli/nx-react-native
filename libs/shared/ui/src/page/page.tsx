import { PropsWithChildren, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

import { tw } from '../tailwind';

type PageProps = {
  renderHeader?: (props: { style?: StyleProp<ViewStyle> }) => ReactNode;
} & SafeAreaViewProps;

export const Page = ({
  children,
  renderHeader,
  ...rest
}: PropsWithChildren<PageProps>) => (
  <SafeAreaView edges={['top']} style={tw`flex-1`} {...rest}>
    {renderHeader?.({ style: tw`absolute w-full` })}
    {children}
  </SafeAreaView>
);
