import React, { useState } from "react";
import {validateEmail} from "../utils/helpers";
import '../styles/contact.css'

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`A ${e.target.name} is required to submit a contact form.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div className="container viewer">
            <h2 className="contact-title mt-4">Contact Me!</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name"> Name: </label>
                    <input className="form-control" onBlur={handleChange} name="name" type='text' placeholder="Name" defaultValue={name}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email"> Email: </label>
                    <input className="form-control" onBlur={handleChange} name='email' type='email' placeholder="Email" defaultValue={email}></input>
                </div>
                <div className="form-group">
                    <label htmlFor='message'> Message: </label>
                    <textarea className="form-control" onBlur={handleChange} name='message' rows='5' placeholder='Your message here...' defaultValue={message}></textarea>
                </div>
                {errorMessage && (
                    <div className="error-text">
                        {errorMessage}
                    </div>
                )}
                <button type="submit" className="btn btn-primary mt-3"> Submit</button>
            </form>
        </div>
    )
}
export default Contact