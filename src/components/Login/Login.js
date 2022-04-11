import React from 'react';
import useFirebase from '../hook/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase()
    return (
        <div>
            <h3>Please Login!!!</h3>
            <div style={{margin: 20}}>
                <button onClick={signInWithGoogle}>Google sign in</button>
            </div>
            <form >
                <input type="email" name="" placeholder='Your mail' id="" />
                <br />
                <input type="password" name="" placeholder='Your password' id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;