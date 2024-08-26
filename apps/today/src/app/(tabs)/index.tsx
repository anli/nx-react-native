import { View, Text } from 'react-native';

import { tw } from '@shared/ui';

export default () => (
  <View
    style={tw`flex-1 items-center justify-center bg-background dark:bg-dark-background`}
  >
    <Text style={tw`text-onBackground dark:text-dark-onBackground`}>
      Tab [Home|Settings]
    </Text>
  </View>
);
