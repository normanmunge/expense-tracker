import { YStack, Text, Button, Paragraph } from 'tamagui'
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UIButton } from '@expense-app/ui';

type RootStackParamList = { 'Manage Expense': undefined}

const AddExpense = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <YStack>
            <YStack jc='center' ac='center' gap='$5'>
                <Text textAlign='center' color={'$color.white'}>You currently have no expenses 😊 </Text>
                <UIButton defaultDark size={'$4'} onPress={() => {
                  navigation.navigate('Manage Expense')
                }}>
                    <Paragraph color={'$color'}>
                        Add Expense
                    </Paragraph>
                </UIButton>
            </YStack>
        </YStack>
    )
}

export default AddExpense;