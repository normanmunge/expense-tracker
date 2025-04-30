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
    getTokens, 
    YStack,
    H2,
    XStack
} from "tamagui";
import { getSize } from '@tamagui/get-token'

export const ViewContext = createStyledContext({
    variant: 'default',
    elevation: 'sm',
    fullPage: false,
})

export const ViewFrame = styled(YStack, {
    name: 'View',
    context: ViewContext,
    backgroundColor: '$background',
    padding: '$5',
    variants: {
        variant: {
            default: {
                backgroundColor: '$background'
            },
            card: {
                backgroundColor: '$background',
                borderRadius: '$md',
            },
            outlined: {
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: '$borderColor',
            }
        },
        size: {
            '...size': (name) => {
                const size = getSize(name)
                return {
                    padding: size,
                    borderRadius: Number(size) / 2,
                    gap: Number(size) * 0.2,
                }
            }
        },
        elevation: {
           none: {},
           sm: {
            shadowColor: '$shadowColor',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 2,
           },
           md: {
            shadowColor: '$shadowColor',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
            elevation: 4,
           },
           lg: {
            shadowColor: '$shadowColor',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.2,
            shadowRadius: 12,
            elevation: 8,
           },
        },
        fullPage: {
            true: {
              flex: 1,
              padding: 16,
              gap: 4,
              alignContent: 'center',
              justifyContent: 'center',
            },
        },
    } as const,
    defaultVariants: {
        variant: 'default',
        size: 'medium',
        elevation: 'sm',
        fullPage: false,
    },
})

const Header = styled(YStack, {
    name: 'Header',
    width: '100%',
    marginBottom: '$2',
    context: ViewContext,
    variants: {
      size: {
        small: {},
        medium: {},
        large: {},
      }
    },
});
  
const Heading = styled(H2, {
    name: 'Heading',
    color: '$color',
    context: ViewContext,
    variants: {
      size: {
        sm: {
          fontSize: '$4',
        },
        md: {
          fontSize: '$6',
        },
        lg: {
          fontSize: 36,
        },
      },
    },
});

const Content = styled(YStack, {
    name: 'Content',
    context: ViewContext,
    flex: 1,
    gap: 4,
    width: '100%',
    variants: {
        fullPage: {
            true: {
                // alignContent: 'center',
                justifyContent: 'center',
            }
        }
    }
});
  
const Footer = styled(XStack, {
    name: 'Footer',
    context: ViewContext,
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: '$2',
    paddingTop: '$2',
    borderTopWidth: 1,
    borderTopColor: '$borderColor',
});

export const UIView = withStaticProperties(ViewFrame, {
    Props: ViewContext.Provider,
    Header: Header,
    Heading: Heading,
    Content: Content,
    Footer: Footer,
})