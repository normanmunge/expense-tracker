import type { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Expense } from '@/types';
import { DUMMYEXPENSES } from '@/constants/mock';

import ExpensesSummary from "./Summary";
import ExpensesList from './List';
import Title from '@/ui/Title';
import Nav from '@/ui/Nav';
import Header from '@/ui/Header';


type OutputProps = {
    expenses?: Expense[]
    period: string;
}

const ExpensesOutput: FunctionComponent<OutputProps> = ({expenses, period }) => {
    return (
        <View style={styles.containerBackground}>
            <ExpensesSummary period={period} expenses={DUMMYEXPENSES} />
            <View style={styles.activitiesContainer}>
                <Header>
                    <Title>Recent Activity</Title>
                    <Nav href='All Expenses'>View All</Nav>
                </Header>
                <ExpensesList expenses={DUMMYEXPENSES} />
            </View>
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    containerBackground: {
        padding: 20,
        gap: 30
    },
    activitiesContainer: {
        
    }
})