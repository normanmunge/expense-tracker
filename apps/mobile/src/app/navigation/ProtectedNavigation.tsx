import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import ManageExpense from "@/src/screens/ManageExpense";
import RecentExpenses from "@/src/screens/RecentExpenses";
import Settings from "@/src/screens/Settings";
import AllExpenses from '@/src/screens/AllExpenses';

import { XStack, useTheme } from "tamagui";
import { Plus } from '@tamagui/lucide-icons';
import { UIButton } from '@expense-app/ui';
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

const ExpensesOverview = () => {
    const theme = useTheme()

    return (
      <BottomTabs.Navigator screenOptions={({navigation}) => ({
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.background
        },
        headerTintColor: theme.primary,
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.primary,
          borderTopWidth: 1
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.gray900,
        headerRight: ({tintColor}) => {
          return (
            <XStack 
              bc={theme.primary} 
              w={'$3'} 
              h={'$3'} 
              br={'100%'} 
              justifyContent="center"
              alignItems="center"
              marginRight={'$4'}
            >
               <UIButton 
                icon={Plus} 
                size={'$9'} 
                color={theme.primary.val} 
                iconify 
                onPress={() => {
                  navigation.navigate('Manage Expense')
                }}
            />
            </XStack>
          )
        }
      })}>
          <BottomTabs.Screen 
            name="Recent Expenses" 
            component={RecentExpenses}
            options={{
              tabBarIcon: ({color, size}) => (
                <Ionicons name="home-outline" size={size} color={color} />
              )
            }}
          />
          <BottomTabs.Screen
            name="All Expenses" 
            component={AllExpenses} 
            options={{
                tabBarIcon: ({color, size}) => (
                  <Ionicons name="calendar-outline" size={size} color={color} />
                ),
                
              }} 
            /> 
          <BottomTabs.Screen 
            name="Settings" 
            component={Settings} 
            options={{
              tabBarIcon: ({color, size}) => (
                <Ionicons name="cog-outline" size={size} color={color} />
              )
            }}
          />
      </BottomTabs.Navigator>
    )
}

const ProtectedNavigation = () => {
    const theme = useTheme();
    return (
      <Stack.Navigator screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
              backgroundColor: theme.background.val
          },
          headerTintColor: theme.primary.val,
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <Stack.Screen 
              name="ExpensesOverview" 
              component={ExpensesOverview}
              options={{
              headerShown: false
              }}
          />
          <Stack.Screen 
              name="Manage Expense" 
              component={ManageExpense} 
              options={{
              presentation: 'modal'
              }}
          />
      </Stack.Navigator>
    )
}


export default ProtectedNavigation;