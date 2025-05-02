import { YStack, Text, Button, Paragraph, Stack, Theme } from 'tamagui'
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UIButton, UIView } from '@expense-app/ui';

type RootStackParamList = { 'Manage Expense': undefined}

const AddExpense = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <UIView backgroundColor={'$color.primary'} elevation={'$none'}>
            <UIView.Content>
                <YStack justifyContent='center' alignItems='center' minHeight={200} gap={10}>
                    <UIView.Text color={'$color.text'}>You currently have no expenses 😊 </UIView.Text>

                    <Stack>
                        <UIButton solid size={'$md'} onPress={() => {
                            navigation.navigate('Manage Expense')
                        }}>
                            <UIButton.Text>Add Expense</UIButton.Text>
                        </UIButton>
                    </Stack>
                </YStack>
            </UIView.Content>
        </UIView>
    )
}

export default AddExpense;