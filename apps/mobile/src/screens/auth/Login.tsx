import { useState } from 'react';
import { Button, Form, Label, Input, YStack, Paragraph, XStack, View, Text, Separator } from "tamagui"
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { COLORS } from "@/src/constants/colors"
import { UIButton, UITitle, UIView } from "@expense-app/ui"
import { Eye, EyeOff, Github, Chrome } from '@tamagui/lucide-icons';

const loginSchema = z.object({
    email: z.string().min(1, {message: 'Email is required'}).email(),
    password: z.string().min(1, {message: 'Password is required'})
})

type LoginFormData = z.infer<typeof loginSchema>

const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(true);

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
        <UIView isBackgroundContainer >
            <UITitle isHeading>Log In</UITitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <YStack>
                    <Label color={'#fff'} fontSize={14}>Email</Label>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field}) => (
                            <Input 
                                id="email"
                                size="$4"
                                placeholder="Email Address"
                                value={field.value.toString()}
                                onChangeText={field.onChange}
                                borderRadius={4}
                                borderWidth={1}
                                borderColor={COLORS.inactive}
                                backgroundColor={'transparent'}
                                color={'#fff'}
                            />
                        )}
                    />
                    {errors.email && <Paragraph color={'$error'}>{errors.email.message}</Paragraph>}
                </YStack>

                <YStack>
                    <Label color={'#fff'} fontSize={14}>Password</Label>
                    <XStack borderRadius={4}
                        borderWidth={1}
                        borderColor={COLORS.inactive}
                        backgroundColor={'transparent'}
                    >
                        <Controller
                            control={control}
                            name="password"
                            render={({ field}) => (
                                <Input
                                    id="password"
                                    flex={1}
                                    size="$4"
                                    placeholder="Password"
                                    value={field.value.toString()}
                                    onChangeText={field.onChange}
                                    secureTextEntry={!showPassword}
                                    color={'#fff'}
                                    backgroundColor={'transparent'}
                                    borderWidth={0}
                                />
                            )}
                        />
                        <Button
                            icon={showPassword ? EyeOff : Eye}
                            size="$4"
                            color='#fff'
                            backgroundColor="transparent"
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    </XStack>
                    {errors.password && <Paragraph color={'$error'}>{errors.password.message}</Paragraph>}
                </YStack>

                <XStack paddingTop={'$5'} justifyContent='space-between'>
                    <Paragraph 
                        color={COLORS.secondary}
                    >Forgot Password?</Paragraph>
                    <Paragraph color='#fff'>Create Account</Paragraph>
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
            </Form>

            <View marginTop={'$4'}>
                <XStack justifyContent='center' alignItems='center'>
                    <Separator borderWidth={1} borderColor={COLORS.inactive} />
                        <Text color={COLORS.inactive} paddingHorizontal={'$4'} >OR</Text>
                    <Separator borderWidth={1} borderColor={COLORS.inactive} />
                </XStack>
            </View>
            <View marginTop={'$4'}>
                <YStack gap={16}>
                    <View>
                        <UIButton iconify icon={Github}  isSocialProviderButton>Continue with Github</UIButton>
                    </View>
                    <View>
                        <UIButton iconify icon={Chrome} isSocialProviderButton>Continue with Google</UIButton>
                    </View>
                </YStack>
            </View>
        </UIView>
    )
}

export default Login