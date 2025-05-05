import type { FunctionComponent } from 'react';
import { Stack, H4, Button, Text, YStack, XStack } from 'tamagui';
import { supabase } from '../utils/supabase';
import { UIButton, UIView } from '@expense-app/ui';
import { ChevronRight, Info, LogOut, User } from '@tamagui/lucide-icons';

const Settings: FunctionComponent = () => {
    return (
        <UIView elevation={'$none'} padding="$md">
            <UIView.Content alignContent='center' justifyContent='center'>
                <YStack gap="$md">
                    <UIButton 
                        size={'$md'}
                        backgroundColor={'$color.secondary'}
                        borderColor={'$color.secondary'}
                        borderRadius={'$md'}
                        onPress={() => {
                            console.log('GO TO PERSONAL INFORMATION SCREEN')
                        }}
                        justifyContent='space-between'
                        paddingHorizontal={'$md'}
                    >
                        <XStack alignItems='center' gap="$5">
                            <UIButton.Icon icon={Info} color={'$color.text'} />
                            <UIButton.Text color={'$color.text'}>
                                Personal Information
                            </UIButton.Text>
                        </XStack>
                        
                        <UIButton.Icon icon={ChevronRight} color={'$color.text'} />
                    </UIButton>
                    <UIButton 
                        size={'$md'}
                        backgroundColor={'$color.secondary'}
                        borderColor={'$color.secondary'}
                        borderRadius={'$md'}
                        onPress={() => {
                            supabase.auth.signOut()
                        }}
                        justifyContent='flex-start'
                        paddingHorizontal={'$md'}
                    >
                        <UIButton.Icon icon={LogOut} color={'$color.text'} />
                        <UIButton.Text color={'$color.text'}>
                            Log Out
                        </UIButton.Text>
                     </UIButton>
                </YStack>
            </UIView.Content>
        </UIView>
    )
}

export default Settings;