import { signIn, getSession } from "next-auth/react";
import NavBar from "../components/Navbar";
import Head from "next/head";

const login = () => {
  return (
    <>
      <Head>
        <title>Tik Tok Clone</title>
      </Head>
      <NavBar />
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <span className="text-4xl lg:text-5xl text-center text-gray-800 mb-5 leading-normal">
          Login / Register for Tik Tok Clone
        </span>
        <span className="text-sm mx-2 font-thin text-gray-300 text-center">
          Create a profile, follow other accounts,make your own videos, and more
        </span>

        <div className="w-4/5 lg:w-2/4 h-16 p-2 rounded-md border border-[#1c1c1c] m-10 shadow-lg mt-10">
          <button
            className="w-full h-full flex items-center justify-center"
            onClick={() => signIn()}
          >
            <img className="h-2/3  mr-4" src="/google.png" alt="Google Icon" />
            <span>Sign In with google</span>
          </button>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/home",
      },
    };
  }

  return {
    props: {},
  };
};

export default login;
