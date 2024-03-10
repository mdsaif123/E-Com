// import React from 'react';
// import new_collection from '../Assets/new_collections';
// import Item from '../Item/Item';

// const NewCollections = () => {
//     return (
//         <div className='new-collections'>
//             <h1>New Collection</h1>
//             <hr />
//             <div className="collections">
//                 {new_collection.map((item, i) => (
//                     <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default NewCollections;



import React from 'react';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
    return (
        <div className='container'>
            <h1 className="text-center">New Collection</h1>
            <hr className='hr' />
            <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-44">
           
                {new_collection.map((item, i) => (
                    <div key={i} className="col mb-4">
                        <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCollections;
