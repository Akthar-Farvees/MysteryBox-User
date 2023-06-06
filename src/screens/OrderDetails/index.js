import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import BasketListItem from "../../components/BasketListItem"

import orders from "../../../assets/data/orders.json"
import restaurants from "../../../assets/data/restaurants.json" 
import styles from "./style"


const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
       <View style={styles.page}>
            <Image
                source={{ uri: order.Restaurant.image }}
                style={styles.image}
                resizeMode="cover" />

       

            <View style={styles.container}>
                <Text style={styles.title}>{order.Restaurant.name}</Text>
                <Text style={styles.subTitle}>{order.status} &#8226; 2 days ago</Text>

                <Text style={{marginTop: 20,fontSize: 18,letterSpacing:0.7}}>Your orders</Text>
                
            </View>
          

        </View>
    </View>
  )
}


const OrderDetails = () => {
  return (

      <FlatList 
        ListHeaderComponent={OrderDetailsHeader}
        data = {restaurants[0].dishes}
        renderItem={({item}) => <BasketListItem BusketList={item} />} 
        />

  );
};





export default OrderDetails