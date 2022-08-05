import { BsPlay } from "react-icons/bs";
import { IconContext } from "react-icons";
import Link from "next/link";
import Image from "next/image";

const LandingHeader = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-20">
      <h1 className="text-6xl  md:text-8xl font-bold ml-3 text-gray-900">
        <span className="w-full block lg:contents mb-3">Make</span>

        <span className="relative w-full h-full">
          <img
            src="https://picsum.photos/200"
            className="absolute w-full h-full top-0 right-0"
            layout="fill"
            alt=""
          />

          <span className="mix-blend-screen text-gray-900 bg-white w-full h-full overflow-hidden">
            Your
          </span>
        </span>

        <span className="w-full block lg:contents">Day</span>
      </h1>
      <span className="text-md md:text-xl font-bold mt-10">
        Real People. Real Videos
      </span>
      <Link href="/home">
        <div className="bg-[#fe2b54] cursor-pointer w-25 lg:w-64 text-center mt-10 px-4 py-2 lg:py-4 text-white flex justify-center items-center rounded-md border-2 border-[#fe2b54] hover:bg-transparent hover:text-[#fe2b54] transition duration-300">
          <IconContext.Provider
            value={{
              className: " h-30 mr-2 ",
            }}
          >
            <div>
              <BsPlay size={40} />
            </div>
          </IconContext.Provider>
          <span>Watch Now</span>
        </div>
      </Link>
    </div>
  );
};

export default LandingHeader;
