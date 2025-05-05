import { UIView, UIButton, UICategory } from "@expense-app/ui"
import { DUMMYCATEGORIES } from "../constants/mock"
import { ScrollView, Stack, Text, XStack, YStack } from "tamagui"

const Categories = () => {

    const handleSelectCategory = (category: string) => {
        console.log(category)
    }

    return (
        <UIView padding={16}>
            <UIView.Header>
                <Text>Select Categories</Text>
            </UIView.Header>
            <UIView.Content>
                <ScrollView>
                    <YStack marginTop={16}>
                        <XStack flexWrap="wrap" gap={10} justifyContent="flex-start">
                            {
                                DUMMYCATEGORIES.map((category) => (
                                    <UICategory
                                        key={category.id}
                                        onPress={() => {
                                            handleSelectCategory(category.id)
                                        }}
                                        icon={category.icon} 
                                        label={category.label}
                                    />
                                ))
                            }
                        </XStack>
                    </YStack>
                </ScrollView>
            </UIView.Content>
        </UIView>
    )
}

export default Categories;