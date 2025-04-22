import { Text, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '@/apps/mobile/src/constants/colors';
import type { FunctionComponent } from 'react';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    [key: string]: undefined;
}

type Props = {
    children: React.ReactNode;
    href?: string;
}

export const Title: FunctionComponent<Props> = ({children, href}) => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const navigationHandler = () => {
        console.log('navigationHandler', href)
        if (!href) return;

        navigation.navigate(href)
    }
    return (
        <Pressable
            style={({pressed}) => pressed && styles.pressed}
            onPress={navigationHandler}
        >
            <Text style={styles.textContainer}>{children}</Text>
        </Pressable> 
    )
}

const styles = StyleSheet.create({
    textContainer: {
        color: COLORS.navText,
        fontSize: 16,
        fontWeight: 'semibold'
    },
    pressed: {
        opacity: 0.75
    }
})