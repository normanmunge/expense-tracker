import { ShoppingCart, Slash, Ticket } from '@tamagui/lucide-icons';
import { Category } from '../types';
export const DUMMYEXPENSES = [
    {
        id: 'e1',
        description: 'Lunch',
        amount: 1000,
        date: new Date('2025-12-19'),
        category: 'Food',
        mode: 'Mpesa'
    },
    {
        id: 'e2',
        description: 'Fuel',
        amount: 2000,
        date: new Date('2025-12-19'),
        category: 'Transport',
        mode: 'Cash'
    },
    {
        id: 'e3',
        description: 'Electricity',
        amount: 3000,
        date: new Date('2025-12-19'),
        category: 'Bills',
        mode: 'Bank Transfer'
    },
    {
        id: 'e4',
        description: 'Gift for Elliot',
        amount: 1000,
        date: new Date('2025-12-19'),
        category: 'Gifts',
        mode: 'Mpesa'
    },
    {
        id: 'e5',
        description: 'Gift for Esther',
        amount: 2000,
        date: new Date('2025-12-19'),
        category: 'Gifts',
        mode: 'Mpesa'
    },
    {
        id: 'e6',
        description: 'Water Purchase',
        amount: 500,
        date: new Date('2025-12-19'),
        category: 'Bills',
        mode: 'Mpesa'
    }
]

export const DUMMYCATEGORIES: Category[] = [
    { id: 'groceries', label: 'Groceries', value: 'Groceries', icon: ShoppingCart },
    { id: 'dine_out', label: 'Dine Out', value: 'Dine Out', icon: Slash },
    { id: 'transport', label: 'Transport', value: 'Transport', icon: Ticket },
    { id: 'shopping', label: 'Shopping', value: 'Shopping', icon: ShoppingCart },
    { id: 'entertainment', label: 'Entertainment', value: 'Entertainment', icon: Ticket },
    { id: 'bills', label: 'Bills', value: 'Bills', icon: Slash },
    { id: 'internet', label: 'Internet', value: 'Internet', icon: Ticket },
    { id: 'health', label: 'Health', value: 'Health', icon: Ticket },
    { id: 'electricity', label: 'Electricity', value: 'Electricity', icon: Ticket },
    { id: 'rent', label: 'Rent', value: 'Rent', icon: Ticket },
    { id: 'insurance', label: 'Insurance', value: 'Insurance', icon: Ticket },
    { id: 'mortgage', label: 'Mortgage', value: 'Mortgage', icon: Ticket },
    { id: 'gifts', label: 'Gifts', value: 'Gifts', icon: Ticket },
    { id: 'subscriptions', label: 'Subscriptions', value: 'Subscriptions', icon: Ticket },
    { id: 'investments', label: 'Investments', value: 'Investments', icon: Ticket },
    { id: 'other', label: 'Other', value: 'Other', icon: ShoppingCart }
]