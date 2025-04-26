import { Text, styled } from 'tamagui'
// import { COLORS } from '@/apps/mobile/src/constants/colors'

export const UITitle = styled(Text, {
    variants: {
        isHeading: {
            true: {
                fontSize: 36,
                backgroundColor: 'transparent',
                color: '#fff'
            }
        },
        isDefault: {
            true: {
                fontSize: 16,
                color: '#fff'
            }
        }
    }
})

export default UITitle;