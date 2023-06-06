import { useState } from "react";
import { View,Text, StyleSheet, FlatList  } from "react-native";
import restaurants from './../../../assets/data/restaurants.json';
import {AntDesign} from '@expo/vector-icons';
import BusketListItem from "../../components/BasketListItem";


const restaurant =  restaurants[0];

// const BusketListItem = ({BusketList}) => {
//     return(
//         <View style={styles.row}>
//         <View style={styles.quantityContainer}>
//             <Text>1</Text>
//         </View>
//         <Text style={{fontWeight: '600'}}>{BusketList.name}</Text>
//     <Text style={{marginLeft: 'auto',}}>Rs {BusketList.price}</Text>
//     </View>
    
//     );
// };

const Busket = () => {

    return(
        <View style={styles.page}>
            
            <Text style={styles.name}>{restaurant.name}</Text>

            <Text style={{fontWeight: 'bold', fontSize: 19, marginTop: 20,}}>Your Item</Text>

           <FlatList
           showsVerticalScrollIndicator={false}
            data={restaurant.dishes}
            renderItem={({item}) => <BusketListItem BusketList={item}/>}
           />
            
            
            <View style={styles.separator}/>

            <View style={styles.button}>
                <Text style={styles.buttonText}>Create Order</Text>
            </View>        

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
        marginVertical:15,
        paddingHorizontal: 10,

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
    quantityContainer: {
        backgroundColor: 'lightgray',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    },
    
});

export default Busket;