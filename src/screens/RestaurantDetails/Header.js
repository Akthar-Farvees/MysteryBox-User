import { Image, View, FlatList, Text, StyleSheet } from "react-native";
import restaurants from '../../../assets/data/restaurants.json';
import styles from "./style";

const restaurant = restaurants[0];
("");

const DEFAULT_IMAGE = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";


const RestaurantHeader = ({restaurant}) => {

    return (

        <View style={styles.page}>
            <Image
                source={{ uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE }}
                style={styles.image}
                resizeMode="cover" />

       

            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text
                    style={styles.subTitle} >LKR
                    {restaurant.deliveryFee.toFixed(1)} &#8226;
                    {restaurant.minDeliveryTime}-
                    {restaurant.maxDeliveryTime} minutes</Text>
            </View>
            {/* Additionally I add */}
            <Text style={{marginLeft: 20, marginBottom: 2, fontSize: 20,marginTop: 5, fontWeight: '600', borderBottomColor: 'lightgray', borderBottomWidth: 1, marginRight: 20, color: 'gray'}}>Menu</Text>

          

        </View>

    );
};


export default RestaurantHeader;