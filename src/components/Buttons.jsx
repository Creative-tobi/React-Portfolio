import React from 'react'
import { IoIosSend } from 'react-icons/io';
import "../components/comp.css";

const Buttons = (props) => {
  return (
    <>
      <button
        className="text-amber-200  rounded-lg px-6 py-2"
        id="ico">
        {" "}
        <div className="flex">
          <IoIosSend />

          <p>submit message</p>
        </div>
      </button>
    </>
  );
}

export default Buttons
