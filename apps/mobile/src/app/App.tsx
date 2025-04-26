import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { COLORS } from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";

import ManageExpense from "../screens/ManageExpense";
import AllExpenses from "../screens/AllExpenses";
import RecentExpenses from "../screens/RecentExpenses";
import Login from '../screens/auth/Login'
import Settings from "../screens/Settings";
import config from "tamagui.config"
import { TamaguiProvider, View } from 'tamagui';

import { Plus } from '@tamagui/lucide-icons';
import { UIButton } from '@expense-app/ui';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
    return (
      <BottomTabs.Navigator screenOptions={({navigation}) => ({
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.containerBackground
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
        tabBarInactiveTintColor: COLORS.inactive,
        headerRight: ({tintColor}) => {
          return (
            <View 
              bc={COLORS.barText} 
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
                color={COLORS.barText} 
                iconify 
                onPress={() => {
                  navigation.navigate('Manage Expense')
                }}
            />
            </View>
          )
        }
      })}>
          <BottomTabs.Screen 
            // name="Recent Expenses" 
            // component={RecentExpenses}
            name="Login" 
            component={Login} 
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

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <StatusBar style="light" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.background
          },
          headerTintColor: COLORS.barText,
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
      </NavigationContainer>
      </SafeAreaView>
    </TamaguiProvider>
  )
}
