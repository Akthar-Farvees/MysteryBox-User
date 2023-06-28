import { StatusBar } from "expo-status-bar";
import RootNavigator from './src/Navigation'

import { NavigationContainer } from "@react-navigation/native";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import config from "./src/aws-exports";
import AuthContextProvider from "./src/contexts/AuthContext";
import BasketContextProvider from "./src/contexts/BasketContext";
import OrderContextProvider from "./src/contexts/OrderContext";

//7 Days Error Occured
import 'core-js/es/symbol/async-iterator';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <BasketContextProvider>
          <OrderContextProvider>
            <RootNavigator />
          </OrderContextProvider>
        </BasketContextProvider>
      </AuthContextProvider>

      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);


// Finally Finished
