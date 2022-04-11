import React from 'react';
import useFirebase from '../hook/useFirebase';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>This is products page</h2>
            <h5> {user?user.displayName: 'vooooot'} </h5>
        </div>
    );
};

export default Products;