import React, { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { tamaguiConfig } from '@expense-app/ui' 
import { TamaguiProvider, Theme, YStack } from 'tamagui';
import ProtectedNavigation from './navigation/ProtectedNavigation';
import AuthNavigation from './navigation/AuthNavigation';
import { ActivityIndicator, useColorScheme } from 'react-native';
import { supabase } from '@/src/utils/supabase';
import { Session } from '@supabase/supabase-js'
import { SafeAreaProvider } from 'react-native-safe-area-context';


// class ErrorBoundary extends React.Component {
//   state = { hasError: false, error: null };

//   static getDerivedStateFromError(error) {
//     return { hasError: true, error };
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <YStack>
//           <Paragraph>Something went wrong!</Paragraph>
//           <Paragraph>{this.state.error?.toString()}</Paragraph>
//         </YStack>
//       );
//     }
//     return this.props.children;
//   }
// }

export default function App() {
  const colorScheme = useColorScheme();
  const [session, setSession] = useState<Session | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const {data} = supabase.auth.onAuthStateChange(async (event, session) => {
        console.log('auth session', event, session)
        setSession(session)
        setIsSignedIn(true)
    })

    return () => {
        data.subscription.unsubscribe()
    }
  }, [])

  return (
    // <ErrorBoundary>
    <Suspense fallback={<ActivityIndicator />}>
      <NavigationContainer>
        <TamaguiProvider 
          config={tamaguiConfig} 
          defaultTheme={colorScheme === 'dark' ? 'dark': 'light'} 
          //defaultTheme='dark'
        >
          <SafeAreaProvider>
            <StatusBar style="light" />
              <Theme name='dark'>
                  <YStack flex={1} backgroundColor={'$background'}>
                    {
                      isSignedIn && session?.access_token ? <ProtectedNavigation /> : <AuthNavigation />
                    }
                  </YStack>
              </Theme>
          </SafeAreaProvider>
        </TamaguiProvider>
      </NavigationContainer>
    </Suspense>
    // </ErrorBoundary>
  )
}
