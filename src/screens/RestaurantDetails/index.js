
import { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import DishListItem from "../../components/DishListItem";
import styles from "./style";
import Header from './Header';
import { useRoute, useNavigation } from "@react-navigation/native";

import { DataStore } from "aws-amplify"; 
import {Basket, Restaurant} from '../../models';
import {Dish} from '../../models';
import { useBasketContext } from "../../contexts/BasketContext";

const RestaurantDetailsScreen = () => {

    const [restaurant, setRestaurant] = useState(null);
    const [dishes, setDishes] = useState([]);

    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params?.id;

    const {setRestaurant: setBasketRestaurant, basket, basketDishes} = useBasketContext();
    
    useEffect(() =>{

        if(!id) {
            return;
        }

        setBasketRestaurant(null);

        //Fetch the restaurant with the id
        DataStore.query(Restaurant, id).then(setRestaurant);
        
        DataStore.query(Dish, dish => dish.restaurantID.eq(id)).then(setDishes);


    }, [id]);

    useEffect(() => {
        setBasketRestaurant(restaurant);
    }, [restaurant]);

    if(!restaurant){
        return <ActivityIndicator color="red" size={"large"}/>;
}

console.log(restaurant);


    return (

        <View style={styles.page}>
 
            <FlatList
                ListHeaderComponent={() => <Header restaurant={restaurant}/>}
                scrollIndicatorInsets={false}
                data={dishes}
                renderItem={({ item }) => <DishListItem dish={item} />}
                keyExtractor={(item) => item.name}
            />

            <View style={styles.iconContainer}>
                <Ionicons
                    onPress={() => navigation.goBack()}
                    name="arrow-back-circle"
                    size={45}
                    color="white"
                    style={styles.imageIcon} 
                    />
            </View>

            {basket && (
                <Pressable
                onPress={() => navigation.navigate("Basket")}
                style={styles.button}
                >
                <Text style={styles.buttonText}>
                    Open basket ({basketDishes.length})
                </Text>
                </Pressable>
      )}

        </View>

    );
};


export default RestaurantDetailsScreen;
