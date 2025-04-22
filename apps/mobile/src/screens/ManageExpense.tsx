import { FunctionComponent } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useLayoutEffect } from "react"
import { View, StyleSheet } from "react-native"
import IconButton from "@expense-app/ui/lib/IconButton"
import { COLORS } from "../constants/colors"
import Button from "@expense-app/ui/lib/Button"

type ManageExpenseProps = {
    route?: {
        params: {
            expenseId: string
        }
    },
    navigation?: NativeStackNavigationProp<any>
}

const ManageExpense: FunctionComponent<ManageExpenseProps> = ({ route, navigation }) => {

    const expenseId = route?.params?.expenseId;
    const isEditing = !!expenseId

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

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button customStyle={styles.button} variant='flat' onPress={cancelHandler}>Cancel</Button>
                <Button customStyle={styles.button} onPress={confirmHandler}>
                    {isEditing ? 'Update': 'Add'}
                </Button>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton 
                        icon='trash-outline' 
                        size={36} 
                        color={COLORS.error} 
                        onPress={deleteExpense} 
                    />
                </View>
            )}
        </View>
    )
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: COLORS.background,
        alignItems: 'center'
    }
})