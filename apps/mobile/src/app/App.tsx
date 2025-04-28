import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { tamaguiConfig } from '@expense-app/ui' 
import { TamaguiProvider, YStack, Stack, Paragraph } from 'tamagui';
import ProtectedNavigation from './navigation/ProtectedNavigation';
import AuthNavigation from './navigation/AuthNavigation';

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
  return (
    // <ErrorBoundary>
      <NavigationContainer>
        <TamaguiProvider config={tamaguiConfig} defaultTheme='dark' >
          <StatusBar style="light" />
            <YStack flex={1} backgroundColor={'$background'}>
              <AuthNavigation />
              {/* <ProtectedNavigation /> */}
            </YStack>
        </TamaguiProvider>
    </NavigationContainer>
    // </ErrorBoundary>
  )
}
