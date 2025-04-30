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
        console.log('THE LOGIN VALUES', values);

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
                            placeholder='Enter email'
                            keyboardType='email-address'
                            defaultValue={''}
                        />

                        <UIInput<LoginFormData>
                            control={control}
                            name='password'
                            label='Password'
                            placeholder='Enter password'
                            keyboardType='default'
                            secureTextEntry={showPassword}
                            defaultValue={''}
                        />
                            {/* <YStack>
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
                                {errors.email && <Text color={'$color.error'}>{errors.email.message}</Text>}
                            </YStack> */}

                            {/* <YStack>
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
                                    <UIButton outlined size='$sm' onPress={() => setShowPassword(!showPassword)}>
                                        <UIButton.Icon icon={showPassword ? Eye : EyeOff} />
                                    </UIButton>
                                </XStack>
                                {errors.password && <Paragraph color={'$color.error'}>{errors.password.message}</Paragraph>}
                            </YStack> */}

                            <XStack justifyContent='space-between'>
                                <Paragraph 
                                    color={'$color.secondary'}
                                >Forgot Password?</Paragraph>
                                <Paragraph color={'$color.white'} onPress={() => {
                                    navigation.navigate('signup')
                                }}>Create Account</Paragraph>
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
                                    <Text color={'$color.white'} paddingHorizontal={10} >OR</Text>
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