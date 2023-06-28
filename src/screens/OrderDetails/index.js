// import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
// import BasketListItem from "../../components/BasketListItem";

// import orders from "../../../assets/data/orders.json";
// import restaurants from "../../../assets/data/restaurants.json";

// import styles from "./style";
// import { useOrderContext } from "../../contexts/OrderContext";
// import { useEffect, useState } from "react";
// import { useRoute } from "@react-navigation/native";


// const order = orders[0];

// const OrderDetailsHeader = ({ order }) => {

//   return (
//     <View>
//       <View style={styles.page}>
//         <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

//         <View style={styles.container}>
//           <Text style={styles.title}>{order.Restaurant.name}</Text>
//           <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>

//           <Text style={styles.menuTitle}>Your orders</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const OrderDetails = () => {
//   const [order, setOrder] = useState();
//   const [orderDisheItems, setOrderDishItems] = useState();
//   const { getOrder } = useOrderContext();
//   const route = useRoute();
//   const id = route.params?.id;

//   useEffect(() => {
//     getOrder(id).then(setOrder);
//   }, []);

//   if (!order) {
//     return <ActivityIndicator size={"large"} color="gray" />;
//   }

//   return (
//     <FlatList
//       ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
//       data={order.dishes}
//       renderItem={({ item }) => <BasketListItem basketDish={item} />}
//     />
//   );
// };

// export default OrderDetails;



import { View, Text, Image, FlatList } from "react-native";
import BasketListItem from "../../components/BasketListItem";

import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";

import style from "./style";

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={style.page}>
        <Image source={{ uri: order.Restaurant.image }} style={style.image} />

        <View style={style.container}>
          <Text style={style.title}>{order.Restaurant.name}</Text>
          <Text style={style.subtitle}>{order.status} &#8226; 2 days ago</Text>

          <Text style={style.menuTitle}>Your orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurants[1].dishes}
      renderItem={({ item }) => <BasketListItem basketDish={item} />}
    />
  );
};

export default OrderDetails;
