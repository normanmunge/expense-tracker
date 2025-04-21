import type { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import ExpensesOutput from '@/components/expenses/Output';
import ExpensesOverview from '@/components/expenses/Overview';

const RecentExpense: FunctionComponent = () => {
    return (
        <View>
            <ExpensesOverview />
        </View>
    )
}

export default RecentExpense;