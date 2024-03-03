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
import "./NewCollections.css"
import Item from '../Item/Item';

const NewCollections = () => {
    return (
        <div className='newcollection'>
        <div className="text-center">
        <h1>New Collection</h1>
        </div>
            
            <hr  />
            <div className="container">
                <div className="row">
                    {new_collection.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6 mb-4 ">
                            <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewCollections;

