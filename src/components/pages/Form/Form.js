import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import '../Form/Form.css'

function ContactForm() {
    const [state, handleSubmit] = useForm("mdovykzn");
    if (state.succeeded) {
        return <p className='thanks'>Thank you for your inquiry!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">
                First Name
            </label>
            <input
                id="firstname"
                type="name"
                name="firstname"
                required
            />
            <ValidationError
                prefix="FirstName"
                field="firstname"
                errors={state.errors}
            />
            <label htmlFor="lastname">
                Last Name
            </label>
            <input
                id="lastname"
                type="name"
                name="lastname"
                required
            />
            <ValidationError
                prefix="LastName"
                field="lastname"
                errors={state.errors}
            />
            <label for="telephone">
                Telephone Number (Optional)
            </label>
            <input
                id="telephone"
                type="telephone"
                name="telephone"
                placeholder="(555) 555-5555">
            </input>
            <ValidationError
                prefix="Telephone"
                field="telephone"
                errors={state.errors}
            />
            <label htmlFor="email">
                Email Address
            </label>
            <input
                className='contact'
                id="email"
                type="email"
                name="email"
                required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            <h4>Are you covered by an accepted insurance?</h4>
            <div className='radio-buttons-container'>
                <div className='radio-button'>
                    <input type="radio" id="yes" name="insurance" value="yes" required />
                    <label for="yes">Yes</label>
                </div>
                <div className='radio-button'>
                    <input type="radio" id="no" name="insurance" value="no" />
                    <label for="no">No</label>
                </div>
            </div>

            <label htmlFor="message">
                How can I help?
            </label>
            <textarea
                id="message"
                name="message"
                required
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button className='form-button' type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;