import { create } from 'zustand';
import { Expense } from '../types';
import { transactions } from '../mock'

export interface ExpenseState {
    expenses: Array<Expense>;
    addExpense: (expense: Expense) => void;
    deleteExpense: (expense: Expense) => void;
    updateExpense: (id: string, values: Omit<Expense, 'id'> ) => void;
    totalExpense: () => string;
}

const useExpenseStore = create<ExpenseState>()((set, get) => ({
    expenses: transactions,
    addExpense: (expense: Expense) => set((state) => {
        return {
            expenses: [...state.expenses, expense]
        }
    }),
    deleteExpense: (expense: Expense) => set((state) => {
        return {
            expenses: state.expenses.filter(exp => exp.id === expense.id)
        }
    }),
    updateExpense: (
        id: string, 
        values: Omit<Expense, 'id'>
    ) => set((state) => {
            return {
                expenses: state.expenses.map(exp => {
                    if(exp.id === id) {
                        exp.name = values.name
                        exp.amount = values.amount
                        exp.date = values.date
                        exp.paymentMethod = values.paymentMethod
                        exp.category = values.category
                        exp.description = values.description
                    }
                    return exp;
                })
            }
    }),
    totalExpense: () => get().expenses.reduce((acc, exp) => acc + exp.amount, 0).toFixed(2)
    }),
)

export default useExpenseStore;