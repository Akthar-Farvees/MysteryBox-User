import { StyleSheet,View, FlatList } from 'react-native';
import RestaurantItem from '../../components/ResaurantItem';
import { useEffect, useState } from 'react';
// import restaurants from '../../../assets/data/restaurants.json';
import { DataStore } from 'aws-amplify';
import {Restaurant} from '../../models';

export default function HomeScreen() {
    
    const [restaurants, setRestaurants] = useState([]);

    // const fetchRestaurants = async () => {
    //     const results = await DataStore.query(Restaurant);
    //     setRestaurants(results);
    // }

  
    useEffect(() => {
        // fetchRestaurants();

        DataStore.query(Restaurant).then(setRestaurants);

    }, []);

    return (
        <View style={styles.page}>
        <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestaurantItem restaurant={item} />}
            showsVerticalScrollIndicator={false}
        />
        </View>
    );
}


const styles = StyleSheet.create({
    page: {
        paddingRight:10,
        paddingLeft:10,
        
      },
});
