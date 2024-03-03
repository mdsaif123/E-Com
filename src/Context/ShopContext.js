import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"

export const ShopContext=createContext(null)

const getDefaultCart=()=>{
    let cart = {}
    for(let index = 0;index<all_product.length+1;index++){
        cart [index]=0
    }
    return cart;
}

const ShopContextProvider=(props)=>{
 const [CartItem,setCartItem]=useState(getDefaultCart());


const addToCart=(itemId)=>{
setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
console.log(CartItem)
}

const removeFromCart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    
    const GetTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in CartItem) {
            if (CartItem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * CartItem[item];
            }
        }
        return totalAmount; // Move this outside the loop
    }
    
    const getTotalCartItems=()=>{
        let totalItem=0
        for(let item in CartItem)
        {
            if(CartItem[item]>0)
            {
                totalItem += CartItem[item]
            }
        }
        return  totalItem
    }


const contextValue ={all_product,getTotalCartItems, GetTotalCartAmount,CartItem,addToCart,removeFromCart};
return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)
}

export default ShopContextProvider;