import { useState } from "react";
import "./Contact.css";
import Mailgun from "mailgun.js";
import FormData from "form-data";
// require("dotenv").config()

export const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  return (
    <section className="contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <section className="message-form">
        <input id="name" name="name" type="text" placeholder="Your Name" onChange={(e => setName(e.target.value))}></input>
        <input id="email" name="email" type="email" placeholder="Your Email" onChange={(e => setEmail(e.target.value))}></input>
        <textarea placeholder="Your Message" name="message" id="message" onChange={(e => setMessage(e.target.value))}></textarea>
        <button onClick={()=>sendSimpleMessage()}>Send Message</button>
      </section>
    </section>
  );
};

async function sendSimpleMessage() {
    console.log(import.meta)
    // const mailgun = new Mailgun(FormData);
    // const mg = mailgun.client({
    //   username: "api",
    //   key: process.env.API_KEY || "API_KEY",
    //   // When you have an EU-domain, you must specify the endpoint:
    //   // url: "https://api.eu.mailgun.net"
    // });
    // try {
    //   const data = await mg.messages.create("sandboxcb160750f422400d94fbe912421fcc5e.mailgun.org", {
    //     from: "Mailgun Sandbox <postmaster@sandboxcb160750f422400d94fbe912421fcc5e.mailgun.org>",
    //     to: ["Tapiwa Mazarura <mazaruratapiwa03@gmail.com>"],
    //     subject: "Hello Tapiwa Mazarura",
    //     text: "Congratulations Tapiwa Mazarura, you just sent an email with Mailgun! You are truly awesome!",
    //   });
  
    //   console.log(data); // logs response data
    // } catch (error) {
    //   console.log(error); //logs any error
    // }
  }