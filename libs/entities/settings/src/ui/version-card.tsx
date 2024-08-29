import { nativeApplicationVersion } from 'expo-application';
import { Card, CardProps } from 'react-native-paper';

export const VersionCard = (
  props: Omit<CardProps, 'children' | 'elevation'>
) => (
  <Card mode="contained" {...props}>
    <Card.Title title="Version" subtitle={nativeApplicationVersion} />
  </Card>
);
