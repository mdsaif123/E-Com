// import React from 'react'
// import './Popular.css'

// import data_product from '../Assets/data'
// import Item from '../Item/Item'

// const Popular = () => {
//   return (
//     <div className='popular'>
//     <h1>POPULAR IN WOMEN</h1>
//     <hr />
//     <div className="popular-item">
//         {data_product.map((item,i)=>{
//             return <Item key={i}  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//         })}
//     </div>


      
//     </div>
//   )
// }

// export default Popular


import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='container popular'>
      <h1 className="text-center">POPULAR IN WOMEN</h1>
      <hr className="mb-4" />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {data_product.map((item, i) => (
          <div key={i} className="col">
            <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
