import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DEFAULT_IMAGE = "https://edu.ceskatelevize.cz/storage/video/placeholder.jpg";
 
const RestaurantItem = ({restaurant}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Restaurant", {id: restaurant.id})
}
  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
    {/* Restaurant Item */}
    <View style={styles.restaurantContainer} >
      <Image
        source={{uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE}}
        style={styles.image} />
        <View style={styles.row}>
          <View>
            <Text style={styles.title} >{restaurant.name}</Text>
            <Text style={styles.subTitle} >LKR {restaurant.deliveryFee.toFixed(1)} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text>
          </View>

          <View style={styles.rating}>
            <Text style={styles.rtingText}>{restaurant.rating.toFixed(1)}</Text>
          </View>
        </View>
    </View>
    </Pressable>
    
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
    
    restaurantContainer: {
      width: '100%',
      marginVertical: 10,
    },
    image: {
      width: '100%',
      aspectRatio: 5 / 3,
      marginBottom: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginVertical: 5,
    },
    subTitle: {
      color: 'gray',
      marginBottom: 5,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
    rating:{
      marginLeft: "auto",
      backgroundColor: 'lightgray',
      width: 32,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
  
  });
  