import React from 'react'
import "../components/comp.css";
import { IoBookOutline } from 'react-icons/io5';

const Resume = () => {
  return (
    <>
      <div
        className="p-14 m-10 lg:w-[50%] lg:ml-130 rounded-xl border-1 border-amber-200"
        style={{
          backgroundColor: "rgba(221, 221, 221, 0.1)",
        }}>
        <div>
          <h1 className="text-2xl font-bold">Resume</h1>
          <hr className="border-4 rounded-md border-amber-200 w-8" /> <br />
        </div>
        <div>
          <div className="flex">
            <IoBookOutline
              className="text-amber-200 text-3xl rounded-md"
              id="icon"
            />
            <h1 className="text-2xl font-bold px-1">Education</h1>
          </div>
          <div className="border-l-1 border-amber-200 px-4 ml-4 pt-4">
            <p className="font-bold text-md">Osun State University</p>
            <p className="text-amber-200">2022 - Present</p>
            <p>Computer science</p>
          </div>

          <div className="border-l-1 border-amber-200 px-4 ml-4 pt-4">
            <p className="font-bold text-md">OICHUB Coding School </p>
            <p className="text-amber-200">2025 - Present</p>
            <p>Front-end Development Student</p>
          </div>
        </div>
        <div>
          <div className="flex pt-4">
            <IoBookOutline
              className="text-amber-200 text-3xl rounded-md"
              id="icon"
            />
            <h1 className="text-2xl font-bold px-1">Experience</h1>
          </div>
          <div className="border-l-1 border-amber-200 px-4 ml-4 pt-4">
            <p className="font-bold text-md">UI/UX Designer</p>
            <p className="text-amber-200">2024 - Present</p>
            <p>A volunteer job</p>
          </div>

          <div className="border-l-1 border-amber-200 px-4 ml-4 pt-4">
            <p className="font-bold text-md">OICHUB Coding School</p>
            <p className="text-amber-200">2025 - Present</p>
            <p>Front-end Development Student</p>
          </div>
        </div>{" "}
        <br />
        <div>
          <h1 className="text-2xl font-bold px-1">My Skills</h1> <br />
          <div id="ico" className='p-4 rounded-md'>
            <div>
              <p className="font-bold text-md">
                Web Design{" "}
                <span className="text-gray-200 font-normal">50%</span>
              </p>
              <div className="w-[90%] rounded-md bg-gray-400">
                <div className="lg:w-55 w-30 rounded-md bg-amber-200 p-1"></div>
              </div>{" "}
              <br />
              <div>
                <p className="font-bold text-md">
                  Web Development{" "}
                  <span className="text-gray-200 font-normal">20%</span>
                </p>

                <div className="w-[90%] rounded-md bg-gray-400">
                  <div className="lg:w-40 w-20 rounded-md bg-amber-200 p-1"></div>
                </div>
              </div>{" "}
              <br />
              <div>
                <p className="font-bold text-md">
                  Web Development{" "}
                  <span className="text-gray-200 font-normal">20%</span>
                </p>

                <div className="w-[90%] rounded-md bg-gray-400">
                  <div className="lg:w-40 w-20 rounded-md bg-amber-200 p-1"></div>
                </div>
              </div>{" "}
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume
