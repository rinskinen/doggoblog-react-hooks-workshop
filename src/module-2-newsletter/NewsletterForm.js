import React from "react";
import "./NewsletterForm.css";

function NewsletterForm() {
    const onSubmit = event => {
        event.preventDefault(); // This tells browser not to submit the form
    };

    return (
        <div className="newsletter">
            <h1>Subscribe to newsletter</h1>
            <form onSubmit={onSubmit}>
                <input
                    className="newsletter-input"
                    name="fullName"
                    type="text"
                />
                <input className="newsletter-input" name="email" type="email" />
                <input
                    className="newsletter-input"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
}

export default NewsletterForm;
