import { Expense } from '../types'

export const transactions: Expense[] = [
    {
        id: '1',
        name: 'Uber',
        paymentMethod: 'Mpesa',
        amount: 100,
        date: '2021-01-01',
        category: 'Transport',
        description: 'Uber ride to the airport',
    },
    {
        id: '2',
        name: 'KFC',
        paymentMethod: 'Mpesa',
        amount: 1000,
        date: '2021-01-01',
        category: 'Food',
        description: 'KFC meal',
    },
    {
        id: '3',
        name: 'Amazon Prime',
        paymentMethod: 'Card',
        amount: 1000,
        date: '2021-01-01',
        category: 'Shopping',
        description: 'Amazon Prime subscription',
    },
    {
        id: '4',
        name: 'Book Purchase',
        paymentMethod: 'Mpesa',
        amount: 1000,
        date: '2021-01-01',
        category: 'Shopping',
        description: 'Book purchase',
    },
    {
        id: '5',
        name: 'Water Purchase',
        paymentMethod: 'Mpesa',
        amount: -3000,
        date: '2021-01-01',
        category: 'Bills',
        description: 'Water bill',
    }
]