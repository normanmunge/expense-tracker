export const formatCurrency = (amount: number) => {
    return amount.toLocaleString('en-KE', {
        style: 'currency',
        currency: 'KES',
        minimumFractionDigits: 2
    });
};