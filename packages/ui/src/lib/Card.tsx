import type { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

type CardProps = {
    children: React.ReactNode;
}

const Card: FunctionComponent<CardProps> = ({children}) => {
    return (
        <View style={styles.cardContainer}>
            {children}
        </View>
    )
}


export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#f3f3f3',
        borderRadius: 15,
        padding: 30
    }
})