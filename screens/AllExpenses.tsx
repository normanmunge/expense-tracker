import ExpensesOutput from '@/components/expenses/Output';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '@/constants/colors';

const AllExpenses = () => {
    return (
        <View style={styles.containerBackground}>
            <ExpensesOutput period='Total' />
        </View>
    )
}

export default AllExpenses;

const styles = StyleSheet.create({
    containerBackground: {
        flex: 1,
        backgroundColor: COLORS.white,
    }
})