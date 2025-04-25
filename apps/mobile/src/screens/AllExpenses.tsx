import { Button, Card, View, Text, YStack, XStack, Separator, ScrollView } from 'tamagui';
import { Expense } from '../types';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { COLORS } from '../constants/colors';
import { transactions } from '../mock'
import { formatCurrency } from '../utils/format-currency'
import useExpenseStore from '../store/expenseStore';

type RootStackParamList = {
    'Manage Expense': { 
        expenseId: string,
        data?: Expense
    };
}

const AllExpenses = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { expenses, totalExpense } = useExpenseStore()

    const expensePressHandler = (id: string) => {
        navigation.navigate('Manage Expense', { 
            expenseId: id,
            data: transactions.find(transaction => transaction.id === id)
        });
    }
    return (
        <View>
            <View 
                height={230}
                w={'100%'}
                justifyContent="center"
                alignItems="center"
                borderBottomEndRadius={'$8'}
                borderBottomStartRadius={'$8'}
                bc={COLORS.containerBackground}
            >
                <YStack marginHorizontal={'$5'}>
                    <Text color="#FFE81F" fontSize="$4" fontWeight="medium">Total Balance</Text>
                    <Text color="#fff" fontSize="$9" fontWeight="bold">Ksh {totalExpense()}</Text>
                </YStack>
            </View>

            <XStack justifyContent="space-between" alignItems="center" paddingHorizontal={'$4'} marginTop={'$4'}>
                <Text fontSize="$5" color="#3F3F3F" fontWeight="bold">Recent Activity</Text>
                <Button chromeless>
                    <Text color="#575757" fontSize="$5" fontWeight="bold">View All</Text>
                </Button>
            </XStack>

            <Card 
                elevate
                bordered
                marginHorizontal={'$4'} 
                padding="$4" 
                borderRadius="$4"
            >
                <ScrollView>
                    {expenses.map((expense: Expense, index: number) => (
                        <View key={expense.id}>
                            <Button justifyContent="space-between" chromeless onPress={() => expensePressHandler(expense.id)}>
                                <YStack>
                                    <Text fontSize="$5" fontWeight="500">{expense.name}</Text>
                                    <Text color="$gray11">{expense.paymentMethod}</Text>
                                </YStack>
                                <YStack alignItems="flex-end">
                                    <Text 
                                        fontSize="$5" 
                                        fontWeight="500" 
                                        color={expense.amount > 0 ? '$green10' : '$red10'}
                                    >
                                        {expense.amount > 0 ? '+' : ''}{formatCurrency(expense.amount)}
                                    </Text>
                                    <Text color="$gray11">{expense.date}</Text>
                                </YStack>
                            </Button>
                            {index < expenses.length - 1 && (
                                <Separator marginVertical="$2" />
                            )}
                        </View>
                    ))}
                </ScrollView>
            </Card>
        </View>
        
    )
}

export default AllExpenses;