import clsx from 'clsx';
import { FC } from 'react';
import { Image, Pressable, PressableProps } from 'react-native';
import { Text } from '../text';

export type ActionChipProps = PressableProps & {
  title: string;
  small?: boolean;
  outlined?: boolean;
  imagePath?: string;
  onPress?: () => void;
};

export const ActionChip: FC<ActionChipProps> = ({
  title,
  small = false,
  outlined = false,
  imagePath,
  onPress,
}) => {
  return (
    <Pressable
      className={clsx(
        'flex-row self-start rounded-md active:opacity-50 items-center h-[40px]',
        outlined ? 'bg-white border border-gray-300' : 'bg-green-500 '
      )}
      onPress={onPress}
    >
      {imagePath && (
        <Image
          height={40}
          width={40}
          className="rounded-l-md"
          source={{ uri: imagePath }}
        />
      )}
      <Text
        type={small ? 'body2' : 'body1'}
        className={clsx(
          small ? 'py-2.5 px-4' : 'py-3 px-4',
          outlined ? 'text-black' : 'text-white'
        )}
        numberOfLines={1}
      >
        {title}
      </Text>
    </Pressable>
  );
};
