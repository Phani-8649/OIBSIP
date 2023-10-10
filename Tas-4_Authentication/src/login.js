import React from 'react'
import { useState } from "react";
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "./firebase.config";
import firebaseConfig from "./firebase.config";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
const Login = () => {

  const [userlogin,setUserlogin]=useState(
    
    {
      phonenumber:""
    });
    // let name,value;

    const handleChange =(e)=>{
      console.log(e);  
      const name=e.target.name;
      const value=e.target.value;

      setUserlogin({...userlogin,[name]:value});
    }


    const PostData = async (e)=>{
      e.preventDefault();

      const {phonenumber}=userlogin;
      console.log(userlogin);
      const res =await fetch("/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          phonenumber
        })
      });
      console.log(res);
    }
//giving invisible re captcha
const configureCaptcha=()=>{

const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  },
  defaultCountry:"IN",
});
console.log("recaptcha verified");
};
const onSignInSubmit=(e)=>{
  e.preventDefault();
  configureCaptcha();
const phoneNumber ="+91"+ userlogin.phonenumber
console.log(phoneNumber);

const appVerifier = window.recaptchaVerifier;

const auth = getAuth();
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log("otp has been sent");
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log("sms not sent");
    });

};

const onsubmitotp=(e)=>{
  e.preventDefault();
  const code =userlogin.otp
  console.log(code);
window.confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  console.log(JSON.stringify(user));
  alert("user is verified");
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});

}
  return (
    <div>
      <h2>login form </h2>
      <form onSubmit={onSignInSubmit}>
      <div id="sign-in-button"></div>
        <input type="number" name="phonenumber" placeholder='phonenumber'  requierd onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
      <h2>Enter otp </h2>
      <form onSubmit={onsubmitotp}>
        <input type="number" name="otp" placeholder='otp' required onChange={handleChange} onClick={PostData}/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Login