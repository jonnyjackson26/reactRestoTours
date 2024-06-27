import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Register.css'

const Register = () => {

    return (
        <>
            <NavBar />

            <main className="register">
                <div className="form-container">
                    <script src="https://www.cognitoforms.com/f/seamless.js" data-key="lLV5PzcWREugeD1ujIJ1uA" data-form="4"></script>
                    <iframe src="https://www.cognitoforms.com/f/lLV5PzcWREugeD1ujIJ1uA/4"></iframe>
                    <script src="https://www.cognitoforms.com/f/iframe.js"></script>
                </div>
            </main>

        </>
    );
};

export default Register;
