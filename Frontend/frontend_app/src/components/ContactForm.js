import React from "react";
import "../Styles/ContactForm.css";

const ContactForm = () => {
  return (
    <div>
      <h2>Contact Form</h2>
      <form className="Contact_Form">
        <label>
          Name: <input className="ip" />
        </label>
        <label>
          Email: <input className="ip" type="email" />
        </label>
        <label>
          Description: <textarea type="textArea" />
        </label>
        <label>
          Phone:{" "}
          <input
            type="number"
            className="ip"
            defaultValue="+91"
            maxLength="13"
          />
        </label>
      </form>
    </div>
  );
};

export default ContactForm;
