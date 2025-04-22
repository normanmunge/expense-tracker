//import { COLORS } from "@/apps/mobile/src/constants/colors";
import type { FunctionComponent } from "react";
import { View, Pressable, Text, StyleSheet, ViewStyle } from 'react-native';

enum ButtonSize {
    Large = 'Large',
    Normal = 'Normal',
    Small = 'Small',
    Tiny = 'Tiny'
}

type ButtonProps = {
    children: React.ReactNode,
    disabled?: boolean,
    size?: keyof typeof ButtonSize,
    variant?: string,
    onPress: () => void,
    customStyle?: ViewStyle
}


export const Button: FunctionComponent<ButtonProps> = ({ children, onPress, disabled = false, variant, customStyle }) => {
    return (
        <View style={customStyle}>
            <Pressable onPress={onPress}>
                <View style={[styles.button, disabled && styles.disabled, variant === 'flat' && styles.flat]}>
                    <Text style={[styles.buttonText, variant === 'flat' && styles.flatText]}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 8,
        //backgroundColor: COLORS.primary
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.5,
        borderRadius: 16
    },
    flat: {
       // backgroundColor: COLORS.inactive
    },
    flatText: {
        opacity: 0.2
    },
    disabled: {
        backgroundColor: 'gray'
    }
})