import { Text, View } from 'react-native';
import ExpensesOutput from '@/components/expenses/Output';

const RecentExpense = () => {
    return (
        <View>
            <ExpensesOutput period='Last 7 Days' />
        </View>
    )
}

export default RecentExpense;