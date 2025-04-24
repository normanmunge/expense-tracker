
export type PaymentMethod = 'Cash' | 'Bank' | 'Mpesa' | 'Card';

export interface Transaction {
    id: string;
    name: string;
    amount: number;
    date: string;
    paymentMethod: PaymentMethod;
    category: string;
    description: string;
}