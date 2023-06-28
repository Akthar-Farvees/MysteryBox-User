import { View, Text, StyleSheet, FlatList } from "react-native";

const BasketListItem = ({ basketDish }) => {
  console.log("This is test: ", basketDish?.Dish?.name);

  //Quantity * Price
  let totalVal = basketDish.quantity * basketDish?.dish?.price;

  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>{basketDish.quantity}</Text>
      </View>
      <Text style={{ fontWeight: "600" }}>{basketDish?.dish?.name}</Text>
      <Text style={{ marginLeft: "auto" }}>Rs. {totalVal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
});

export default BasketListItem;
