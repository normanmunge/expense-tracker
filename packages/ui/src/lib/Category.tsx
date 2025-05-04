import { Stack, YStack } from "tamagui"
import { UIButton } from "./Button"

type UICategoryProps = {
    onPress: () => void
    icon: React.ComponentType<any>
    label: string
    active?: boolean
}

export const UICategory = ({ onPress, icon, label, active = false }: UICategoryProps) => {
    return (
        <UIButton 
            cardIcon 
            backgroundColor={active ? '$color.accent' : '$color.secondary'} 
            borderColor={'transparent'}
            justifyContent='center'
            alignItems='center'
            height={'100%'}
            width={'inherit'}
            paddingVertical={8}
            borderRadius={'$md'}
        >
            <YStack alignItems='center' justifyContent='center' onPress={onPress}>
                <Stack 
                    borderRadius={'100%'} 
                    height={40} 
                    width={40} 
                    justifyContent='center'
                    alignItems='center'
                    backgroundColor={active ? '$color.white' : '$color.accent300'}
                >
                    <UIButton.Icon icon={icon} color={active ? '$color.accent' : '$color.white'} />
                </Stack>
                
                <UIButton.Text color={active ? '$color.white' : '$color.text'}>
                    {label}
                </UIButton.Text>
            </YStack>
        </UIButton>
    )
}