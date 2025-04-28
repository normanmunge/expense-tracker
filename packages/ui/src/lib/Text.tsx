import { Text, styled } from 'tamagui'

export const UITitle = styled(Text, {
    variants: {
        isHeading: {
            true: {
                fontSize: 36,
                backgroundColor: 'transparent',
                color: '$white'
            }
        },
        isDefault: {
            true: {
                fontSize: 16,
                color: '$white'
            }
        }
    }
})

export default UITitle;