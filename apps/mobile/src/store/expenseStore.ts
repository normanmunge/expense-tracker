import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { zustandStorage } from './mmkv';
import { Expense } from '../types';

export interface ExpenseState {
    expenses: Array<Expense>;
    addExpense: (expense: Expense) => void;
    deleteExpense: (expense: Expense) => void;
    updateExpense: (id: string, values: Omit<Expense, 'id'> ) => void;
    totalExpense: () => number;
}

const useExpenseStore = create<ExpenseState>()(
    persist(
    (set, get) => ({
        expenses: [],
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
        totalExpense: () => get().expenses.reduce((acc, exp) => acc + exp.amount, 0)
    }), {
        name: 'expense-app',
        storage: createJSONStorage(() => zustandStorage),
    })
)

export default useExpenseStore;