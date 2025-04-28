import type { FunctionComponent } from 'react';
import { Expense } from '../../types';
import { Stack } from 'tamagui'

type SummaryProps = {
    period: string;
    expenses: Expense[]
}

const ExpensesSummary: FunctionComponent<SummaryProps> = ({
    period,
    expenses
}) => {

    const sum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)

    return (
        <Stack>
            {/* // <Title>{period}</Title>
            // <Text>KES {sum.toFixed(2)}</Text> */}
        </Stack>
    )
}

export default ExpensesSummary;