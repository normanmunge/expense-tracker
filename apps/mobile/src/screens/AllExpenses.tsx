import type { FunctionComponent } from 'react';
import { Stack, H2 } from 'tamagui';
//import ExpensesOverview from '../components/expenses/Overview';

const AllExpenses: FunctionComponent = () => {
    return (
        <Stack>
            <H2>All Expenses</H2>
            {/* <ExpensesOverview /> */}
        </Stack>
    )
}

export default AllExpenses;