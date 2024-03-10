// import React, { useContext } from 'react'
// import "./CartItem.css"
// import { ShopContext } from '../../Context/ShopContext'
// import remove_icon from "../Assets/cart_cross_icon.png"

// const CartItem = () => {
//     const {GetTotalCartAmount,all_product,CartItem,removeFromCart}=useContext(ShopContext)
//   return (
//     <div className='cartitems'>
//       <div className="cartitems-format-main">
//         <p>Product</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
   

   
//       {all_product.map((e)=>{
//           if(CartItem[e.id]>0)
//           {
//            return  <div>
//                     <div className="cartitems-format cartitems-format-main">
//                     <img src={e.image} alt="" className='carticon-product-icon' />
//                     <p>{e.name}</p>
//                     <p>${e.new_price}</p>
//                     <button className="cartitem-quantity">{CartItem[e.id]}</button>
//                     <p>${e.new_price*CartItem[e.id]}</p>
//                     <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
//                 </div>
//                 <hr />
//             </div>
//         }
//    return null
//       })}
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//             <h1>Cart Totals</h1>
//             <div>
//                 <div className="cartitems-total-item">
//                     <p>Subtotal</p>
//                     <p>${GetTotalCartAmount()}</p>
//                 </div>
//                 <hr />
//                 <div className="cartitems-total-item">
//                     <p>Shipping Fee</p>
//                     <p>Free</p>
//                 </div>
//                 <hr />
//                 <div className="cartitems-total-item">
//                     <h3>Total</h3>
//                     <h3>${GetTotalCartAmount()}</h3>
//                 </div>
//             </div>
//             <button>Proceed to CheckOut</button>
//         </div>
//         <div className="cartitems-promocode">
//             <p>if you have promocode, Enter it here </p>
//             <div className="cartitems-promobox">
//                 <input type="text" placeholder='Promo code' />
//                 <button>Submit</button>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CartItem


import React, { useContext } from 'react';
import "./CartItem.css";
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItem = () => {
    const { GetTotalCartAmount, all_product, CartItem, removeFromCart } = useContext(ShopContext);

    return (
        <div className='container'>
            <table className="table table-sm">
                <thead className=''>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {all_product.map((e) => {
                        if (CartItem[e.id] > 0) {
                            return (
                                <tr key={e.id}>
                                    <td><img src={e.image} alt="" className='carticon-product-icon' /></td>
                                    <td>{e.name}</td>
                                    <td>${e.new_price}</td>
                                    <td><button className="cartitem-quantity">{CartItem[e.id]}</button></td>
                                    <td>${e.new_price * CartItem[e.id]}</td>
                                    <td><img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" /></td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                </tbody>
            </table>
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${GetTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${GetTotalCartAmount()}</h3>
                </div>
                <button className="btn btn-primary my-3">Proceed to CheckOut</button>
            </div>
            <div className="cartitems-promocode mb-4">
                <p>if you have promocode, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" className="form-control my-3" placeholder='Promo code' />
                    <button className="btn btn-primary w-100">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
