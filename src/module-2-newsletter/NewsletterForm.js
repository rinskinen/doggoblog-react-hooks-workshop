import React from 'react';
import './NewsletterForm.css';
import useDoggoForm from './CustomHooks';

const NewsletterForm = () => {
    const signup = event => {
        event.preventDefault();

        const form = event.target;

        alert(`Well hi U there, ${inputs.fullName}! Meh likez ${inputs.doggobreed} doggo too!
               And ${inputs.pizza} is my fav pizza evah! <3`);
        form.reset();
    };

    const { inputs, handleInputChange } = useDoggoForm(signup);

    return (
        <div className="newsletter">
            <h1>Tell us more about u!</h1>
            <form onSubmit={signup}>
                <label>Ur name?</label>
                <input
                    className="newsletter-input"
                    name="fullName"
                    type="text"
                    onChange={handleInputChange}
                    value={inputs.fullName}
                    required
                />
                <label>Ur fav doggo?</label>
                <input
                    className="newsletter-input"
                    name="doggobreed"
                    type="text"
                    onChange={handleInputChange}
                    value={inputs.doggobreed}
                    required
                />
                <label>Ur fav pizza?</label>
                <input
                    className="newsletter-input"
                    name="pizza"
                    type="text"
                    onChange={handleInputChange}
                    value={inputs.pizza}
                    required
                />
                <button type="submit">ANSWER PLZ</button>
            </form>
        </div>
    );
};

export default NewsletterForm;
