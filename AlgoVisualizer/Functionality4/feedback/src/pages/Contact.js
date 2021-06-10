import React, { useState, useEffect } from "react";
import "../app.css";
import { db } from "../service/firebase";

const Contact = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phno, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
      setLoader(true);
          let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( re.test(email) ) {
        
      if (name && email && message) {

          db.collection("contacts")
              .add({
                  name: name,
                  email: email,
                  message: message,
                  phno:phno,
              })
              .then(() => {
                  setLoader(false);
                  alert("Your message has been submitted👍");
              })
              .catch((error) => {
                  alert(error.message);
                  setLoader(false);
              });
    setName("");
    setEmail("");
          setMessage("");
          setPhone("");
          
        }
         else {
          alert("Please Fill All Mandatory Fields");

          
      }
    }
    else {
        alert("Enter Proper Email Id");
           
    setEmail("");
       
    }

     

   
  };

    return (<>
         <center><div className="jumbotron homeheading5">Contact Us</div></center>
      <div class="container">
          
  <form onSubmit={handleSubmit}>
    <div class="row">
      <div class="col-25 homeheading4">
        <label for="name">Name</label>
      </div>
      <div class="col-75">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25 homeheading4">
        <label for="email">Email</label>
      </div>
      <div class="col-75">
           <input type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}></input>
      </div>
              </div>
                  <div class="row">
      <div class="col-25 homeheading4">
        <label for="email">Phone</label>
      </div>
      <div class="col-75">
           <input type="number"
        placeholder="Phone Number(Optional)"
        value={phno}
        onChange={(e) => setPhone(e.target.value)}></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25 homeheading4">
        <label for="subject ">Message</label>
      </div>
      <div class="col-75">
                     <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit"></input>
    </div>
  </form>
</div>
 </> );
};

export default Contact;