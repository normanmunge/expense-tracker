import { Expense } from '@/utils/types';
import { View, Text, StyleSheet } from 'react-native'

type SummaryProps = {
    period: string;
    expenses: Expense[]
}

const ExpensesSummary = ({
    period,
    expenses
}: SummaryProps) => {

    const sum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)


    return (
        <View style={styles.container}>
            <Text style={styles.period}>{period}</Text>
            <Text style={styles.sum}>KES {sum.toFixed(2)}</Text>
        </View>
    )
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: '#eaeaea',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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