import { Button, Card, Stack, Text, YStack, XStack, Separator, ScrollView } from 'tamagui';
import { Expense } from '../types';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { transactions } from '../mock'
import { formatCurrency } from '../utils/format-currency'
import useExpenseStore from '../store/expenseStore';
import AddExpense from '../components/AddExpense';
import { UIButton } from '@expense-app/ui';

type RootStackParamList = {
    'Manage Expense': { 
        expenseId: string,
        data?: Expense
    };
}

const RecentExpenses = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { expenses, totalExpense } = useExpenseStore()

    const expensePressHandler = (id: string) => {
        navigation.navigate('Manage Expense', { 
            expenseId: id,
            data: transactions.find(transaction => transaction.id === id)
        });
    }

    console.log('THE EXPENSES', expenses);
    
    return (
        <YStack>
            <YStack 
                height={230}
                w={'100%'}
                justifyContent="center"
                alignItems="center"
                borderBottomEndRadius={'$8'}
                borderBottomStartRadius={'$8'}
                bc={'$color.background'}
            >
                <YStack marginHorizontal={'$5'}>
                    <Text color={'$color.secondary'} fontSize="$4" fontWeight="medium">Total Daily Expense</Text>
                    <Text color={'$color.white'} fontSize="$9" fontWeight="bold">Ksh {totalExpense().toFixed(2)}</Text>
                </YStack>
            </YStack>

            <XStack justifyContent="space-between" alignItems="center" paddingHorizontal={'$4'} marginTop={'$4'}>
                <Text fontSize="$5" color={'$color.text'} fontWeight="bold">Recent Activity</Text>
                
                <Stack>
                    <Text color={'$color.gray900'} fontSize="$5" fontWeight="bold">View All</Text>
                </Stack>
            </XStack>

            <Card 
                // elevate
                bordered
                margin={'$4'} 
                padding="$4" 
                borderRadius="$4"
                borderColor={'$color.gray900'}
                backgroundColor={'transparent'}
            >
                {
                    expenses && expenses.length ? (
                        <ScrollView>
                            {expenses.map((expense: Expense, index: number) => (
                                <Stack key={expense.id}>
                                    <XStack justifyContent="space-between" onPress={() => expensePressHandler(expense.id)}>
                                        <YStack>
                                            <Text fontSize="$5" fontWeight="500">{expense.name}</Text>
                                            <Text color="$color.gray900">{expense.paymentMethod}</Text>
                                        </YStack>
                                        <YStack alignItems="flex-end">
                                            <Text 
                                                fontSize="$5" 
                                                fontWeight="500" 
                                                color={expense.amount > 0 ? '$color.success' : '$color.error'}
                                            >
                                                {expense.amount > 0 ? '+' : ''}{formatCurrency(expense.amount)}
                                            </Text>
                                            <Text color="$color.gray900">{expense.date}</Text>
                                        </YStack>
                                    </XStack>
                                    {index < expenses.length - 1 && (
                                        <Separator marginVertical="$2" />
                                    )}
                                </Stack>
                            ))}
                        </ScrollView>
                    ) : (
                        <AddExpense />
                    )
                }
                
            </Card>
        </YStack>
        
    )
}

export default RecentExpenses;