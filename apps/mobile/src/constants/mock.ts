import { ShoppingCart, Slash, Ticket } from '@tamagui/lucide-icons';
import { Category, type PaymentMethod } from '../types';
export const DUMMYEXPENSES = [
    {
        id: 'e1',
        name: 'Lunch',
        description: 'Lunch',
        amount: 1000,
        date: '2025-05-01',
        category: 'Food',
        paymentMethod: 'Mpesa' as PaymentMethod
    },
    {
        id: 'e2',
        name: 'Fuel',
        description: 'Fuel',
        amount: 2000,
        date: '2025-04-19',
        category: 'Transport',
        paymentMethod: 'Cash' as PaymentMethod
    },
    {
        id: 'e3',
        name: 'Electricity',
        description: 'Electricity',
        amount: 3000,
        date: '2025-12-19',
        category: 'Bills',
        paymentMethod: 'Bank Transfer' as PaymentMethod
    },
    {
        id: 'e4',
        name: 'Gift for Elliot',
        description: 'Gift for Elliot',
        amount: 1000,
        date: '2025-12-19',
        category: 'Gifts',
        paymentMethod: 'Mpesa' as PaymentMethod
    },
    {
        id: 'e5',
        name: 'Gift for Esther',
        description: 'Gift for Esther',
        amount: 2000,
        date: '2025-12-19',
        category: 'Gifts',
        paymentMethod: 'Mpesa' as PaymentMethod
    },
    {
        id: 'e6',
        name: 'Water Purchase',
        description: 'Water Purchase',
        amount: 500,
        date: '2025-12-19',
        category: 'Bills',
        paymentMethod: 'Mpesa' as PaymentMethod
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