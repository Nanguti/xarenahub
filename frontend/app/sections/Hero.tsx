import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          {/* Image Section */}
          <div className="md:col-span-6">
            <img
              src="https://m-cdn.phonearena.com/images/review/6708-wide-two_940/Xiaomi-Smart-Band-9-Review-A-great-fitness-tracker-on-a-budget.webp?1729247434"
              alt="Xiaomi Band 9"
              className="rounded-md w-full"
            />
          </div>

          {/* Text Section */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-blue-400">
              Xiaomi Smart Band 9 Review: A great fitness...
            </h1>
            <div className="flex items-center space-x-2 mt-2">
              <div className="text-lg">7.5</div>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-3/4"></div>
              </div>
            </div>
            <p className="text-lg mt-4">
              Do you have to spend hundreds of dollars on a smartwatch just to
              end up tracking your basic health and fitness metrics? No, get the
              Xiaomi Smart Band 9 instead.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {/* Item 1 */}
          <div className="p-4 bg-sky-400 rounded-md">
            <Image
              src="https://m-cdn.phonearena.com/images/review/6708-wide-two_940/Xiaomi-Smart-Band-9-Review-A-great-fitness-tracker-on-a-budget.webp?1729247434"
              className=" rounded-md"
              alt="Xiaomi Smart Band 9"
              width={500} // Specify width
              height={300} // Specify height
              layout="responsive"
            />
            <h2 className="text-xl font-bold">Item 1</h2>
            <p>This is the first item.</p>
          </div>

          {/* Item 2 */}
          <div className="p-4 bg-blue-300 rounded-md">
            <Image
              src="https://m-cdn.phonearena.com/images/review/6708-wide-two_940/Xiaomi-Smart-Band-9-Review-A-great-fitness-tracker-on-a-budget.webp?1729247434"
              className=""
              alt="Xiaomi Smart Band 9"
              width={500} // Specify width
              height={300} // Specify height
              layout="responsive"
            />
            <h2 className="text-xl font-bold">Item 2</h2>
            <p>This is the second item.</p>
          </div>

          {/* Item 3 */}
          <div className="p-4 bg-blue-400 rounded-md">
            <Image
              src="https://m-cdn.phonearena.com/images/review/6708-wide-two_940/Xiaomi-Smart-Band-9-Review-A-great-fitness-tracker-on-a-budget.webp?1729247434"
              className=""
              alt="Xiaomi Smart Band 9"
              width={500} // Specify width
              height={300} // Specify height
              layout="responsive"
            />
            <h2 className="text-xl font-bold">Item 3</h2>
            <p>This is the third item.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
