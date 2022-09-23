import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    setName(value);
    setEmail(value);
    setMessage(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${name}`);
    setName("");
  };

  return (
    <div>
      <h1>Contact</h1>
      <form className="form">
        <wrapper className="row">
        <div class="input-group">
        <input
          class="form-control"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        </div>

        <div class="input-group">
        <input
          class="form-control"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        </div>
   
        <div class="input-group">
          <textarea 
          class="form-control"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"></textarea>
        </div>
        </wrapper>

        <button
          className="btn btn-dark"
          type="button"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
