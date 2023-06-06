import { createContext, useContext, useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketDish } from "../models";

const BasketContext =  createContext({});

 const BasketContextProvider = ({childern}) => {

    const addDishToBasket = (dish, quantity) => {

    };

    return (
        <BasketContext.Provider value={{addDishToBasket}}>
            {childern}
        </BasketContext.Provider>
    );
 };

 export default  BasketContextProvider;

 export const useBasketContext = () => useContext(BasketContext);