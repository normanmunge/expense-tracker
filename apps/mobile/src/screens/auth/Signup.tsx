import { useState } from 'react';
import { UIView, UIButton, UIInput } from "@expense-app/ui";
import { Stack, XStack, Text, YStack, Form } from "tamagui";
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Alert } from "react-native";
import { useForm,  SubmitHandler } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/src/utils/supabase';

const loginSchema = z.object({
    first_name: z.string().min(1, {message: 'First name is required'}),
    last_name: z.string().min(1, {message: 'Last name is required'}),
    email: z.string().min(1, {message: 'Email is required'}).email(),
    password: z.string().min(1, {message: 'Password is required'})
})

type SignupFormData = z.infer<typeof loginSchema>

type AuthStackParamList = {
    login: undefined;
    signup: undefined;
};

const Signup = () => {
    const [showPassword, setShowPassword] = useState<boolean>(true);

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
        <UIView.Props>
            <UIView fullPage>
                <UIView.Content>
                    <UIView.Heading size='lg'>
                        Sign Up
                    </UIView.Heading>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <YStack gap={16}>
                            <UIInput<SignupFormData>
                                control={control}
                                name='first_name'
                                label='First Name'
                                placeholder='First name'
                                keyboardType='default'
                                defaultValue={''}
                                isDefault
                                autoFocus={true}
                            />

                            <UIInput<SignupFormData>
                                control={control}
                                name='last_name'
                                label='Last Name'
                                placeholder='Last name'
                                keyboardType='default'
                                defaultValue={''}
                                isDefault
                            />

                            <UIInput<SignupFormData>
                                control={control}
                                name='email'
                                label='Email'
                                placeholder='Email address'
                                keyboardType='email-address'
                                defaultValue={''}
                                isDefault
                            />

                            <UIInput<SignupFormData>
                                control={control}
                                name='password'
                                label='Password'
                                placeholder='Enter password'
                                keyboardType='default'
                                secureTextEntry={showPassword}
                                defaultValue={''}
                                isDefault
                            />

                            <XStack justifyContent='flex-start'>
                                <Text 
                                    color={'$color.text'}
                                >Already have an account?</Text>
                                <Text color={'$color.accent'} pl={4} fontWeight='bold' onPress={() => {
                                    navigation.navigate('login')
                                }}>Login</Text>
                            </XStack>

                            <Form.Trigger asChild disabled={!isValid || isSubmitting}>
                                <Stack>
                                    <UIButton size={'$md'} onPress={handleSubmit(onSubmit)}>
                                        <UIButton.Text>
                                            { isSubmitting ? 'Signing Up...': 'Signup'}
                                        </UIButton.Text>
                                    </UIButton>
                                </Stack>
                            </Form.Trigger>
                        </YStack>
                </Form>
                </UIView.Content>
            </UIView>
        </UIView.Props>
    )
}

export default Signup;