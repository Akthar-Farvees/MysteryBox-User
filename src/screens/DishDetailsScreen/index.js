import { useState } from "react";
import { View,Text, StyleSheet, Pressable  } from "react-native";
import restaurants from './../../../assets/data/restaurants.json';
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const restaurant =  restaurants[0].dishes[0];

const DishDetaileScreen = () => {

    const [quantity, setQuantity] = useState(1);
    const navigation = useNavigation();

    const onMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const onPlus = () => {
        setQuantity(quantity + 1);
    };

    const getTotal = () => {
        return (restaurant.price * quantity).toFixed(2);
    };

    return(
        <View style={styles.page}>
            
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.description}>{restaurant.description}</Text>
            <View style={styles.separator}/>

            <View style={styles.row}>
                <AntDesign 
                  name="minuscircleo" 
                  size={60} 
                  color={"black"} 
                  onPress={onMinus} 
                  />
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign 
                  name="pluscircleo" 
                  size={60} 
                  color={"black"} 
                  onPress={onPlus}
                  />
            </View>    

            <Pressable onPress={() => navigation.navigate("Basket")} style={styles.button}>
                <Text style={styles.buttonText}>Add {quantity} to busket &#8226; <Text style={{color:'#E1E1E1', fontWeight: '400'}}>Rs {getTotal()}</Text></Text>
            </Pressable>        

        </View>
    );
};


const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 20, //temp Fix
        padding: 10,
    },
    name: {
        fontSize: 30,
        fontWeight: "600",
        marginVertical: 10,
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        marginVertical: 10,
    },

    description: {
        textAlign: 'justify',
        // padding: 10,
        color: '#696969',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    quantity: {
        fontSize: 25,
        fontWeight: "450",
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: "black",
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
    },
    
});

export default DishDetaileScreen;