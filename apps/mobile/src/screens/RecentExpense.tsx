import type { FunctionComponent } from 'react';
import { View } from 'react-native';
import ExpensesOverview from '../components/expenses/Overview';

const RecentExpense: FunctionComponent = () => {
    return (
        <View>
            <ExpensesOverview />
        </View>
    )
}

export default RecentExpense;