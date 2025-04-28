import { Stack, styled, GetProps } from 'tamagui';

export const UIView = styled(Stack, {
    name: 'UIView',
    variants: {
        isBackgroundContainer: {
            true: {
                flex: 1,
                padding: 16,
                backgroundColor: '$color.background'
            }
        },
        isAuthBackgroundContainer: {
            true: {
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: '$color.background',
                paddingHorizontal: '$5'
            }
        }
    }
} as const)

export type UIViewProps = GetProps<typeof UIView>