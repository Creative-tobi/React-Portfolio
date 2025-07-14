import React from "react";
import myMap from "/map.JPG";
import "../components/comp.css";

const Pictures = () => {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2654096682136!2d4.598641674055008!3d7.761652207540085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103827489a44ee03%3A0xc8d59bcaa8bfd123!2sOsun%20State%20University!5e0!3m2!1sen!2sng!4v1752481293436!5m2!1sen!2sng"
          width=""
          height="450"
          style={{ border: "1px solid rgb(255, 187, 0)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg w-full"></iframe>
        {/* <img src={myMap} alt="" /> */}
      </div>
    </>
  );
};

export default Pictures;
