import Login from "@/src/screens/auth/Login";
import Signup from "@/src/screens/auth/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen 
            name={'login'}
            component={Login}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name={'signup'}
            component={Signup}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
)

export default AuthNavigation;