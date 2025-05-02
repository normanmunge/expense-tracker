import { useState } from 'react';
import { Form, Label, Input, YStack, Paragraph, XStack, Stack, Text, Separator, Theme } from "tamagui"
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { UIButton, UIInput, UITitle, UIView } from "@expense-app/ui"
import { Eye, EyeOff, Github, Chrome, Apple } from '@tamagui/lucide-icons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Alert, ActivityIndicator } from 'react-native';
import { supabase } from '@/src/utils/supabase';
import { Session } from '@supabase/supabase-js'

const loginSchema = z.object({
    email: z.string().min(1, {message: 'Email is required'}).email(),
    password: z.string().min(1, {message: 'Password is required'})
})

type LoginFormData = z.infer<typeof loginSchema>

type AuthStackParamList = {
    login: undefined;
    signup: undefined;
};

const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting }
    } = useForm<LoginFormData>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(loginSchema)
    })

    const onSubmit: SubmitHandler<LoginFormData> = (async (values) => {
        const { email, password} = values;

        const { error } = await supabase.auth.signInWithPassword({
            email: email.toLowerCase(),
            password
        })

        if (error) {
           Alert.alert(error.message) 
        }
    })
    
    return (
        <UIView.Props>
            <UIView fullPage>
                <UIView.Content>
                    <UIView.Heading size='lg'>
                        Log In
                    </UIView.Heading>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <YStack gap={16}>
                            <UIInput<LoginFormData>
                                control={control}
                                name='email'
                                label='Email'
                                placeholder='Email address'
                                keyboardType='email-address'
                                defaultValue={''}
                                isDefault
                                color={'$color.text'}
                                autoFocus={true}
                            />

                            <UIInput<LoginFormData>
                                control={control}
                                name='password'
                                label='Password'
                                placeholder='Enter password'
                                keyboardType='default'
                                secureTextEntry={showPassword}
                                defaultValue={''}
                                isDefault
                                color={'$color.text'}
                            />
                            <XStack justifyContent='space-between'>
                                <Paragraph 
                                    color={'$color.text'}
                                >Forgot Password?</Paragraph>
                                <Paragraph color={'$color.accent'} fontWeight='bold' onPress={() => {
                                    navigation.navigate('signup')
                                }}>Don't have an account?</Paragraph>
                            </XStack>

                            <Form.Trigger asChild disabled={!isValid || isSubmitting}>
                                <Stack>
                                    <UIButton size={'$md'} onPress={handleSubmit(onSubmit)}>
                                        <UIButton.Text>
                                            {isSubmitting ? 'Logging In...' : 'Login'}
                                        </UIButton.Text>
                                    </UIButton>
                                </Stack>
                            </Form.Trigger>
                        </YStack>
                    </Form>
                    
                    <YStack mt={30}>
                        <XStack>
                            <XStack flex={1} justifyContent='center' alignItems='center'>
                                <Separator borderWidth={1} borderColor={'$color.gray900'} />
                                    <Text color={'$color.text'} paddingHorizontal={10} >OR</Text>
                                <Separator borderWidth={1} borderColor={'$color.gray900'} />
                            </XStack>
                        </XStack>
                        <YStack mt={30}>
                            <YStack gap={16}>
                                <Stack>
                                    <UIButton size={'$md'}>
                                        <UIButton.Icon icon={Apple} />
                                        <UIButton.Text>Continue with Apple</UIButton.Text>
                                    </UIButton>
                                </Stack>
                                <Stack>
                                    <UIButton size={'$md'}>
                                        <UIButton.Icon icon={Chrome} />
                                        <UIButton.Text>Continue with Google</UIButton.Text>
                                    </UIButton>
                                </Stack>
                            </YStack>
                        </YStack>
                    </YStack>
                </UIView.Content>
            </UIView>
        </UIView.Props>
    )
}

export default Login