import { Stack, Text, styled } from 'tamagui';
import type { FunctionComponent } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    [key: string]: undefined;
}

type Props = {
    children: React.ReactNode;
    href?: string;
}

const StyledText = styled(Text, {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '$white',
});

const StyledStack = styled(Stack, {
    variants: {
        pressed: {
            true: {
                opacity: 0.75
            }
        }
    }
});

export const Title: FunctionComponent<Props> = ({children, href}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const navigationHandler = () => {
        console.log('navigationHandler', href)
        if (!href) return;
        navigation.navigate(href)
    }

    return (
        <StyledStack onPress={navigationHandler}>
            <StyledText>{children}</StyledText>
        </StyledStack>
    )
}