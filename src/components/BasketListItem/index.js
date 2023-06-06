import { useState } from "react";
import { View,Text, StyleSheet, FlatList  } from "react-native";

import restaurants from "../../../assets/data/restaurants.json"

const restaurant =  restaurants[0];

const BasketListItem = ({BusketList}) => {
    return(
        <View style={styles.row}>
        <View style={styles.quantityContainer}>
            <Text>1</Text>
        </View>
        <Text style={{fontWeight: '600'}}>{BusketList.name}</Text>
    <Text style={{marginLeft: 'auto',}}>Rs {BusketList.price}</Text>
    </View>
    
    );
};

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:15,
        paddingHorizontal: 10,

    },
    quantityContainer: {
        backgroundColor: 'lightgray',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    },
    
});

export default BasketListItem