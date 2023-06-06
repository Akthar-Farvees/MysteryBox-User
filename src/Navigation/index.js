import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetails'
import DishDetaileScreen from '../screens/DishDetailsScreen';
import Busket from '../screens/Busket';
import OrderScreen from '../screens/OrderScreen';
import OrderDetails from '../screens/OrderDetails';
import ProfileScreen from '../screens/ProfileScreen';
import { useAuthContext } from '../contexts/AuthContext';

import { MaterialIcons,FontAwesome } from '@expo/vector-icons';
import { TabActions } from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    
    const { dbUser } = useAuthContext();

    return(
        <Stack.Navigator screenOptions={{headerShown: false, headerTitleAlign: "center"}}>
            {dbUser ? (
                <Stack.Screen name="Home" component={HomeTabs} />
            ) : (
                <Stack.Screen name="Profile" component={ProfileScreen} />
            )}

        </Stack.Navigator>
    );
};

const Tab = createBottomTabNavigator ();

const HomeTabs = () => {
    return (
        // Bottom tab navigation
        <Tab.Navigator   barStyle={{backgroundColor: "white", }} 
        screenOptions={{headerShown: false,}} 
        tabBarOptions={{
          activeTintColor: 'black',}}
          // inactiveTintColor: '#FFE005',
          >
            <Tab.Screen name='Order'  component={HomeStackNavigator} 
            options={{
                tabBarIcon: ({color}) => <MaterialIcons name="home-filled" size={24} color={color} />}}/>
            <Tab.Screen name='Orders' component={OrderStackNavigator}options={{
                tabBarIcon: ({color}) => <MaterialIcons  name="list-alt" size={24} color={color} />}}/>
            <Tab.Screen name='Profile' component={ProfileScreen}options={{
                tabBarIcon: ({color}) => <FontAwesome name="user" size={24} color={color} />}}/>
        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return(
        <HomeStack.Navigator screenOptions={{ headerTitleAlign: "center"}}>
        <HomeStack.Screen name='Home' component={HomeScreen} /> 
        <HomeStack.Screen name='Restaurant' options={{headerShown: false}}   component={RestaurantDetailsScreen} />
        <HomeStack.Screen name='Dish Details' component={DishDetaileScreen} />
        <HomeStack.Screen name='Basket' component={Busket} />
        </HomeStack.Navigator>
    )
}


const OrderStack = createNativeStackNavigator();
const OrderStackNavigator = () => {
    return(
        <OrderStack.Navigator screenOptions={{ headerTitleAlign: "center"}}>
        <OrderStack.Screen name='Orders' component={OrderScreen} />
        <OrderStack.Screen name='Order' component={OrderDetails} />
        </OrderStack.Navigator>
    )
}

export default RootNavigator