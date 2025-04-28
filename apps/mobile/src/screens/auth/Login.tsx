import { useState } from 'react';
import { Form, Label, Input, YStack, Paragraph, XStack, Stack, Text, Separator } from "tamagui"
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { UIButton, UITitle, UIView } from "@expense-app/ui"
import { Eye, EyeOff, Github, Chrome } from '@tamagui/lucide-icons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

    const onSubmit: SubmitHandler<LoginFormData> = ((values) => {
        console.log('THE LOGIN VALUES', values);
    })
    
    return (
        <UIView isAuthBackgroundContainer>
            <YStack>
                <Stack marginBottom={'$5'}>
                    <UITitle isHeading>Log In</UITitle>
                </Stack>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <YStack space="$4">
                        <YStack>
                            <Label color={'$color.white'} fontSize={14}>Email</Label>
                            <Controller
                                control={control}
                                name="email"
                                render={({ field}) => (
                                    <Input 
                                        id="login-email"
                                        size="$4"
                                        placeholder="Email Address"
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
                                            id="login-password"
                                            flex={1}
                                            size="$4"
                                            placeholder="Password"
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

                        <XStack justifyContent='space-between'>
                            <Paragraph 
                                color={'$color.secondary'}
                            >Forgot Password?</Paragraph>
                            <Paragraph color={'$color.white'} onPress={() => {
                                navigation.navigate('signup')
                            }}>Create Account</Paragraph>
                        </XStack>

                        <Form.Trigger asChild disabled={!isValid || !isSubmitting}>
                            <UIButton onPress={() => {
                                console.log('Logging IN')
                            }} marginVertical={'$5'}>
                                {
                                    isSubmitting ? 'Logging In...': 'Login'
                                }
                            </UIButton>
                        </Form.Trigger>
                    </YStack>
                </Form>
                
                <YStack marginTop={'$-10'}>
                    <XStack>
                        <XStack flex={1} justifyContent='center' alignItems='center'>
                            <Separator borderWidth={1} borderColor={'$color.gray900'} />
                                <Text color={'$color.white'} paddingHorizontal={'$4'} >OR</Text>
                            <Separator borderWidth={1} borderColor={'$color.gray900'} />
                        </XStack>
                    </XStack>
                    <YStack marginTop={'$4'}>
                        <YStack gap={16}>
                            <Stack>
                                <UIButton iconify icon={Github} isSocialProviderButton>Continue with Github</UIButton>
                            </Stack>
                            <Stack>
                                <UIButton iconify icon={Chrome} isSocialProviderButton>Continue with Google</UIButton>
                            </Stack>
                        </YStack>
                    </YStack>
                </YStack>
            </YStack>
        </UIView>
    )
}

export default Login