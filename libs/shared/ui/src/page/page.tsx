import { PropsWithChildren, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { tw } from '../tailwind';

type PageProps = {
  renderHeader?: (props: { style?: StyleProp<ViewStyle> }) => ReactNode;
};

export const Page = ({
  children,
  renderHeader,
}: PropsWithChildren<PageProps>) => (
  <SafeAreaView edges={['top']} style={tw`flex-1`}>
    {renderHeader?.({ style: tw`absolute w-full` })}
    {children}
  </SafeAreaView>
);
