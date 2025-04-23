import type { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

type CardProps = {
    children: React.ReactNode;
}

export const Card: FunctionComponent<CardProps> = ({children}) => {
    return (
        <View style={styles.cardContainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#f3f3f3',
        borderRadius: 15,
        padding: 30
    }
})