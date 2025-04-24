import { Input, Label, Stack, XStack, YStack } from "tamagui"
import { Control, Controller, UseFormRegister } from "react-hook-form"

type InputProps = {
    size: string
    placeholder: string
    label?: string
    register: UseFormRegister<any>
    name: string
    control: Control<any>
}

export const UiInput = (props: InputProps) => {
    console.log('the Props', props)
    return (
    //    <>
    //         <Label>{props.label}</Label>
    //         <Input id={props.name} size={props.size} placeholder={props.placeholder} {...props.register(props.name) } />
    //    </>
    <Controller
    control={props.control}
        name={props.name}
        render={({ field }) => (
            <Input
                id={props.name}
                size={props.size}
                placeholder={props.placeholder}
                value={field.value}
                onChangeText={field.onChange}
            />
        )}
    />
    )
}