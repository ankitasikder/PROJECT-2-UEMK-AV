import React, { useState, useEffect } from "react";
import "../app.css";
import { db } from "../service/firebase";

const Contact = () => {
  const [username, setUName] = useState("");
    const [email, setEmail] = useState("");
    const [rate, setRate] = useState("");
  const [comment, setComment] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
      setLoader(true);
          let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test(email)) {
          if (parseInt(rate) >= 0 && parseInt(rate)<=10 ) {
              if (username && email && rate) {

          db.collection("feedbacks")
              .add({
                  username: username,
                  email: email,
                  comment: comment,
                  rating:rate,
              })
              .then(() => {
                  setLoader(false);
                  alert("Your Feedback has been submitted👍");
              })
              .catch((error) => {
                  alert(error.message);
                  setLoader(false);
              });
    setUName("");
    setEmail("");
          setComment("");
          setRate("");
          
        }
         else {
                  alert("Please Fill Up All Mandatory Fields");
      }
          } else {
              alert("Please Put Valid Ratings(out of 10)..");
          setRate("");
        }
        
    
    }
    else {
          alert("Enter Proper Email Id");
             setEmail("");
    }

     

   
  };

    return (<>
         <center><div className="jumbotron homeheading6">Give Feedback</div></center>
      <div class="container">
          
  <form onSubmit={handleSubmit}>
    <div class="row">
      <div class="col-25 homeheading4">
        <label for="name">Username</label>
      </div>
      <div class="col-75">
        <input type="text" value={username} onChange={(e) => setUName(e.target.value)} placeholder="Name"></input>
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
        <label for="email">Rating</label>
      </div>
      <div class="col-75">
           <input type="number"
        placeholder="Enter number out of 10(Do Not Put Negative Values)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25 homeheading4">
        <label for="subject ">Comments</label>
      </div>
      <div class="col-75">
                     <textarea
        placeholder="Type your comments(Optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
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