import type { FunctionComponent } from 'react';
import { Stack, H2, YStack } from 'tamagui';
import ExpenseChart from '../components/ExpenseChart';
import { UIView } from '@expense-app/ui';

const AllExpenses: FunctionComponent = () => {
    return (
        <UIView padding="$md">
            <YStack backgroundColor={'$color.secondary'} borderRadius={'$md'}>
                <ExpenseChart />
            </YStack>
        </UIView>
    )
}

export default AllExpenses;