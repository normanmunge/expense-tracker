import type { FunctionComponent } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '@/constants/colors';


type IconButtonProps = {
    icon: keyof typeof Ionicons.glyphMap
    size: number
    color?: string
    onPress?: () => void
}

const IconButton: FunctionComponent<IconButtonProps> = ({ icon, size, color = COLORS.text, onPress }) => {
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

export default IconButton;

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



