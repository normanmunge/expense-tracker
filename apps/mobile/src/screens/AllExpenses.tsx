import ExpensesOutput from '@/apps/mobile/src/components/expenses/Output';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '@/apps/mobile/src/constants/colors';
import type { FunctionComponent } from 'react';
const AllExpenses: FunctionComponent = () => {
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