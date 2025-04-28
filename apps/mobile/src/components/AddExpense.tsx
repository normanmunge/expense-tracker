import { YStack, Text, Button } from 'tamagui'
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = { 'Manage Expense': undefined}

const AddExpense = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <YStack>
            <YStack jc='center' ac='center' gap='$5'>
                <Text textAlign='center'>You currently have no expenses 😊 </Text>
                <Button onPress={() => {
                  navigation.navigate('Manage Expense')
                }}>
                    Add Expense
                </Button>
            </YStack>
        </YStack>
    )
}

export default AddExpense;