import { useState } from 'react';
import { UITitle, UIView, UIButton } from "@expense-app/ui";
import { Stack, XStack, Paragraph, YStack, Form, Label, Input } from "tamagui";
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Alert } from "react-native";
import { Eye, EyeOff } from '@tamagui/lucide-icons';
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/src/utils/supabase';

const loginSchema = z.object({
    email: z.string().min(1, {message: 'Email is required'}).email(),
    password: z.string().min(1, {message: 'Password is required'})
})

type SignupFormData = z.infer<typeof loginSchema>

type AuthStackParamList = {
    login: undefined;
    signup: undefined;
};

const Signup = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>()

    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting }
    } = useForm<SignupFormData>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(loginSchema)
    })

    const onSubmit: SubmitHandler<SignupFormData> = (async (values) => {
        console.log('THE SIGNUP VALUES', values);

        const { email, password} = values;

        const { error, data: {session} } = await supabase.auth.signUp({
            email: email.toLowerCase(),
            password
        })

        if (error) {
           Alert.alert(error.message) 
        }

        console.log('THE SESSION', session)

        if (!session) {
            Alert.alert('Failed to signup! Try again later!!!')
        }
    })

    return (
        <UIView isAuthBackgroundContainer>
            <YStack>
                <Stack marginBottom={'$5'}>
                    <UITitle isHeading>Sign Up</UITitle>
                </Stack>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Stack gap={'$4'}>
                        <YStack>
                            <Label color={'$color.white'} fontSize={14}>Email</Label>
                            <Controller
                                control={control}
                                name="email"
                                render={({ field}) => (
                                    <Input
                                        size="$4"
                                        placeholder="Email Address"
                                        placeholderTextColor={'$color.text'}
                                        value={field.value.toString()}
                                        onChangeText={field.onChange}
                                        borderRadius={4}
                                        borderWidth={1}
                                        borderColor={'$color.gray900'}
                                        backgroundColor={'$color.background'}
                                        color={'$color.white'}
                                    />
                                )}
                            />
                            {errors.email && <Paragraph color={'$color.error'}>{errors.email.message}</Paragraph>}
                        </YStack>

                        <YStack>
                            <Label color={'$color.white'} fontSize={14}>Password</Label>
                            <XStack borderRadius={4}
                                borderWidth={1}
                                borderColor={'$color.gray900'}
                                backgroundColor={'$color.background'}
                            >
                                <Controller
                                    control={control}
                                    name="password"
                                    render={({ field}) => (
                                        <Input
                                            flex={1}
                                            size="$4"
                                            placeholder="Password"
                                            placeholderTextColor={'$color.text'}
                                            value={field.value.toString()}
                                            onChangeText={field.onChange}
                                            secureTextEntry={!showPassword}
                                            color={'$color.white'}
                                            backgroundColor={'$color.background'}
                                            borderWidth={0}
                                        />
                                    )}
                                />
                                <UIButton
                                    iconify
                                    backgroundColor={'$color.background'}
                                    color={'$color.white'}
                                    size={'$4'}
                                    marginRight={'$4'}
                                    icon={showPassword ? EyeOff : Eye}
                                    onPress={() => setShowPassword(!showPassword)}
                                />
                            </XStack>
                            {errors.password && <Paragraph color={'$color.error'}>{errors.password.message}</Paragraph>}
                        </YStack>
                        <XStack justifyContent='flex-start'>
                            <Paragraph color={'$color.white'} onPress={() => {
                                navigation.navigate('login')
                            }}>Already have an account?
                                <UITitle isDefault paddingLeft={'$2'} color='$color.secondary'>Login</UITitle>
                            </Paragraph>
                            
                        </XStack>
                        <Form.Trigger asChild disabled={!isValid || isSubmitting}>
                            <UIButton
                                defaultDark
                                size={'$4'}
                            >
                                {
                                    <Paragraph>
                                        { isSubmitting ? 'Signing Up...': 'Signup'}
                                    </Paragraph>
                                }
                            </UIButton>
                        </Form.Trigger>
                    </Stack>
                </Form>
            </YStack>
        </UIView>
    )
}

export default Signup;