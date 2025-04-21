import { FlatList, Text } from "react-native";
import { Expense } from '@/utils/types';
import Card from '@/ui/Card'


const ExpenseItem = (itemData: Expense) => {
    return <Text>{itemData.description}</Text>
}

type ListProps = {
    expenses: Expense[]
}

const ExpensesList =  ({expenses }: ListProps) => {
    return (
        <Card>
            <FlatList 
                data={expenses} 
                renderItem={({ item }: {item: Expense}) => (
                    <ExpenseItem {...item} />
                )} 
                keyExtractor={(item) => item.id }
            />
        </Card>
    )
}

export default ExpensesList;