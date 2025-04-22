import { View, FlatList, Text, StyleSheet, Pressable } from "react-native";
import type { FunctionComponent } from 'react';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Expense } from '../../types';
import Card from '@expense-app/ui/lib/Card'

import { DateTime } from 'luxon'

type RootStackParamList = {
    'Manage Expense': {
        expenseId: string
    }
}

const ExpenseItem: FunctionComponent<Expense> = (itemData) => {

    const { id, description, amount, mode, date } = itemData;

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const expensePressHandler = () => {
        navigation.navigate('Manage Expense', {
            expenseId: id
        })
    }

    return (
        <Pressable 
            onPress={expensePressHandler} 
            style={({pressed}) => pressed && styles.pressed}
        >
            <View style={styles.container}>
                <View style={styles.descriptionContainer}>
                    <Text>{itemData.description} - {itemData.category} </Text>
                    <Text>{itemData.amount.toFixed(2)}</Text>
                </View>
                <View style={styles.modeContainer}>
                    <Text>{itemData.mode}</Text>
                    <Text>{DateTime.fromJSDate(itemData.date).toLocaleString(DateTime.DATE_MED)}</Text>
                </View>
            </View>
        </Pressable>
       
    )
}

type ListProps = {
    expenses: Expense[]
}

const ExpensesList: FunctionComponent<ListProps> = ({expenses }) => {
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


const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    pressed: {
        opacity: 0.75
    }
})