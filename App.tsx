import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { COLORS } from '@/constants/colors';
import { Ionicons } from "@expo/vector-icons";

import ManageExpense from "@/screens/ManageExpense";
import RecentExpense from "@/screens/RecentExpense";
import AllExpenses from "@/screens/AllExpenses";
import Settings from "./screens/Settings";



const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
    return (
        <BottomTabs.Navigator screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.background
          },
          headerTintColor: COLORS.barText,
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          tabBarStyle: {
            backgroundColor: COLORS.containerBackground,
            borderTopColor: COLORS.barText,
            borderTopWidth: 1
          },
          tabBarActiveTintColor: COLORS.barText,
          tabBarInactiveTintColor: COLORS.inactive
        }}>
           <BottomTabs.Screen 
              name="All Expenses" 
              component={AllExpenses} 
              options={{
                tabBarIcon: ({color, size}) => (
                  <Ionicons name="home-outline" size={size} color={color} />
                )
              }}
            />
            <BottomTabs.Screen
              name="Recent Expenses" 
              component={RecentExpense} 
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

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
              name="ExpensesOverview" 
              component={ExpensesOverview}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
