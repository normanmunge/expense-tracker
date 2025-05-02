import type { FunctionComponent } from 'react';
import { Stack, H4, Button, Text, YStack } from 'tamagui';
import { supabase } from '../utils/supabase';
import { UIButton, UIView } from '@expense-app/ui';

const Settings: FunctionComponent = () => {
    return (
        <UIView backgroundColor={'transparent'} elevation={'$none'} marginHorizontal={16}>
            <UIView.Content alignContent='center' justifyContent='center'>
                <YStack>
                    <UIButton 
                        size={'$md'}
                        onPress={() => {
                            supabase.auth.signOut()
                        }}
                    >
                        <UIButton.Text color={'$color.white'}>
                            Log Out
                        </UIButton.Text>
                     </UIButton>
                </YStack>
            </UIView.Content>
        </UIView>
    )
}

export default Settings;