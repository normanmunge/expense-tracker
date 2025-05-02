import { 
    styled, 
    Stack, 
    Text, 
    GetProps, 
    createStyledContext, 
    SizeTokens, 
    ColorTokens,
    useTheme, 
    withStaticProperties, 
    getTokens 
} from "tamagui";
import { getSize } from '@tamagui/get-token'
import { cloneElement, ReactElement, useContext } from 'react'

export const ButtonContext = createStyledContext({
    size: '$md' as SizeTokens,
    color: '$color' as ColorTokens
})

export const ButtonFrame = styled(Stack, {
    name: 'Button',
    context: ButtonContext,
    backgroundColor: '$background',
    borderRadius: '$sm',
    borderWidth: 1,
    borderColor: '$background',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    pressStyle: {
        backgroundColor: '$gray900'
    },
    variants: {
        size: {
            '...size': (name) => {
                const size = getSize(name)
                return {
                    height: size,
                    borderRadius: Number(size) / 2,
                    gap: Number(size) * 0.2,
                    paddingVertical: '$5'
                }
            }
        },
        outlined: {
            true: {
                backgroundColor: 'transparent',
                color: '$color',
                borderColor: 'transparent',
                pressStyle: {
                    backgroundColor: 'transparent'
                }
            }
        },
        solid: {
            true: {
                backgroundColor: '$accent',
                color: '$color.white'
            }
        },
        solid_dark: {
            backgroundColor: 'transparent',
            outlineColor:'$gray900',
        },
        rounded: {
            true: {
                br: '100%',
                bc: '$primary',
                color: '$color',
                w: 36,
                h: 36,
                margin: 16
            }
        },
        cardIcon: {
            true: {
                bc: '$primary',
                color: '$accent',
                w: 60,
                h: 60,
                elevation: 6
            }
        }
    } as const,
    defaultVariants: {
        size: '$md',
        outlined: false
    }
})

export type UIButtonProps = GetProps<typeof UIButton>

export const StyledButtonText = styled(Text, {
    name: 'Text',
    context: ButtonContext,
    color: '$color',
    paddingHorizontal: 10,
    fontFamily: '$body',
    userSelect: 'none',
    variants: {
        size: {
            '...size': (name) => {
                const size = getSize(name)
                return {
                    fontSize: size ? Number(size) * 0.35 : 14,
                }
            }
        },
    } as const,
    defaultVariants: {
        size: '$md'
    }
})

type ButtonTextProps = GetProps<typeof StyledButtonText> & {
    children: React.ReactNode;
}

export const ButtonText = ({ children, ...props }: ButtonTextProps) => {
    return <StyledButtonText {...props}>{children}</StyledButtonText>;
}

export const ButtonIcon = (props: { icon: React.ComponentType<any>, color?: string }) => {
    
    const { size } = useContext(ButtonContext)
    const smallerSize = Number(getSize(size)) * 0.2
    const theme = useTheme()
    const Icon = props.icon

    return (
        <Icon 
            width={smallerSize} 
            height={smallerSize} 
            color={props.color || theme.color.get()} 
            backgroundColor={'transparent'}
        />
    )
}

export const UIButton = withStaticProperties(ButtonFrame, {
    Props: ButtonContext.Provider,
    Text: ButtonText,
    Icon: ButtonIcon,
})