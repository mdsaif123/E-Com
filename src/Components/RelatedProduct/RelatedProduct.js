// import React from 'react'
// import "./RelatedProduct.css"
// import data_product from "../Assets/data"
// import Item from "../Item/Item"

// const RelatedProduct = () => {
//   return (
//     <div className='relatedproduct'>
//       <h1>Related Products</h1>
//       <hr />
//       <div className="relatedproducts-item">
//         {data_product.map((item ,i)=>{
//             return  <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//         })}
//       </div>
//     </div>
//   )
// }

// export default RelatedProduct

import React from 'react';
import "./RelatedProduct.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProduct = () => {
  return (
    <div className='container relatedproduct'>
      <h1>Related Products</h1>
      <hr />
      <div className="row relatedproducts-item">
        {data_product.map((item, i) => (
          <div key={i} className="col-lg-3 col-md-6 mb-4">
            <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProduct;
