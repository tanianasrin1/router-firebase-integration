import React from 'react';
import useFirebase from '../hook/useFirebase';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>This is home page</h2>
            <p>Current user is: {user ? user.displayName: 'No'} </p>
        </div>
    );
};

export default Home;