import React from 'react'
import "../components/comp.css";

const data = [
  {
    image: "./Digital.png",
    title: "Web Design",
    desc: "Business",
  },
  {
    image: "./five.png",
    title: "Web Design & Web Dev",
    desc: "Academy",
  },
  {
    image: "./four.png",
    title: "Web Development",
    desc: "E-commerce",
  },
  {
    image: "./one.png",
    title: "Web Development",
    desc: "E-commerce",
  },
  {
    image: "./scabby.png",
    title: "Web Design",
    desc: "Verification",
  },
  {
    image: "./Shadow.png",
    title: "Web Design",
    desc: "Profile Card",
  },
  {
    image: "./three.png",
    title: "Web Development",
    desc: "Service",
  },
  {
    image: "./two.png",
    title: "Web Development",
    desc: "Technology",
  },
  {
    image: "./Simple.png",
    title: "Web Design",
    desc: "Fitness",
  },
];

const Portfolio = () => {
  return (
    <>
      <div
        className="p-14 m-10 lg:w-[50%] lg:ml-130 rounded-xl border-1 border-amber-200"
        style={{
          backgroundColor: "rgba(221, 221, 221, 0.1)",
        }}>
        <div>
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <hr className="border-4 rounded-md border-amber-200 w-8" /> <br />
        </div> 

        <div className='flex gap-4'>
            <p className='text-amber-200'>All</p>
            <p>Web Design</p>
            <p>Web Development</p>
        </div> <br />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {data.map((item, index) => (
          <div className='border-1 border-amber-200 rounded-md'>
            <div key={index}>
              <img src={item.image} alt="" className="w-full rounded-md lg:h-50  " />
            </div>

            <div className='p-2'>
              <p className='font-bold text-md'>{item.desc}</p>
              <p className='text-gray-400'>{item.title}</p>
            </div>
          </div>
        ))}

        </div>
      </div>
    </>
  );
}

export default Portfolio
