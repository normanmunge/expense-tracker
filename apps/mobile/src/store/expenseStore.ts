import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
//import { zustandStorage } from './mmkv';
import { Expense } from '../types';

export interface ExpenseState {
    filters: {
        limit: number;
        page: number;
    },
    sortBy: string;
    sortOrder: string;
    search: string;

    // expenses: Array<Expense>;
    // addExpense: (expense: Expense) => void;
    // deleteExpense: (expense: Expense) => void;
    // updateExpense: (id: string, values: Omit<Expense, 'id'> ) => void;
    totalExpense: (expenses: Array<Expense>) => number;
}

const useExpenseStore = create<ExpenseState>()(
    persist(
    (set, get) => ({
        filters: {
            limit: 10,
            page: 1,
        },
        sortBy: 'date',
        sortOrder: 'desc',
        search: '',
        // expenses: [],
        // addExpense: (expense: Expense) => set((state) => {
        //     return {
        //         expenses: [...state.expenses, expense]
        //     }
        // }),
        // deleteExpense: (expense: Expense) => set((state) => {
        //     return {
        //         expenses: state.expenses.filter(exp => exp.id === expense.id)
        //     }
        // }),
        // updateExpense: (
        //     id: string, 
        //     values: Omit<Expense, 'id'>
        // ) => set((state) => {
        //         return {
        //             expenses: state.expenses.map(exp => {
        //                 if(exp.id === id) {
        //                     exp.name = values.name
        //                     exp.amount = values.amount
        //                     exp.date = values.date
        //                     exp.paymentMethod = values.paymentMethod
        //                     exp.category = values.category
        //                     exp.description = values.description
        //                 }
        //                 return exp;
        //             })
        //         }
        // }),
        totalExpense: (expenses: Array<Expense>) => expenses.reduce((acc, exp) => acc + exp.amount, 0)
    }), {
        name: 'expense-app',
        //storage: createJSONStorage(() => zustandStorage),
        storage: createJSONStorage(() => AsyncStorage),
    })
)

export default useExpenseStore;