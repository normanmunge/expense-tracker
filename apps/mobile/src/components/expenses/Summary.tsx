import type { FunctionComponent } from 'react';
import { Expense } from '../../types';
import { View, Text, StyleSheet } from 'react-native'
import Title from '@expense-app/ui/lib/Title'

type SummaryProps = {
    period: string;
    expenses: Expense[]
}

const ExpensesSummary: FunctionComponent<SummaryProps> = ({
    period,
    expenses
}) => {

    const sum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)

    return (
        <View style={styles.container}>
            <Title>{period}</Title>
            <Text style={styles.sum}>KES {sum.toFixed(2)}</Text>
        </View>
    )
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: '#eaeaea',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 175
    },
    period: {
        fontSize: 12,
        color: '#000'
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    }
})