import { FunctionComponent } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useLayoutEffect } from "react"
import { Form, Label, Input, XStack, Paragraph, Spinner, TextArea, ScrollView, Theme } from "tamagui"
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { PaymentMethod, Expense } from "../types"
import useExpenseStore from "../store/expenseStore"
import { UIButton, UITitle, UIView, UIInput } from "@expense-app/ui"
import { DUMMYCATEGORIES } from "../constants/mock"

type ManageExpenseProps = {
    route?: {
        params: {
            expenseId: string,
            data?: Expense
        }
    },
    navigation?: NativeStackNavigationProp<any>
}

const expenseSchema = z.object({
    id: z.string().optional(),
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
    const { updateExpense, addExpense } = useExpenseStore()

    console.log('THE DATA IS: data', data)

    const { 
        control, 
        handleSubmit, 
        setError, 
        formState: { errors, isValid, isSubmitting }
    } = useForm<ExpenseFormData>({
        defaultValues: {
            name: data?.name || '',
            amount: data?.amount ? String(data.amount) : '0',
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

    const onSubmit: SubmitHandler<ExpenseFormData> = ((values) => {
        console.log('values', values)
        if (isEditing) {
            const data = {
                ...values,
                amount: Number(values.amount)
            }
            updateExpense(expenseId, data)
        } else {
            
            const uuid = String(Date.now())
            
            const data = {
                ...values,
                id: uuid,
                amount: Number(values.amount)
            }

            addExpense(data)
        }
        
        navigation?.goBack()
    })

    return (
        <ScrollView contentContainerStyle={{ 
            flex: 1,
            justifyContent: 'center',
        }}>
            <Form 
                marginHorizontal={16}
                gap={8}
                padding={16}
                justifyContent='center'
                alignContent='center'
                // backgroundColor={'transparent'}
                onSubmit={handleSubmit(onSubmit)}
            >

                <UIInput<ExpenseFormData>
                    control={control}
                    name='name'
                    label='Name'
                    placeholder='Enter name'
                    keyboardType='default'
                    defaultValue={data?.name}
                    isDefault
                    autoFocus={true}
                />

                <UIInput<ExpenseFormData>
                    control={control}
                    name='amount'
                    label='Amount'
                    placeholder='Enter amount'
                    keyboardType='number-pad'
                    defaultValue={String(data?.amount)}
                    isDefault
                />

                <UIInput<ExpenseFormData>
                    control={control}
                    name='category'
                    label='Category'
                    placeholder='Enter category'
                    keyboardType='default'
                    defaultValue={data?.category}
                    isSelectInput={true}
                    selectOptions={DUMMYCATEGORIES}
                    selectPlaceholder='Select category'
                />

                

                <UIInput<ExpenseFormData>
                    control={control}
                    name='date'
                    label='Date'
                    placeholder='YYYY--MM-DD'
                    keyboardType='default'
                    defaultValue={data?.date}
                />

                {/* <Label fontSize={14} color={'$color.background'}>Description</Label>
                <Controller
                    control={control}
                    name="description"
                    render={({ field }) => (
                        <TextArea 
                            placeholder="Enter description" 
                            id="description" size={'$4'} 
                            value={field.value}
                            onChangeText={field.onChange}
                            backgroundColor={'transparent'}
                        />
                    )}
                /> */}

                <UIInput<ExpenseFormData>
                    control={control}
                    name='description'
                    label='Description'
                    placeholder='Enter description'
                    isTextArea={true}
                    defaultValue={data?.description}
                />

                <Form.Trigger asChild disabled={!isValid || isSubmitting} marginTop={16}>
                    <UIButton size={'$md'} backgroundColor={'$color.accent'}>
                        <UIButton.Text color={'$color.white'}>
                            {isEditing 
                                ? (isSubmitting ? 'Updating...': 'Update' )
                                : (isSubmitting ? 'Adding...' : 'Add')
                            }
                        </UIButton.Text>
                    </UIButton>
                </Form.Trigger>
                
            </Form>
        </ScrollView>
    )
}

export default ManageExpense;