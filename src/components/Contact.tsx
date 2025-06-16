import React, { RefObject, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { error } from "console";
import toast from "react-hot-toast";

export const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (
    event: React.MouseEvent,
    name: string,
    message: string,
    email: string,
    nameInput: React.RefObject<HTMLInputElement | null>,
    emailInput: React.RefObject<HTMLInputElement | null>,
    messageInput: React.RefObject<HTMLTextAreaElement | null>
  ) => {
    event.preventDefault();

    if (!name) {
      nameInput.current?.classList.add("error");
      nameInput.current?.focus();
      toast("Please enter your name", {
        icon: "💡",
      });
      return;
    }

    if (!email) {
      emailInput.current?.classList.add("error");
      emailInput.current?.focus();
      toast("Please enter your email", {
        icon: "💡",
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailInput.current?.classList.add("error");
      emailInput.current?.focus();
      toast("Please enter a valid email address", {
        icon: "💡",
      });
      return;
    }

    if (!message) {
      messageInput.current?.classList.add("error");
      messageInput.current?.focus();
      toast("Please enter a message", {
        icon: "💡",
      });
      return;
    }

    const template = {
      name: name,
      email: email,
      message: message,
    };

    const service_id = import.meta.env.VITE_SERVICE_ID;
    const public_id = import.meta.env.VITE_PUBLIC_KEY;
    const template_id = import.meta.env.VITE_TEMPLATE_ID;

    emailjs
      .send(service_id, template_id, template, public_id)
      .then((res) => {
        console.log("Email sent succesfully: ", res);
        setEmail("");
        setName("");
        setMessage("");
      })
      .catch((e) => console.log("Error sending email: ", e));
  };

  const removeError = (
    inputRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>
  ) => {
    inputRef.current?.classList.remove("error");
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get in Touch</h2>
      <form className="message-form">
        <input
          id="name"
          required
          name="name"
          type="text"
          placeholder="Your Name"
          ref={nameInput}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            removeError(nameInput);
          }}
        ></input>
        <input
          id="email"
          name="email"
          type="email"
          required
          ref={emailInput}
          value={email}
          placeholder="Your Email"
          onChange={(e) => {
            setEmail(e.target.value);
            removeError(emailInput);
          }}
        ></input>
        <textarea
          placeholder="Your Message"
          name="message"
          id="message"
          ref={messageInput}
          value={message}
          required
          onChange={(e) => {
            setMessage(e.target.value);
            removeError(messageInput);
          }}
        ></textarea>
        <button
          onClick={(e) =>
            handleSubmit(
              e,
              name,
              message,
              email,
              nameInput,
              emailInput,
              messageInput
            )
          }
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
