import React from "react";
import { useState } from "react";
import "./Contactus.css";
const Contactsus = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errorContact, setErrorContact] = useState(true);
  function handlecontact(e) {
    setContact({ ...contact, [e.target.id]: e.target.value });
  }
  let { message, name, email } = contact;
  function handleFormContact(e) {
    e.preventDefault();
    if (name != "") {
      // , email != "", subject != "", message != ""
      setErrorContact("name");
    } else setContact(false);
  }

  return (
    <form className="contactMain" onSubmit={handleFormContact}>
      <h1>Contact Us</h1>
      <div>
        <label htmlFor="username">Name:</label>
        <input
          style={{ border: name != false ? "2px solid red" : "" }}
          type="text"
          name="username"
          id="name"
          onChange={handlecontact}
          placeholder="Name"
        />
      </div>
      <div>
        <label htmlFor="useremail">Email:</label>
        <input
          id="email"
          onChange={handlecontact}
          type="email"
          name="useremail"
          placeholder="Email"
        />
      </div>
      <div>
        <label htmlFor="usersubject">Subject:</label>
        <input
          type="text"
          id="subject"
          onChange={handlecontact}
          name="usersubject"
          placeholder="Subject"
        />
      </div>
      <div className="textareadiv">
        <label htmlFor="usermessage" className="textareaLabel">
          Message:
        </label>
        <textarea
          name="usermessage"
          id="message"
          onChange={handlecontact}
          placeholder="Message *reuired"
          draggable="false"
          rows="4"
          cols="50"
        />
      </div>
      <div className="contact_buttons">
        <button type="submit" onClick={handleFormContact}>
          Send
        </button>
        <button
          type="reset"
          onClick={() =>
            setContact({
              name: "",
              message: "",
              email: "",
              subject: "",
            })
          }
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default Contactsus;
