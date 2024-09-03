import { View } from 'react-native';

import { useQueryProfile, useSession } from '@entities/authentication';
import { yupResolver } from '@hookform/resolvers/yup';
import { tw } from '@shared/ui';
import { router } from 'expo-router';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button, Text, TextInput } from 'react-native-paper';
import * as yup from 'yup';

type FormValues = {
  fullName: string;
};

const schema = yup.object({
  fullName: yup.string().required('Full name is required.'),
});

export const ProfileForm = () => {
  const { data: session } = useSession();
  const { data: profile } = useQueryProfile(session?.user.id);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver<FormValues>(schema),
    defaultValues: {
      fullName: profile?.fullName ?? '',
    },
  });

  const handleSubmitForm: SubmitHandler<FormValues> = () => {
    router.navigate('/');
  };

  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-1 my-8`}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={tw`mx-4`}
              label="Full Name"
              placeholder="i.e. John Doe"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="fullName"
        />
        {errors.fullName && (
          <Text
            variant="bodySmall"
            style={tw`text-error dark:text-dark-error mx-4 pl-4 mt-1`}
          >
            {errors.fullName.message}
          </Text>
        )}
      </View>

      <Button
        mode="contained"
        style={tw`mx-4`}
        onPress={() => void handleSubmit(handleSubmitForm)()}
      >
        Save
      </Button>
    </View>
  );
};
