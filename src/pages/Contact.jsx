import React, { useState } from 'react'
import "../components/comp.css";
import Buttons from '../components/Buttons';
import Pictures from '../components/Pictures';

const Contact = () => {

  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    const arr = []
    arr.push(email, name, msg)
    localStorage.setItem(email, JSON.stringify(arr));
  }
  return (
    <>
      <div
        className="p-14 m-10 lg:w-[50%] lg:ml-130 rounded-xl border-1 border-amber-200"
        style={{
          backgroundColor: "rgba(221, 221, 221, 0.1)",
        }}>
        <div>
          <h1 className="text-2xl font-bold">Contact</h1>
          <hr className="border-4 rounded-md border-amber-200 w-8" /> <br />
        </div>{" "}
        <br />
        <div className="border-1 border-amber-200 rounded-md">
          <Pictures />
        </div>{" "}
        <br />
        <div>
          <p className="text-lg font-bold">Contact Form</p> <br />
          <form action="" className="">
            <input
              value={name}
              type="name"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
              className="border-1 border-amber-100 p-2 rounded-lg mr-2 w-[49%]"
            />
            <input
              value={email}
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              className="border-1 border-amber-100 p-2 rounded-lg mb-4 w-[49%]"
            />{" "}
            <br />
            <textarea
              value={msg}
              name=""
              id=""
              placeholder="message"
              onChange={(e) => setMsg(e.target.value)}
              className="border-1 border-amber-100 p-2 rounded-lg px-4 w-[100%] mb-6"></textarea>{" "}
            <br />
            <a href="#" onClick={handleSubmit}>
              <Buttons />
            </a>
          </form>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Contact
