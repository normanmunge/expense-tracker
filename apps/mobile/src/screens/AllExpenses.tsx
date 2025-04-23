import { Button, Card, View, Text, YStack, XStack, Separator, ScrollView } from 'tamagui';
import { Transaction } from '../types';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { COLORS } from '../constants/colors';


const transactions: Transaction[] = [
    {
        id: '1',
        name: 'Uber',
        type: 'Mpesa',
        amount: 100,
        date: '2021-01-01',
        category: 'Transport',
    },
    {
        id: '2',
        name: 'KFC',
        type: 'Mpesa',
        amount: 1000,
        date: '2021-01-01',
        category: 'Food',
    },
    {
        id: '3',
        name: 'Amazon Prime',
        type: 'Debit Card',
        amount: 1000,
        date: '2021-01-01',
        category: 'Shopping',
    },
    {
        id: '4',
        name: 'Book Purchase',
        type: 'Mpesa',
        amount: 1000,
        date: '2021-01-01',
        category: 'Shopping',
    },
    {
        id: '5',
        name: 'Water Purchase',
        type: 'Mpesa',
        amount: -3000,
        date: '2021-01-01',
        category: 'Bills',
    }
]

const formatCurrency = (amount: number) => {
    return amount.toLocaleString('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 2
    });
  };

type RootStackParamList = {
    'Manage Expense': { expenseId: string };
}

const AllExpenses = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const expensePressHandler = (id: string) => {
        navigation.navigate('Manage Expense', { 
            expenseId: id
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
                    <Text color="#fff" fontSize="$9" fontWeight="bold">Ksh 10000.00</Text>
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
                    {transactions.map((transaction, index) => (
                        <View key={transaction.id}>
                            <Button justifyContent="space-between" chromeless onPress={() => expensePressHandler(transaction.id)}>
                                <YStack>
                                    <Text fontSize="$5" fontWeight="500">{transaction.name}</Text>
                                    <Text color="$gray11">{transaction.type}</Text>
                                </YStack>
                                <YStack alignItems="flex-end">
                                    <Text 
                                        fontSize="$5" 
                                        fontWeight="500" 
                                        color={transaction.amount > 0 ? '$green10' : '$red10'}
                                    >
                                        {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                                    </Text>
                                    <Text color="$gray11">{transaction.date}</Text>
                                </YStack>
                            </Button>
                            {index < transactions.length - 1 && (
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