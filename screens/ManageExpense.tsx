import { FunctionComponent } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useLayoutEffect } from "react"
import { View, StyleSheet } from "react-native"
import IconButton from "@/ui/IconButton"
import { COLORS } from "@/constants/colors"

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
    }

    return (
        <View style={styles.container}>
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
        padding: 24
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: COLORS.background,
        alignItems: 'center'
    }
})