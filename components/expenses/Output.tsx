import { View, StyleSheet } from 'react-native';
import { Expense } from '@/utils/types';
import { DUMMYEXPENSES } from '@/constants/mock';

import ExpensesSummary from "./Summary";
import ExpensesList from './List';


type OutputProps = {
    expenses?: Expense[]
    period: string;
}

const ExpensesOutput = ({expenses, period }: OutputProps) => {
    return (
        <View style={styles.containerBackground}>
            <ExpensesSummary period={period} expenses={DUMMYEXPENSES} />
            <ExpensesList expenses={DUMMYEXPENSES} />
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    containerBackground: {
        padding: 20
    }
})