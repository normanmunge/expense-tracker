import { Expense } from "../types"
import { supabase } from "../utils/supabase"

const fetchExpenses = async () => {
    const { data, error } = await supabase.from('expenses').select('*')
    if (error) {
        throw error
    }
    return data
}


const addExpense = async (expense: Expense) => {
    const { data, error } = await supabase.from('expenses').insert(expense)
    if (error) {
        throw error
    }
    return data
}

const updateExpense = async (expense: Expense) => {
    const { data, error } = await supabase.from('expenses').update(expense).eq('id', expense.id)
    if (error) {
        throw error
    }
    return data
}

const deleteExpense = async (id: string) => {
    const { data, error } = await supabase.from('expenses').delete().eq('id', id)
    if (error) {
        throw error
    }

    return data
}

export { fetchExpenses, addExpense, updateExpense, deleteExpense }