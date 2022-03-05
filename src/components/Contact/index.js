import React, { useState} from "react";
import { validateEmail } from "../../utils/helpers";
function ContactForm() {
    const [formState, setformState] = useState({ name: '', email:'', message: ''});

    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is wrong.');

            } else{
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setformState({ ...formState, [e.target.name]: e.target.value});
            console.log('Handle form', formState);
        }
    };

    return (
        <section>
            <h1 data-testid="h1tag">Contact EJC</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div> 
                    <label htmlFor="email">Email</label>
                    <input type="email" name="name" defaultValue={email} onBlur={handleChange} />
                </div>'
                <div>
                    <label htmlFor="message">message</label>
                    <textarea name="message" row="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
                </form>
        </section>
    );
}

export default ContactForm;