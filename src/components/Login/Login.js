import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import googleLogo from '../../icon/google1.png'
import firebaseConfig from '../../Firebase/FirebaseConfig';

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });



    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // User signInWithEmailAndPassword
    const handleSubmit = (e) => {
        // console.log(user.email, user.password);
        if (user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    // Handle Errors here.
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    // ...
                })
        }
        e.preventDefault();
    }
    // Login Validation
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            const isEmailValid = /\S+@\S+\.\S+/;
            isFieldValid = isEmailValid.test(e.target.value)

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && isPasswordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    }

    // user password reset 
    const passwordReset = (email) => {
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(email)
            .then(() => {
                const newUserInfo = { ...user };
                console.log(newUserInfo)
                setUser(newUserInfo);
            })
            .catch(function (error) {
                // An error happened.
            });
    }

    // User GoogleSignIn
    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signnedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signnedInUser);
                setLoggedInUser(signnedInUser);
                history.replace(from);
            })
    }

    const signInBtnStyle = {
        width: '100%',
        border: '1px solid gray',
        borderRadius: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginTop: '10px'
    }

    return (
        <div className="col-md-12">
           <div className="row">
               <div className="col-md-4">

               </div>
               <div className="col-md-4" style={{marginTop: '50px'}}>
                <Card>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Form onSubmit={handleSubmit} className="mt-5">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" name="email" onBlur={handleBlur} style={{ border: 'none', borderBottom: '1px solid gray' }} placeholder="Your sign email" required />
                            </Form.Group>

                            <Form.Group className="mt-5" controlId="formBasicPassword">
                                <Form.Control type="password" name="password" onBlur={handleBlur} style={{ border: 'none', borderBottom: '1px solid gray' }} placeholder="Password" required />

                            </Form.Group>
                            <div className="d-flex justify-content-between">
                                <Form.Group>
                                    <Form.Check
                                        label="Remember Me"
                                        feedback="You must agree before submitting."
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Link onClick={() => passwordReset(user.email)} style={{ color: '#275a53' }} >Forgot Password</Link>
                                </Form.Group>
                            </div>
                            <Button className="mt-5 text-light rounded-0" style={{ width: '100%', backgroundColor: '#275a53'}} type="submit">
                                Login
                            </Button>
                            <Form.Text className="text-center mt-3" style={{ fontSize: '17px' }}>
                                Don't have account?<Link to="/register" style={{ color: '#275a53' }}>Create an Account</Link>
                                <p style={{ color: 'red' }}>{user.error}</p>
                                {/* {
                                    user.success && <p style={{ color: 'green' }}>User Login Successfully </p>
                                } */}
                            </Form.Text>

                        </Form>

                    </Card.Body>
                </Card>
            </div>
           </div>
           <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4 ">
                    <div className="row">
                        <div className="col-md-5"><hr/></div>
                        <div className="col-md-2 text-center">or</div>
                        <div className="col-md-5"><hr/></div>
                    </div>
                    <button onClick={googleSignIn} style={signInBtnStyle}><img src={googleLogo} className="float-left py-1" alt="" />Continue with Google</button>
            </div>
            </div>
        </div>
    );
};

export default Login;