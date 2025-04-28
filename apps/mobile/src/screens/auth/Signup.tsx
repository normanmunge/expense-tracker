import { UITitle, UIView } from "@expense-app/ui";
import { Stack, XStack, Paragraph } from "tamagui";
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AuthStackParamList = {
    login: undefined;
    signup: undefined;
}

const Signup = () => {

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>()

    return (
        <UIView isAuthBackgroundContainer>
            <Stack marginBottom={'$5'}>
                <UITitle isHeading>Sign Up</UITitle>
            </Stack>
            <XStack justifyContent='space-between'>
                <Paragraph color={'$color.white'} onPress={() => {
                    navigation.navigate('login')
                }}>Already have an account?</Paragraph>
            </XStack>
        </UIView>
    )
}

export default Signup;