import {View, Text, StyleSheet, FlatList} from 'react-native';

import OrderListItem from '../../components/OrderListItem/index';
import orders from '../../../assets/data/orders.json';

const OrderScreen = () => {
    return (                             //marginVertical:20
        <View style={{flex: 1, width: "100%", padding: 10,}}> 
            <FlatList 
            data={orders} 
            renderItem={({item}) => <OrderListItem order={item}/> } />
        </View>
    );
};


const styles = StyleSheet.create({
    // page: {
    //     flex: 1,
    //     marginVertical: 50,
    // },
});

export default OrderScreen;