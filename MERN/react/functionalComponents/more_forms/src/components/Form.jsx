import React from "react";
import { useState } from "react";

const Form = props => {
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [pw, setPw] = useState('');
    const [pwError, setPwError] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    const [confirmPwError, setConfirmPwError] = useState('');

    const handleNames = (e) => {
        e.target.id === "firstName" ? setFirstName(e.target.value) : setLastName(e.target.value);
        e.target.value.length < 2 
        ? e.target.id === "firstName"
            ? setFirstNameError("Must be at least 2 characters") : setLastNameError("Must be at least 2 characters")
        : e.target.id === "firstName" 
            ? setFirstNameError('') : setLastNameError('');
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError('');
        }
    }

    const handlePw = (e) => {
        e.target.id === 'pw' ? setPw(e.target.value) : setConfirmPw(e.target.value);

        e.target.value.length < 8
        ? e.target.id === 'pw'
            ? setPwError("Must be at least 8 characters") : setConfirmPwError("Must be at least 8 characters")
        : e.target.id === 'pw'
            ? setPwError('') : setConfirmPwError('');
            
        e.target.id === 'pw'
        ? e.target.value === confirmPw 
            ? setConfirmPwError('') : setConfirmPwError('Must match Password')
        : e.target.value === pw
            ? setConfirmPwError('') : setConfirmPwError('Must match Password');
    }
    
    return (
        <>
        <header>
            <h2>More Forms</h2>
        </header>
        <div className="container">
            <div className="row">
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" type="text" onChange={(e) => handleNames(e)}/>
                <p style={{color:'red'}}>{firstNameError}</p>
            </div>

            <div className="row">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" onChange={(e) => handleNames(e)}/>
                <p style={{color:'red'}}>{lastNameError}</p>
            </div>
            <div className="row">
                <label htmlFor="email">Email:</label>
                <input type="text" onChange={(e) => handleEmail(e)}/>
                <p style={{color:'red'}}>{emailError}</p>
            </div>
            <div className="row">
                <label htmlFor="pw">Password:</label>
                <input id="pw" type="password" onChange={(e) => handlePw(e)}/>
                <p style={{color:'red'}}>{pwError}</p>
            </div>
            <div className="row">
                <label htmlFor="confirmPw">Confirm Password:</label>
                <input type="password" onChange={(e) => handlePw(e)}/>
                <p style={{color:'red'}}>{confirmPwError}</p>
            </div>
        </div>
            <p>Your form Data</p>
        <div className="container">
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {pw}</p>
            <p>Confirm Password: {confirmPw}</p>
        </div>
        </>
    );
}

export default Form;