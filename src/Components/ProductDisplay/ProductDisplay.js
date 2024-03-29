// import React , { useContext }from 'react'
// import "./ProductDisplay.css"
// import start_icon from "../Assets/star_icon.png"
// import star_dull_icon from "../Assets/star_dull_icon.png"
// import { ShopContext } from '../../Context/ShopContext'


// const ProductDisplay = (props) => {
//     const {product} =props
//     const {addToCart}=useContext(ShopContext)
//   return (
//     <div className='productdisplay'>
//     <div className="productdisplay-left">
//         <div className="productdisplay-img-list">
//             <img src={product.image} alt="" />
//             <img src={product.image} alt="" />
//             <img src={product.image} alt="" />
//             <img src={product.image} alt="" />
//         </div>
//         <div className="productdisplay-img">
//             <img className='productdisplay-main-img' src={product.image} alt="" />
//         </div>
//     </div>
//     <div className="productdisplay-right">
//      <h1>{product.name}</h1>
//      <div className="productdisplay-right-star">
//         <img src={start_icon} alt="" />
//         <img src={start_icon} alt="" />
//         <img src={start_icon} alt="" />
//         <img src={start_icon} alt="" />
//         <img src={star_dull_icon} alt="" />
//         <p>(122)</p>
//      </div>
//      <div className="productdisplay-right-prices">
//         <div className="productdisplay-right-price-old">${product.old_price}</div>
//         <div className="productdisplay-right-price-new">${product.new_price}</div>
//      </div>
//      <div className="productdisplay-right-description">
//       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita voluptatum aspernatur facere obcaecati rem quod nam ex consequuntur, dolorem esse commodi quas animi reiciendis fugit doloremque accusamus veritatis provident nostrum.
//      </div>
//      <div className="productdisplay-right-size">
//       <h1>Select Size</h1>
//       <div className="productdisplay-right-sizes">
//         <div>S</div>
//         <div>M</div>
//         <div>L</div>
//         <div>XL</div>
//         <div>XXl</div>
        
//       </div>
//      </div>
//      <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
//      <p className='productdisplay-right-category'> <span>category:</span> Women,T-shirt , Crop Top</p>
//      <p className='productdisplay-right-category'> <span>Tags:</span>Modern.Latest</p>

//     </div>
      
//     </div>
//   )
// }

// export default ProductDisplay


import React, { useContext } from 'react';
import "./ProductDisplay.css";
import start_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='container productdisplay'>
            <div className="row">
                <div className="col-lg-6">
                   
                    <div className="productdisplay-img img-fluid">
                        <img className='productdisplay-main-img img-fluid' src={product.image} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <h1>{product.name}</h1>
                    <div className="productdisplay-right-star">
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">${product.old_price}</div>
                        <div className="productdisplay-right-price-new">${product.new_price}</div>
                    </div>
                    <div className="productdisplay-right-description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita voluptatum aspernatur facere obcaecati rem quod nam ex consequuntur, dolorem esse commodi quas animi reiciendis fugit doloremque accusamus veritatis provident nostrum.
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes d-flex flex-wrap ">
                            <div className='mx-1'>S</div>
                            <div className='mx-1'>M</div>
                            <div className='mx-1'>L</div>
                            <div className='mx-1'>XL</div>
                        </div>
                    </div>
                    <button className="btn btn-primary my-3 cart-btn" style={{background:"#ff4141",border:"none" }} onClick={() => { addToCart(product.id) }}>Add to cart</button>
                    <p className='productdisplay-right-category'> <span>category:</span> Women, T-shirt, Crop Top</p>
                    <p className='productdisplay-right-category mb-5'> <span>Tags:</span> Modern, Latest</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
