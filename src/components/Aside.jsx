import React from 'react'
import profile from "/perfect.png"
import "./comp.css"
import { MdOutlineMail } from 'react-icons/md';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Aside = () => {
  return (
    <>
      <div
        className="lg:hidden flex p-8 m-10 rounded-xl border-1 border-amber-200"
        style={{
          backgroundColor: "rgba(221, 221, 221, 0.1)",
          placeItems: "center",
        }}>
        <div>
          <img src={profile} alt="" className="w-30  rounded-xl" id="back" />
        </div>{" "}
        <br />
        <div className='ml-6'>
        <h1 className="font-bold text-xl mb-4">Adeoye Aishat</h1>
        <p className="rounded-lg p-1 w-40 text-center" id="back">
          Web Developer
        </p>{" "}
        </div>
        <br />
      </div>
      <aside
        className="hidden lg:block p-14 fixed mx-10 top-10 h-152 rounded-xl border-1 border-amber-200"
        style={{
          backgroundColor: "rgba(221, 221, 221, 0.1)",
          placeItems: "center",
        }}>
        <div>
          <div>
            <img src={profile} alt="" className="w-30  rounded-xl" id="back" />
          </div>{" "}
          <br />
          <h1 className="font-bold text-xl">Adeoye Aishat</h1> <br />
          <p className="rounded-lg p-1 w-40 text-center" id="back">
            Web Developer
          </p>{" "}
          <br />
        </div>
        <hr className="w-60" /> <br />
        <div>
          <div className="flex">
            <div className='box'>
            <MdOutlineMail
              className="text-amber-200 text-3xl rounded-md"
              id="icon"
            />
            </div>
            <div>
              <p className="text-gray-400">EMAIL</p>
              <p className="font-bold">adeoyeaisha533@gmail.com</p>
            </div>
          </div>{" "}
          <br />
          <div className="flex">
            <div className="box" style={{ placeItems: "center" }}>
              <IoPhonePortraitOutline
                className="text-amber-200 text-3xl rounded-md"
                id="icon"
              />
            </div>
            <div>
              <p className="text-gray-400">PHONE</p>
              <p className="font-bold">+234 812 722 1696</p>
            </div>
          </div>{" "}
          <br />
          <div className="flex">
            <div className='box'>
            <CiLocationOn
              className="text-amber-200 text-3xl rounded-md"
              id="icon"
            />
            </div>
            <div>
              <p className="text-gray-400">LOCATION</p>
              <p className="font-bold">Oke-Baale, Osogbo</p>
            </div>
          </div>
        </div>
        <br />
        <div className="flex gap-1">
          <a href="/">
            <FaFacebook />
          </a>

          <a href="/">
            <FaTwitter />
          </a>

          <a href="/">
            <FaInstagram />
          </a>
        </div>
      </aside>
    </>
  );
}

export default Aside
