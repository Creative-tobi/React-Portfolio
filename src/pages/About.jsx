import React from 'react'
import { FaCode } from 'react-icons/fa';
import { IoBookOutline, IoPhonePortraitOutline } from 'react-icons/io5';
import { MdOutlineDesignServices } from 'react-icons/md';
import "../components/comp.css";



const dam =[
  {
    image: "/smart.png",
    nam: "Dammy Smith",
    test: "I enjoy working with geek as partner..",
  },
  {
    image: "/pinky.png",
    nam: "Presh Presh",
    test: "I enjoy working with geek as partner..",
  }
]
const data = [
  {
    icon: <MdOutlineDesignServices />,
    name: "Web Design",
    desc: "The most modern and high-quality design made at a professional level.",
  },

  {
    icon: <FaCode />,
    name: "Web Development",
    desc: "High-quality development of sites at the professional level.",
  },

  {
    icon: <IoPhonePortraitOutline />,
    name: "Mobile App",
    desc: "Professional development of applications for iOS and Android."
  },

  {
    icon: <IoBookOutline />,
    name: "Content Writer",
    desc: "Professional content writing with appropriate use of words and rules"
  }
];
const About = () => {

  return (
    <>
      <div
        className="p-14 m-10 lg:w-[50%] lg:ml-130 rounded-xl border-1 border-amber-200"
        style={{
          backgroundColor: "rgba(221, 221, 221, 0.1)",
        }}>
        {" "}
        <br />
        <div className="text-md/8">
          <h1 className="text-2xl font-bold">About Me</h1>
          <hr className="border-4 rounded-md border-amber-200 w-8" /> <br />
          <p>
            I'm Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs. My job is to
            build your website so that it is functional and user-friendly but at
            the same time attractive. Moreover, I add personal touch to your
            product and make sure that is eye-catching and easy to use. My aim
            is to bring across your message and identity in the most creative
            way. I created web design for many famous brand companies.
          </p>
        </div>{" "}
        <br />
        <div>
          <h1 className="text-2xl font-bold">What I Do</h1>
          <br />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.map((item, index) => (
              <div key={index} className="flex p-6 rounded-md" id="ico">
                <p className="font-bold text-lg pr-2 text-amber-200">
                  {item.icon}
                </p>
                <div>
                  <p className="text-lg font-bold">{item.name}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
        <br />
        <div>
          <h1 className="text-2xl font-bold">Testimonial</h1>
          <br />
          <div className="lg:flex gap-6" style={{ placeItems: "center" }}>
            {dam.map((item, index) => (
              <div key={index} className="flex p-6 rounded-md my-6" id="ico">
                <div className="rounded-lg  mr-2" id="back">
                  <img src={item.image} alt="" className="w-25" />
                </div>{" "}
                <br />
                <div className="relative">
                  <p className="text-lg font-bold">{item.nam}</p>
                  <p className="text-left">{item.test}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[60%] rounded-md bg-gray-400 ml-[20%]">
            <div className="w-40 rounded-md bg-amber-200 p-1"></div>
          </div>
        </div>{" "}
        <br />
        <div>
          <h1 className="text-2xl font-bold">Clients</h1>
          <div className='flex'></div>
          <div className="w-[60%] rounded-md bg-gray-400 ml-[20%]">
            <div className="w-55 rounded-md bg-amber-200 p-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
