import React, {useState} from "react";
import InputField from "./components/InputField";
import './styles.css'
import RegisterWith from "./components/RegisterWith";
import {loginRequest} from "../../api";
import {useEffect, useRef} from "react";

//  1. control inputs value via useState
//  2. validate login and password (not empty && equal to some hardcoded values)
// exmpl: login should be qwerty password should be 123

//useRef useEffect memo callback
// жизнений цикл компонета
//document life cycle
const LoginPage = () => {


    const [errors, setErrors] = useState([])
    // const [loginValue, setLoginValue] = useState("");
    // const [passwordValue, setPasswordValue] = useState("");

    const initialValue = 0;

    const loginRef = useRef();
    const passwordValue = useRef(initialValue);

    // const handleLoginChange = (e) => {
    //     loginValue.current = e.target.value
    // }
    //
    // const handlePasswordChange = (e) => {
    //     passwordValue.current =  e.target.value
    const handleLogin = async () => {
        console.log(loginRef.current.value)
        // if (loginValue.current !== "" || passwordValue.current !== "") {
        //     setErrors(["login is empty or password"])
        // } else {
        //     setErrors(["successfully logged in"])
        // }
        //
        // loginRequest().then(date => {
        //     console.log("Promise resolved", date)
        // });
    }

    return (
        <div className="main-container">
            <h1 className={"text-default text-title login"}>
                Login
            </h1>
            <InputField
                id={"username"}
                ref={loginRef}
                label={"Username"}
                placeholder={"Type your username"}
                className={"user-input"}
            />

            <InputField
                id={"password"}
                label={"Password"}
                placeholder={"Type your password"}
                className={"user-input"}
                inputType={"password"}
            />

            <div className={"forgot-password-class"}>
                <a href={"https://www.w3schools.com"} className="text-format-3 ">
                    Forgot password?
                </a>
            </div>

            <button
                onClick={handleLogin} className={"button-login"}
            >

                LOGIN
            </button>
            <div>
                {!!errors.length && errors.map(errorMessage => <p className="error">{errorMessage}</p>)}
            </div>


            <RegisterWith label={"Or Sign Up Using"}/>

            <div className="text-move-to-center sign-up-window">
                <p className="text-default text-primary">
                    Or Sign Up Using
                </p>
                <div className="padding-top-default">
                    <a
                        className="text-default text-primary"
                        href="https://www.w3schools.com"
                    >
                        SIGN UP
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;