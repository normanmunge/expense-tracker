//import ExpensesOutput from '@/apps/mobile/src/components/expenses/Output';
import { View, Text } from 'react-native';
// import { COLORS } from '@/apps/mobile/src/constants/colors';

import { Button } from 'tamagui';

import type { FunctionComponent } from 'react';
const AllExpenses: FunctionComponent = () => {
    return (
        <View>
            {/* <ExpensesOutput period='Total' /> */}
            <Button>All Expenses</Button>
        </View>
    )
}

export default AllExpenses;

// const styles = StyleSheet.create({
//     containerBackground: {
//         flex: 1,
//         backgroundColor: COLORS.white,
//     }
// })