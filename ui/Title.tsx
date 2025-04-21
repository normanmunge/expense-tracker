import { Text, StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';
import type { FunctionComponent } from 'react';

type Props = {
    children: React.ReactNode;
}

const Title: FunctionComponent<Props> = ({children}) => {
    return <Text style={styles.textContainer}>{children}</Text> 
}

export default Title;

const styles = StyleSheet.create({
    textContainer: {
        color: COLORS.text,
        fontSize: 16,
        fontWeight: 'semibold'
    }
})