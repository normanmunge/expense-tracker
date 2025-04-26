import { View, styled } from 'tamagui';

export const UIView = styled(View, {
    variants: {
        isBackgroundContainer: {
            true: {
                flex: 1,
                padding: 16,
                backgroundColor: '#000'
            }
        }
    }
})