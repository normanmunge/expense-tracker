import { styled, Button, GetProps } from "tamagui";

export const UIButton = styled(Button, {
    name: 'UIButton',
    variants: {
        iconify: {
            true: {
                backgroundColor: 'transparent',
                borderWidth: 0,
                padding: 0,
                margin: 0,
                borderRadius: 0,
                borderColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: 0,
                width: 'auto',
                height: 'auto',
                color: '$color',
                size: '$9',
                
            }
        },
        rounded: {
            true: {
                br: '100%',
                bc: '$color',
                color: '$color',
                size: '$9',
                w: '$9',
                h: '$9',
            }
        }
    } as const,
    defaultVariants: {
        iconify: false,
        rounded: false
    }
})

export type UIButtonProps = GetProps<typeof UIButton>