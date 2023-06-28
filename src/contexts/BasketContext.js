import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketDish } from "../models";
import { useAuthContext } from "./AuthContext";

const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();

  const [restaurant, setRestaurant] = useState(null);
  const [basket, setBasket] = useState(null);
  const [basketDishes, setBasketDishes] = useState([]);

  const totalPrice = basketDishes.reduce(
    (sum, basketDish) => sum + basketDish.quantity * basketDish.dish.price,
    restaurant?.deliveryFee
  );

  useEffect(() => {
    DataStore.query(Basket, (b) =>
      b.restaurantID.eq(restaurant.id).userID.eq(dbUser.id)
    ).then((baskets) => setBasket(baskets[0]));
  }, [dbUser, restaurant]);
  
  useEffect(() => {
    if (basket) {
      DataStore.query(BasketDish, (bd) => bd.basketID.eq(basket.id)).then(setBasketDishes);
      console.log("Fetched basket dishes:", setBasketDishes);
    }
  }, [basket]);
  

  
  const addDishToBasket = async (dish, quantity) => {
    // get the existing basket or create a new one
     let theBasket = basket || (await createNewBasket());
    console.log("New Fetched basket dishes:", dish, quantity);

    // create a BasketDish item and save to Datastore
    const newDish = await DataStore.save(
      // I Changed the code "Dish: dish" into "dish"
      new BasketDish({ quantity,  dish, basketID: theBasket.id })
    );

    setBasketDishes([...basketDishes, newDish]);
    
  };

  const createNewBasket = async () => {
    const newBasket = await DataStore.save(
      new Basket({ userID: dbUser.id, restaurantID: restaurant.id })
    );
    setBasket(newBasket);
    return newBasket;
  };

  return (
    <BasketContext.Provider
      value={{
        addDishToBasket,
        setRestaurant,
        restaurant,
        basket,
        basketDishes,
        totalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);
