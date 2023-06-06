import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/Navigation';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import config from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';

//7 Days Error Occured
import 'core-js/es/symbol/async-iterator';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true
  }
});

function App() {
  return (
    
    <NavigationContainer>
      <AuthContextProvider>
        <RootNavigator />
      </AuthContextProvider>
        
     
      <StatusBar style="auto" />

    </NavigationContainer>
    
  );
}

export default withAuthenticator(App);
