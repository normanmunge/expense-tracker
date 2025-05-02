import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useMemo } from 'react'
import { Control, Controller, Path, FieldValues} from 'react-hook-form'
import { 
    ButtonIcon, 
    ColorTokens, 
    createStyledContext, 
    GetProps, 
    Input, 
    Select, 
    Adapt,
    Sheet, 
    SizeTokens, 
    styled, 
    Text, 
    withStaticProperties, 
    YStack,
    TextArea
} from 'tamagui'


export const InputContext = createStyledContext({
    size: '$md' as SizeTokens,
    color: '$color' as ColorTokens
})

export const InputFrame = styled(Input, {
    name: 'Input',
    context: InputContext,
    backgroundColor: '$secondary',
    color: '$color',
    borderRadius: '$sm',
    borderWidth: 1,
    borderColor: '$borderColor',
    paddingHorizontal: '$3',
    focusStyle: {
        borderColor: '$accent',
        borderWidth: 2,
        outlineWidth: 2,
        outlineColor: '$accent',
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

const StyledTextArea = styled(TextArea, {
    name: 'TextArea',
    context: InputContext,
    backgroundColor: '$secondary',
    color: '$color',
    borderRadius: '$sm',
    borderWidth: 1,
    borderColor: '$borderColor',
    paddingHorizontal: '$3',
    paddingVertical: '$2',
    size: 200,
    focusStyle: {
        borderColor: '$accent',
        borderWidth: 2,
        outlineWidth: 2,
        outlineColor: '$accent',
        outlineStyle: 'solid'
    }
})

const StyledSelectTrigger = styled(Select.Trigger, {
    name: 'SelectTrigger',
    backgroundColor: '$secondary',
    color: '$color',
    borderRadius: '$sm',
    borderWidth: 1,
    borderColor: '$borderColor',
    paddingHorizontal: '$3',
    paddingVertical: '$2',
    height: 38,
    focusStyle: {
        borderColor: '$accent',
        borderWidth: 2,
        outlineWidth: 2,
        outlineColor: '$accent',
        outlineStyle: 'solid'
    }
})

type SelectOption = {
    id?: string
    label: string
    value: string
}

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
    isSelectInput?: boolean
    selectOptions?: SelectOption[]
    selectPlaceholder?: string
    isTextArea?: boolean
    isDefault?: boolean
    color?: ColorTokens | string
    autoFocus?: boolean
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
    disabled = false,
    isSelectInput = false,
    selectOptions = [],
    selectPlaceholder = 'Select an option',
    isTextArea = false,
    isDefault = false,
    color = '$color',
    autoFocus = false
}: FormInputProps<T>) => {
    console.log(`UIInput ${name}:`, {
        defaultValue
    })
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
                }) => {
                    console.log(`Controller ${name}:`, {
                        value
                    })
                    return (
                        <YStack>
                            { 
                                isSelectInput && (
                                <Select
                                    value={value}
                                    onValueChange={onChange}
                                    disablePreventBodyScroll={true}
                                >
                                    <StyledSelectTrigger borderColor={color} color={color}>
                                        <Select.Value placeholder={selectPlaceholder} color={color} />
                                    </StyledSelectTrigger>

                                    <Adapt when="sm" platform="touch">
                                        <Sheet
                                            modal
                                            dismissOnOverlayPress
                                            dismissOnSnapToBottom
                                            snapPointsMode="fit"
                                        >
                                            <Sheet.Frame>
                                                <Sheet.ScrollView>
                                                    <Adapt.Contents />
                                                </Sheet.ScrollView>
                                            </Sheet.Frame>
                                            <Sheet.Overlay />
                                        </Sheet>
                                    </Adapt>

                                    <Select.Content zIndex={200000}>
                                        <Select.ScrollUpButton 
                                            alignItems="center"
                                            justifyContent="center"
                                            position="relative"
                                            width="100%"
                                            height="$3"
                                        >
                                            <YStack zIndex={10}>
                                                <ChevronUp size={20} />
                                            </YStack>
                                        </Select.ScrollUpButton>
                                        <Select.Viewport minWidth={200}>
                                            {selectOptions.map((option, index) => (
                                                <Select.Item key={option.value} index={index} value={option.value}>
                                                    <Select.ItemText>{option.label}</Select.ItemText>
                                                    <Select.ItemIndicator marginLeft="auto">
                                                        <Check size={16} />
                                                    </Select.ItemIndicator>
                                                </Select.Item>
                                            ))}
                                        </Select.Viewport>
                                        <Select.ScrollDownButton
                                            alignItems="center"
                                            justifyContent="center"
                                            position="relative"
                                            width="100%"
                                            height="$3"
                                        >
                                            <YStack zIndex={10}>
                                                <ChevronDown size={20} />
                                            </YStack>
                                        </Select.ScrollDownButton>
                                    </Select.Content>
                                </Select>
                            )
                        }
                    
                    {
                        isDefault && (
                            <CustomInput 
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                placeholder={placeholder}
                                secureTextEntry={secureTextEntry}
                                autoCapitalize={autoCapitalize}
                                keyboardType={keyboardType}
                                disabled={disabled}
                                autoFocus={autoFocus}
                                tabIndex={0}
                                color={color}
                                borderColor={color}
                                placeholderTextColor={color}
                            />
                        )
                    }
                    { isTextArea && (
                        <StyledTextArea
                            placeholder={placeholder}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            borderColor={color}
                            placeholderTextColor={color}
                        />
                    )}
                    { error && (
                        <Text color='$error' fontSize={14} mt={4}>
                            {error.message}
                        </Text>
                    )}
                    </YStack>
                )
            }}
            />
        </YStack>
    )
}

export default UIInput;