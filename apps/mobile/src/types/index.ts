
export type PaymentMethod = 'Cash' | 'Bank' | 'Mpesa' | 'Card';

export interface Expense {
    id: string;
    name: string;
    amount: number;
    date: string;
    paymentMethod: PaymentMethod;
    category: string;
    description: string;
    isSelected?: boolean;
}

export interface Category {
    id: string;
    label: string;
    value: string;
    icon: React.ComponentType<any>;
}