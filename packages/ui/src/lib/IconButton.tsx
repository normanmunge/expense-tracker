import type { FunctionComponent } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//import { COLORS } from '@expense-app/mobile/src/constants/colors';


type IconButtonProps = {
    icon: keyof typeof Ionicons.glyphMap
    size: number
    color?: string
    onPress?: () => void
}

export const IconButton: FunctionComponent<IconButtonProps> = ({ icon, size, color, onPress }) => {
    return (
        <Pressable 
            onPress={onPress}
            style={
                ({pressed}) => pressed && styles.pressed
            }
        >
            <View style={styles.buttonContainer}>
                <Ionicons name={icon} size={size} color={color} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'transparent',
        borderRadius: 15,
        paddingHorizontal: 12
    },
    pressed: {
        opacity: 0.75
    }
})



