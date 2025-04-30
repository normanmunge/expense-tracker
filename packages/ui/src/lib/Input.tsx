import React from 'react'
import { Control, Controller, Path, FieldValues} from 'react-hook-form'
import { 
    ButtonIcon, 
    ColorTokens, 
    createStyledContext, 
    GetProps, 
    Input, 
    SizeTokens, 
    styled, 
    Text, 
    withStaticProperties, 
    YStack 
} from 'tamagui'


export const InputContext = createStyledContext({
    size: '$md' as SizeTokens,
    color: '$color' as ColorTokens
})

export const InputFrame = styled(Input, {
    name: 'Input',
    context: InputContext,
    backgroundColor: 'transparent',
    color: '$color',
    borderRadius: '$sm',
    borderWidth: 1,
    borderColor: '$borderColor',
    paddingHorizontal: '$3',
    focusStyle: {
        borderColor: '$primary',
        borderWidth: 2,
        outlineWidth: 2,
        outlineColor: '$primary',
        outlineStyle: 'solid'
    }
})

type InputFrameProps = GetProps<typeof Input>

const Label = styled(Text, {
    name: 'Label',
    context: InputContext,
    color: '$color',
    fontSize: 14,
    paddingVertical: 8,
})

type LabelProps = GetProps<typeof Label> & {
    children: React.ReactNode
}

export const InputLabel = ({ children, ...props }: LabelProps) => {
    return <Label {...props}>{children}</Label>
}

const CustomInput = withStaticProperties(InputFrame, {
    Props: InputContext.Provider,
    Label: InputLabel,
    Icon: ButtonIcon
})

type FormInputProps<T extends FieldValues> = {
    control: Control<T>
    name: Path<T>
    label?: string
    placeholder?: string
    secureTextEntry?: boolean
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined
    keyboardType?: 'default' | 'email-address' | 'number-pad'
    defaultValue?: string
    disabled?: boolean
}

const UIInput = <T extends FieldValues>({
    control,
    name,
    label = '',
    placeholder = '',
    secureTextEntry = false,
    autoCapitalize = 'none',
    keyboardType = 'default',
    defaultValue = '',
    disabled = false
}: FormInputProps<T>) => {
    return (
        <YStack>
            
            {
                label && (
                    <CustomInput.Label>{label}</CustomInput.Label>
                )
            }
        
            <Controller 
                control={control}
                name={name}
                defaultValue={defaultValue as any}
                render={({ 
                    field: {onChange, onBlur, value },
                    fieldState: { error }
                }) => (
                    <YStack>
                        <CustomInput 
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            secureTextEntry={secureTextEntry}
                            autoCapitalize={autoCapitalize}
                            keyboardType={keyboardType}
                            disabled={disabled}
                            autoFocus={true}
                            tabIndex={0}
                        />
                        { error && (
                            <Text color='$error' fontSize={14} mt={4}>
                                {error.message}
                            </Text>
                        )}
                    </YStack>
                )}
            />
        </YStack>
    )
}

export default UIInput;