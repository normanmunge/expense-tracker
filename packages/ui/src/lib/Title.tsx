import { Text, StyleSheet } from 'react-native';
import { COLORS } from '@/apps/mobile/src/constants/colors';
import type { FunctionComponent } from 'react';

type Props = {
    children: React.ReactNode;
}

export const Title: FunctionComponent<Props> = ({children}) => {
    return <Text style={styles.textContainer}>{children}</Text> 
}

const styles = StyleSheet.create({
    textContainer: {
        color: COLORS.text,
        fontSize: 16,
        fontWeight: 'semibold'
    }
})