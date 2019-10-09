import React from 'react';
import './NewsletterForm.css';

function NewsletterForm() {
    const onSubmit = event => {
        event.preventDefault(); // This tells browser not to submit the form
        const form = event.target;

        const name = form.fullName.value;
        const email = form.email.value;

        alert(name + ' ' + email);

        form.reset();
    };

    return (
        <div className="demo-newsletter">
            <h1>Subscribe to newsletter</h1>
            <form onSubmit={onSubmit}>
                <label>
                    Full name
                    <input className="demo-newsletter-input" name="fullName" type="text" required />
                </label>
                <label>
                    Email
                    <input className="demo-newsletter-input" name="email" type="email" required />
                </label>

                <input className="demo-newsletter-input demo-newsletter-button" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default NewsletterForm;
