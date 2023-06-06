import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DishListItem = ({dish}) => {
    const navigation = useNavigation();
    return (
       
        <Pressable onPress={() => navigation.navigate("Dish Details",{id: dish.id})} style={styles.container}>
            <View style={{flex: 1}}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
            <Text style={styles.price}>LKR {dish.price}</Text>
        </View>
        <View>
            {dish.image && (<Image style={styles.image} source={{uri: dish.image}}/>)}
        </View>
        </Pressable>
       
    );
};


const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    name:{
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 0.5,
    },
    description: {
        color: 'gray',
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
    },
    image: {
        height: 75,
        aspectRatio: 1,
        borderRadius: 12,
    },
});

export default DishListItem;