import { View, FlatList, Text, StyleSheet } from "react-native";
import { Expense } from '@/types';
import Card from '@/ui/Card'
import type { FunctionComponent } from 'react';

const ExpenseItem: FunctionComponent<Expense> = (itemData) => {
    return (
        <View style={styles.container}>
            <View style={styles.descriptionContainer}>
                <Text>{itemData.description} - {itemData.category} </Text>
                <Text>{itemData.amount}</Text>
            </View>
            <View style={styles.modeContainer}>
                <Text>{itemData.mode}</Text>
                <Text>{itemData.date.toLocaleDateString()}</Text>
            </View>
        </View>
    )
}

type ListProps = {
    expenses: Expense[]
}

const ExpensesList: FunctionComponent<ListProps> = ({expenses }) => {
    return (
        <Card>
            <FlatList 
                data={expenses} 
                renderItem={({ item }: {item: Expense}) => (
                    <ExpenseItem {...item} />
                )} 
                keyExtractor={(item) => item.id }
            />
        </Card>
    )
}

export default ExpensesList;


const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    }
})