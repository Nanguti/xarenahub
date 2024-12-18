import React from "react";
import Heading from "./Heading";

const Reviews = () => {
  return (
    <>
      <Heading
        title="What you need"
        eyebrow="Glimpse into my world"
        description=""
      />
      <div className=" mx-auto p-5 sm:p-10 md:p-16 relative bg-white rounded-md">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
          <div className="sm:col-span-6 lg:col-span-5">
            <a href="#">
              <div
                className="h-56 bg-cover text-center overflow-hidden"
                style={{
                  backgroundImage: 'url("/images/image_106.jpg")',
                }}
                title="Woman holding a mug"
              ></div>
            </a>
            <div
              className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r 
            flex flex-col justify-between leading-normal"
            >
              <div className="lg:pl-16">
                <a
                  href="#"
                  className="text-xs text-indigo-600 uppercase font-medium mb-3 flex
                   items-center hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Fashion
                </a>
                <a
                  href="#"
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 
                  transition duration-500 ease-in-out"
                >
                  The perfect summer sweater that you can wear!{" "}
                </a>
                <p className="text-gray-700 text-xs mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
          <div className="sm:col-span-6 lg:col-span-4">
            <div className="flex items-start mb-3 pb-3">
              <a href="#" className="inline-block mr-3">
                <div
                  className="w-20 h-20 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: 'url("/images/image_111.jpg")',
                  }}
                ></div>
              </a>
              <div className="text-sm">
                <p className="text-gray-600 text-xs">Aug 18</p>
                <a
                  href="#"
                  className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
                >
                  Cristiano Ronaldo of Juventus FC looks dejected during the...
                </a>
              </div>
            </div>
            <div className="flex items-start mb-3 pb-3">
              <a href="#" className="inline-block mr-3">
                <div
                  className="w-20 h-20 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: 'url("/images/image_91.jpg")',
                  }}
                ></div>
              </a>
              <div className="text-sm w-2/3">
                <p className="text-gray-600 text-xs">Jan 18</p>
                <a
                  href="#"
                  className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
                >
                  Barcelona v Bayern Munich{" "}
                </a>
              </div>
            </div>
            <div className="flex items-start mb-3 pb-3">
              <a href="#" className="inline-block mr-3">
                <div
                  className="w-20 h-20 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: 'url("/images/image_9.jpg")',
                  }}
                ></div>
              </a>
              <div className="text-sm">
                <p className="text-gray-600 text-xs">Aug 18</p>
                <a
                  href="#"
                  className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
                >
                  Cristiano Ronaldo of Juventus FC looks dejected during the...
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <a href="#" className="inline-block mr-3">
                <div
                  className="w-20 h-20 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: 'url("/images/image_91.jpg")',
                  }}
                ></div>
              </a>
              <div className="text-sm w-2/3">
                <p className="text-gray-600 text-xs">July 23</p>
                <a
                  href="#"
                  className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
                >
                  Barcelona v Bayern Munich - UEFA Champions League{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="sm:col-span-12 lg:col-span-3">
            <a href="#">
              <div
                className="h-56 bg-cover text-center overflow-hidden"
                style={{
                  backgroundImage: 'url("/images/image_102.jpg")',
                }}
                title="Woman holding a mug"
              ></div>
            </a>
            <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <div className="">
                <a
                  href="#"
                  className="text-xs text-indigo-600 uppercase font-medium flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Fashion
                </a>
                <a
                  href="#"
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  The perfect summer sweater that you can wear!{" "}
                </a>
                <p className="text-gray-700 text-xs mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
