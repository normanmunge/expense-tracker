import { FunctionComponent } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useLayoutEffect } from "react"
import { Form, Label, Input, XStack, Paragraph, Spinner, TextArea, ScrollView } from "tamagui"
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { PaymentMethod, Expense } from "../types"
import useExpenseStore from "../store/expenseStore"
import { UIButton, UITitle, UIView, UIInput } from "@expense-app/ui"

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
        <ScrollView>
            <Form 
                mx={'$4'}
                gap={'$2'}
                minWidth={300}
                borderWidth={1}
                borderRadius={'$4'}
                borderColor={'$color'}
                padding={'$4'}
                onSubmit={handleSubmit(onSubmit)}
            >

                <UIInput<ExpenseFormData>
                    control={control}
                    name='name'
                    label='Name'
                    placeholder='Enter name'
                    keyboardType='default'
                    defaultValue={data?.name}
                />

                <UIInput<ExpenseFormData>
                    control={control}
                    name='amount'
                    label='Amount'
                    placeholder='Enter amount'
                    keyboardType='number-pad'
                    defaultValue={String(data?.amount)}
                />

                <UIInput<ExpenseFormData>
                    control={control}
                    name='category'
                    label='Category'
                    placeholder='Enter category'
                    keyboardType='default'
                    defaultValue={data?.category}
                />

                <UIInput<ExpenseFormData>
                    control={control}
                    name='date'
                    label='Date'
                    placeholder='YYYY--MM-DD'
                    keyboardType='default'
                    defaultValue={data?.date}
                />

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
                            backgroundColor={'transparent'}
                        />
                    )}
                />


                
                {/* <Label color={'$background'}>Name</Label>
                <XStack borderRadius={4}
                    borderWidth={1}
                    borderColor={'$color.gray900'}
                    backgroundColor={'$color.white'}
                >
                    <Controller
                    control={control}
                    name="name"
                    render={({ field }) => (
                        <Input
                            flex={1}
                            size="$4"
                            placeholder="Enter name"
                            placeholderTextColor={'$color.text'}
                            value={field.value.toString()}
                            onChangeText={field.onChange}
                            color={'$color.background'}
                            background={'$color.white'}
                            borderWidth={0}
                        />
                    )}
                />
                </XStack>
                {errors.name && <Paragraph color={'$error'}>{errors.name.message}</Paragraph>}
                
                <Label>Amount</Label>
                <Controller
                    control={control}
                    name="amount"
                    render={({ field }) => (
                        <Input
                            id="amount"
                            size={'$4'}
                            placeholder="Enter amount"
                            value={String(field.value)}
                            onChangeText={field.onChange}
                        />
                    )}
                />


                {errors.amount && <Paragraph color={'$error'}>{errors.amount.message}</Paragraph>}

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
                {errors.description && <Paragraph color={'$error'}>{errors.description.message}</Paragraph>} */}

                <Form.Trigger asChild disabled={!isValid || isSubmitting}>
                    {/* <Button icon={isSubmitting ? <Spinner /> : undefined}>
                        {isEditing 
                            ? (isSubmitting ? 'Updating...': 'Update' )
                            : (isSubmitting ? 'Adding...' : 'Add')
                        }
                    </Button> */}
                    <UIButton defaultDark  size={'$4'} marginVertical={'0'} color={'$color.background'}>
                        <Paragraph>
                        {isEditing 
                            ? (isSubmitting ? 'Updating...': 'Update' )
                            : (isSubmitting ? 'Adding...' : 'Add')
                        }
                        </Paragraph>
                    </UIButton>
                </Form.Trigger>
                
            </Form>
        </ScrollView>
    )
}

export default ManageExpense;