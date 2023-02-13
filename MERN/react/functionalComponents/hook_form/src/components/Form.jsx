import React from "react";
import { useState } from "react";

const Form = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [confirmPw, setConfirmPw] = useState('');

    return (
        <>
        <header>
            <h2>Hook Form</h2>
        </header>
        <div className="container">
            <div className="row">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className="row">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className="row">
                <label htmlFor="email">Email:</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="row">
                <label htmlFor="pw">Password:</label>
                <input type="password" onChange={(e) => setPw(e.target.value)}/>
            </div>
            <div className="row">
                <label htmlFor="confirmPw">Confirm Password:</label>
                <input type="password" onChange={(e) => setConfirmPw(e.target.value)}/>
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