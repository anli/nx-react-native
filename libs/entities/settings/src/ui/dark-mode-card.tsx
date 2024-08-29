import { tw } from '@shared/ui';
import { Card, CardProps, CardTitleProps } from 'react-native-paper';

type DarkModeCardProps = Omit<CardProps, 'children' | 'elevation'> & {
  titleProps?: Omit<CardTitleProps, 'title' | 'titleStyle'>;
};

export const DarkModeCard = ({ titleProps, ...props }: DarkModeCardProps) => (
  <Card mode="contained" {...props}>
    <Card.Title title="Dark Mode" titleStyle={tw`py-1`} {...titleProps} />
  </Card>
);
