import React from "react";
import { useState } from "react";
import "./Contactus.css";
import { FaCheck, FaCheckCircle, FaUser } from "react-icons/fa";
const Contactsus = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showComletecontactModal, setShowComletecontactModal] = useState(false);
  const [errorContact, setErrorContact] = useState(true);
  function handlecontact(e) {
    setContact({ ...contact, [e.target.id]: e.target.value });
  }
  let { message, name, email, subject } = contact;
  function handleFormContact(e) {
    e.preventDefault();
    if (name == "") {
      // , email != "", subject != "", message != ""
      setErrorContact("name");
    } else if (email == "") {
      setErrorContact("email");
    } else if (subject == "") {
      setErrorContact("subject");
    } else if (message == "") {
      setErrorContact("message");
    } else {
      setErrorContact("notError");
    }
    setTimeout(() => {
      setErrorContact(false);
    }, 2000);
  }

  return (
    <>
      <form className="contactMain" onSubmit={handleFormContact}>
        <h1>Contact Us</h1>
        {/* name area */}
        <div>
          <label htmlFor="username">Name:</label>
          <input
            style={{ border: errorContact == "name" ? "2px solid red" : "" }}
            type="text"
            name="username"
            id="name"
            onChange={handlecontact}
            placeholder="Name"
          />
        </div>
        {/* email area */}
        <div>
          <label htmlFor="useremail">Email:</label>
          <input
            id="email"
            style={{ border: errorContact == "email" ? "2px solid red" : "" }}
            onChange={handlecontact}
            type="email"
            name="useremail"
            placeholder="Email"
          />
        </div>
        {/* subject area */}
        <div>
          <label htmlFor="usersubject">Subject:</label>
          <input
            style={{ border: errorContact == "subject" ? "2px solid red" : "" }}
            type="text"
            id="subject"
            onChange={handlecontact}
            name="usersubject"
            placeholder="Subject"
          />
        </div>
        {/* message area */}
        <div className="textareadiv">
          <label htmlFor="usermessage" className="textareaLabel">
            Message:
          </label>
          <textarea
            style={{ border: errorContact == "message" ? "2px solid red" : "" }}
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
          <button
            type="submit"
            onClick={() => {
              handleFormContact;
            }}
          >
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
      {/* Modal Area */}
      <div
        className="supermodalcontactMain"
        style={{ display: errorContact == "notError" ? "block" : "none" }}
      >
        <div className="modalContactmain">
          <h1>
            <FaCheckCircle color="green"></FaCheckCircle>
          </h1>
          <div className="modalText">
            <h1>Message Sent</h1>
            <p>{name}'s message sent</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactsus;
