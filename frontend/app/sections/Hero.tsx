import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="py-16 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 ">
          <div
            className="md:col-span-6 outline outline-2
       outline-white/10 rounded-md"
          >
            <Image
              src="/images/image_45.jpg"
              alt="Xiaomi Band 9"
              className="rounded-md w-full"
              layout="responsive"
              width={100}
              height={20}
            />
          </div>

          {/* Text Section */}
          <div
            className="md:col-span-4 flex flex-col justify-center px-4 outline outline-2
       outline-white/20 rounded-md"
          >
            <h1
              className="text-4xl font-bold uppercase tracking-widest 
              bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text"
            >
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

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:py-5">
          <li
            className="relative bg-white flex flex-col justify-between border rounded 
          shadow-md hover:shadow-primary-400"
          >
            <a className="relative" href="/tool/writey-ai">
              <div className="relative w-full aspect-video">
                <Image
                  src="/images/image_24.jpg"
                  alt="Xiaomi Band 9"
                  className="rounded-md w-full"
                  layout="responsive"
                  width={100}
                  height={20}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b
                 from-gray-800 to-gray-500 text-white"
                >
                  <h2 className="text-xl font-semibold">Writey A.I</h2>
                  <p className="font-medium text-sm">
                    Most advanced language A.I
                  </p>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                Writey A.I is an AI tool that generates original, researched
                blog posts in minutes, provides content optimization advice, and
                works with a plagiarism-free rule.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Freemium</span>
                </li>
              </ul>
              <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                  <span>Content Generation,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Marketing,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>SEO,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Writing</span>
                </li>
              </ul>
            </div>
          </li>
          <li
            className="relative bg-white flex flex-col justify-between border rounded 
          shadow-md hover:shadow-primary-400"
          >
            <a className="relative" href="/tool/blogseo-ai">
              <div className="relative w-full aspect-video">
                <Image
                  src="/images/image_19.jpg"
                  alt="Xiaomi Band 9"
                  className="rounded-md w-full"
                  layout="responsive"
                  width={100}
                  height={20}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b 
                from-gray-800 to-gray-500 text-white"
                >
                  <h2 className="text-xl font-semibold">BlogSEO AI</h2>
                  <p className="font-medium text-sm">
                    AI Writer for SEO‍ That Follows Best Practices
                  </p>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                BlogSEO AI revolutionizes SEO writing. Stay at the top of your
                SEO game with this automated writing tool that generates
                high-performing blog content. It also offers keyword research,
                internal linking strategy, schema generation, and more.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 
                  text-black px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Free Trial</span>
                </li>
                <li
                  title="Support for API"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 
                  text-black px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 
                      12 17M12 17V21M8 3V6M16 3V6M5 9H19"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>API</span>
                </li>
              </ul>
              <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                  <span>Marketing,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>SEO,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Content Generation</span>
                </li>
              </ul>
            </div>
          </li>
          <li
            className="relative bg-white flex flex-col justify-between border 
          rounded shadow-md hover:shadow-primary-400"
          >
            <a className="relative" href="/tool/typewise">
              <div className="relative w-full aspect-video">
                <Image
                  src="/images/image_16.jpg"
                  alt="Xiaomi Band 9"
                  className="rounded-md w-full"
                  layout="responsive"
                  width={100}
                  height={20}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                  <h2 className="text-xl font-semibold">Typewise</h2>
                  <p className="font-medium text-sm">
                    AI Communication Assistant
                  </p>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                Typewise is an AI Communication Assistant that helps customer
                service and sales teams communicate faster and more effectively.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Contact for Pricing</span>
                </li>
                <li
                  title="Support for API"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black
                   px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12
                       17M12 17V21M8 3V6M16 3V6M5 9H19"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>API</span>
                </li>
              </ul>
              <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                  <span>Business,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Communication,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Customer Support,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Email,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Sales</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hero;
