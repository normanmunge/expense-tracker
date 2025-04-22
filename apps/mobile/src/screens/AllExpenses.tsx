//import ExpensesOutput from '@/apps/mobile/src/components/expenses/Output';
// import { COLORS } from '@/apps/mobile/src/constants/colors';

import { Button, Stack } from 'tamagui';

import type { FunctionComponent } from 'react';
const AllExpenses: FunctionComponent = () => {
    return (
        <Stack>
            {/* <ExpensesOutput period='Total' /> */}
            <Button bc={'red'} size={'$5'}>All Expenses</Button>
        </Stack>
    )
}

export default AllExpenses;

// const styles = StyleSheet.create({
//     containerBackground: {
//         flex: 1,
//         backgroundColor: COLORS.white,
//     }
// })