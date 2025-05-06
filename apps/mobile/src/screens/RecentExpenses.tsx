import { Button, Card, Stack, Text, YStack, XStack, Separator, ScrollView } from 'tamagui';
import { Expense } from '../types';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { transactions } from '../mock'
import { formatCurrency } from '../utils/format-currency'
import useExpenseStore from '../store/expenseStore';
import AddExpense from '../components/AddExpense';
import { UIButton, UICategory, UIView } from '@expense-app/ui';
import { Figma, Plus } from '@tamagui/lucide-icons';
import { useQuery } from '@tanstack/react-query';
import { fetchExpenses } from '../api/expenses';
import { ActivityIndicator } from 'react-native';

type RootStackParamList = {
    'Manage Expense': { 
        expenseId: string,
        data?: Expense
    };
    'Categories': undefined;
}

const RecentExpenses = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { filters, totalExpense } = useExpenseStore()

    const { data: expenses, isLoading } = useQuery({
        queryKey: ['expenses', filters],
        queryFn: () => fetchExpenses()
    })

    const expensePressHandler = (expense: Expense) => {
        navigation.navigate('Manage Expense', { 
            expenseId: expense.id ?? '',
            data: expense
        });
    }

    console.log('THE EXPENSES', expenses);

    if (isLoading) {
        return <ActivityIndicator />
    }
    
    return (
        <UIView>
            <YStack 
                height={230}
                justifyContent="center"
                alignItems="center"
                borderBottomEndRadius={52}
                borderBottomStartRadius={52}
                bc={'$color.accent'}
            >
                <YStack marginHorizontal={16}>
                    <Text color={'$color.primary'} fontSize={16} fontWeight="medium">Total Daily Expense</Text>
                    <Text color={'$color.white'} fontSize={24} fontWeight="bold">Ksh {totalExpense(expenses ?? []).toFixed(2)}</Text>
                </YStack>
            </YStack>

            <YStack
                marginHorizontal={90} 
                marginTop={-40} 
                zIndex={1000} 
                backgroundColor={'$color.primary'}
                borderRadius={'$lg'}
                justifyContent="center"
                alignItems="center"
                paddingVertical={8}
            >
                <XStack  gap={10}>
                    <UICategory 
                        onPress={() => {
                            navigation.navigate('Manage Expense', {
                                expenseId: ''
                            })
                        }} 
                        icon={Plus} 
                        label="Add" 
                    />

                    <UICategory 
                        onPress={() => {
                            navigation.navigate('Categories')
                        }} 
                        icon={Figma} 
                        label="Category" 
                    />
                </XStack>
            </YStack>

            <UIView elevation={'$none'} padding={16}>
                <UIView.Content>
                    <YStack flex={1}>
                        <XStack justifyContent="space-between" alignItems="center" paddingHorizontal={5} marginTop={5}>
                            <Text fontSize={16} color={'$color.text'} fontWeight="semibold">Recent Activity</Text>
                            
                            <Stack>
                                <Text color={'$color.gray900'} fontSize={16} fontWeight="semibold">View All</Text>
                            </Stack>
                        </XStack>

                        <UIView 
                            // elevate
                            marginVertical={16} 
                            borderRadius={16}
                            borderColor={'$color.gray900'}
                            backgroundColor={'transparent'}
                            flex={1}
                            minHeight={200}
                        >
                            {
                                expenses && expenses.length ? (
                                    <ScrollView>
                                        {expenses.map((expense: Expense, index: number) => (
                                            <UIView backgroundColor={'$color.secondary'} padding={16} borderRadius={8} key={expense.id}>
                                                <XStack justifyContent="space-between" onPress={() => expensePressHandler(expense)}>
                                                    <YStack>
                                                        <Text fontSize={16} color={'$color.text'} fontWeight="500">{expense.name}</Text>
                                                        <Text color={'$color.gray900'}>{expense.paymentMethod}</Text>
                                                    </YStack>
                                                    <YStack alignItems="flex-end">
                                                        <Text 
                                                            fontSize={16} 
                                                            fontWeight="500" 
                                                            color={expense.amount > 0 ? '$color.success' : '$color.error'}
                                                        >
                                                            {expense.amount > 0 ? '+' : ''}{formatCurrency(expense.amount)}
                                                        </Text>
                                                        <Text color="$color.gray900">{expense.date}</Text>
                                                    </YStack>
                                                </XStack>
                                                {index < expenses.length - 1 && (
                                                    <Separator marginVertical={8} />
                                                )}
                                            </UIView>
                                        ))}
                                    </ScrollView>
                                ) : (
                                    <AddExpense />
                                )
                            }
                            
                        </UIView>
                    </YStack>
                </UIView.Content>
            </UIView>

            
        </UIView>
        
    )
}

export default RecentExpenses;