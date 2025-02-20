import React, { useContext, useEffect, useState } from "react";
import { authcontext } from "../Provider/AuthProvider";
import WhyChooseUs from "./WhyChooseUs";
import GetStarted from "./GetStarted";
const slides = [
  {
    id: 1,
    img: "https://www.sweetprocess.com/wp-content/uploads/2022/10/task-management-32-1.png",
    text: "Boost your productivity with TaskMatrix",
  },
  {
    id: 2,
    img: "https://projectsly.com/images/task-management-system-screenshot-1.png?v=1691124479409199525",
    text: "Collaborate effortlessly with your team",
  },
  {
    id: 3,
    img: "https://www.cflowapps.com/wp-content/uploads/2018/07/task-management-process.png",
    text: "Organize, track, and complete your tasks efficiently",
  },
];

export default function Home() {
  const { user } = useContext(authcontext);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {
        user?.email?<>
        
        <h1>data still not added</h1>
        </>:<div className="relative w-[80%] mx-auto mt-12 h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="w-full h-full relative">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <img
                src={slide.img}
                alt="TaskMatrix Slide"
                className="w-full h-full object-cover rounded-lg opacity-[60%]"
              />
              <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
                <h2 className="text-2xl md:text-4xl text-center text-black font-bold px-6">
                  {slide.text}
                </h2>
              </div>
            </div>
          ))}
        </div>
       
         
        
      </div>
      }

      <div className="mt-24  m-12">
      <WhyChooseUs></WhyChooseUs>
      </div>
      <div className="mt-24  m-12">
      <GetStarted></GetStarted>
      </div>
    </div>
  );
}
