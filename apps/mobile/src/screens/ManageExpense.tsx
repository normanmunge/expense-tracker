import { FunctionComponent, useEffect, useState } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useLayoutEffect } from "react"
//import IconButton from "@expense-app/ui/lib/IconButton"
import { Stack, Form, Label, Input, Button, Paragraph, Spinner, TextArea, ScrollView } from "tamagui"
// import Button from "@expense-app/ui/lib/Button"
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { UiInput } from "@expense-app/ui"
import { PaymentMethod, Transaction } from "../types"

type ManageExpenseProps = {
    route?: {
        params: {
            expenseId: string,
            data?: Transaction
        }
    },
    navigation?: NativeStackNavigationProp<any>
}

const expenseSchema = z.object({
    name: z.string().min(1, {message: 'Name is required'}),
    amount: z.string().min(1, {message: 'Amount is required'}),
    date: z.string().min(1, {message: 'Date is required'}),
    description: z.string().min(1, {message: 'Description is required'}),
    category: z.string().min(1, {message: 'Category is required'}),
    paymentMethod: z.enum(['Mpesa', 'Bank', 'Cash', 'Card']),
})

type ExpenseFormData = z.infer<typeof expenseSchema>


const ManageExpense: FunctionComponent<ManageExpenseProps> = ({ route, navigation }) => {
    const data = route?.params?.data
    const expenseId = route?.params?.expenseId;
    const isEditing = !!expenseId

    const { 
        register,
        control, 
        handleSubmit, 
        setError, 
        formState: 
        { errors, isValid, isSubmitting }
    } = useForm<ExpenseFormData>({
        defaultValues: {
            name: data?.name || '',
            amount: data?.amount ? String(data.amount) : '',
            date: data?.date ? data.date : new Date().toISOString().split('T')[0],
            description: data?.description || '',
            category: data?.category || '',
            paymentMethod: data?.paymentMethod as PaymentMethod || 'Mpesa',
        },
        resolver: zodResolver(expenseSchema)
    })

    useLayoutEffect(() => {
        navigation?.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    const deleteExpense = () => {
        console.log('delete expense')
        navigation?.goBack()
    }

    const cancelHandler = () => {
        navigation?.goBack()
    }

    const confirmHandler = () => {
        navigation?.goBack()
    }

    const onSubmit: SubmitHandler<ExpenseFormData> = ((values) => {
        console.log(values)
    })

    return (
        <ScrollView>
            <Form 
                mx={'$4'}
                gap={'$2'}
                minWidth={300}
                borderWidth={1}
                borderRadius={'$4'}
                borderColor={'$borderColor'}
                padding={'$4'}
                backgroundColor={'$background'}
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* <UiInput label="Name" size={'$4'} placeholder="Enter name" register={register} name="name" /> */}
                <Label>Name</Label>
                {/* <UiInput control={control} size={'$4'} placeholder="Enter name" register={register} name="name" /> */}
                <Controller
                    control={control}
                    name="name"
                    render={({ field }) => (
                        <Input
                            id="name"
                            size={'$4'}
                            placeholder="Enter name"
                            value={field.value.toString()}
                            onChangeText={field.onChange}
                        />
                    )}
                />
                {errors.name && <Paragraph color={'$error'}>{errors.name.message}</Paragraph>}

                {/* <UiInput label="Amount" size={'$4'} placeholder="Enter amount" register={register} name="amount" /> */}
                <Label>Amount</Label>
                <Controller
                    control={control}
                    name="amount"
                    render={({ field }) => (
                        <Input
                            id="amount"
                            size={'$4'}
                            placeholder="Enter amount"
                            value={field.value}
                            onChangeText={field.onChange}
                        />
                    )}
                />


                {errors.amount && <Paragraph color={'$error'}>{errors.amount.message}</Paragraph>}

                {/* <UiInput label="Category" size={'$4'} placeholder="Enter category" register={register} name="category" /> */}
                <Label>Category</Label>
                <Controller
                    control={control}
                    name="category"
                    render={({ field }) => (
                        <Input
                            id="category"
                            size={'$4'}
                            placeholder="Enter category"
                            value={field.value}
                            onChangeText={field.onChange}
                        />
                    )}
                />

                {errors.category && <Paragraph color={'$error'}>{errors.category.message}</Paragraph>}

                {/* <UiInput label="Date" size={'$4'} placeholder="YYYY-MM-DD" register={register} name="date" /> */}
                <Label>Date</Label>
                <Controller
                    control={control}
                    name="date"
                    render={({ field }) => (
                        <Input
                            id="date"
                            size={'$4'}
                            placeholder="YYYY-MM-DD"
                            value={field.value}
                            onChangeText={field.onChange}
                        />
                    )}
                />
                {errors.date && <Paragraph color={'$error'}>{errors.date.message}</Paragraph>}

                <Label px={'$4'} htmlFor='description'>Description</Label>
                <Controller
                    control={control}
                    name="description"
                    render={({ field }) => (
                        <TextArea 
                            placeholder="Enter description" 
                            id="description" size={'$4'} 
                            value={field.value}
                            onChangeText={field.onChange}
                        />
                    )}
                />
                {errors.description && <Paragraph color={'$error'}>{errors.description.message}</Paragraph>}

                <Form.Trigger asChild disabled={!isValid || isSubmitting}>
                    <Button icon={isSubmitting ? <Spinner /> : undefined}>
                        {isSubmitting ? 'Adding...' : 'Add'}
                        {/* {isSubmitting && isEditing ? 'Updating...' : 'Update' }  */}
                    </Button>
                </Form.Trigger>
                
            </Form>
        </ScrollView>
    )
}

export default ManageExpense;