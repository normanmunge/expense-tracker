import { Control, Controller, Path, FieldValues} from 'react-hook-form'
import { Input, Text, YStack } from 'tamagui'


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
                    <Text>{label}</Text>
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
                         <Input 
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            secureTextEntry={secureTextEntry}
                            autoCapitalize={autoCapitalize}
                            keyboardType={keyboardType}
                            disabled={disabled}
                            autoFocus={true}
                            focusable={true}
                            tabIndex={0}
                            backgroundColor={'transparent'}
                            borderColor={error ? '$error' : '$gray900'}
                            focusStyle={{
                                borderColor: error ? '$error': '$primary',
                                borderWidth: 2,
                                outlineWidth: 2,
                                outlineColor: '$primary',
                                outlineStyle: 'solid'
                            }}
                            paddingHorizontal={'$3'}
                            size={'$4'}
                            borderWidth={1}
                            borderRadius={'$4'}
                            color={'$text'}
                            placeholderTextColor={'$gray500'}
                        />
                        { error && (
                            <Text color='$error' fontSize={'$2'} mt='$1'>
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