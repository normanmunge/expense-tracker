import { Input, Label, Paragraph, styled } from "tamagui"
import { Control, Controller, UseFormRegister } from "react-hook-form"

type InputProps = {
    size: string
    placeholder: string
    label?: string
    register: UseFormRegister<any>
    name: string
    control: Control<any>
    errors: string
}

export const UIInput = styled(Input, {
    variants: {
        isDark: {
            true: {
            }
        }
    }
})