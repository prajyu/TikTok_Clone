import { forwardRef, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";
import { useSession } from "next-auth/react";

const UploadForm = forwardRef((props, ref) => {
  const [video, setVideo] = useState("");
  const [image, setimage] = useState("");
  const [song, setSong] = useState("");
  const [description, setDescription] = useState("");
  const handleClose = () => {
    ref.current.classList.add("animate-down");
    ref.current.classList.remove("animate-vertical");
    ref.current.classList.add("translate-y-full");

    ref.current.classList.remove("block");
    let id = setTimeout(() => {
      ref.current.classList.add("hidden");
      clearTimeout(id);
    }, 400);
  };

  const { data: session } = useSession();

  let handleUpload = async (e) => {
    e.preventDefault();
    const URL = "/api/database/create";

    const user = session.user.name.replaceAll(" ", "_").toLowerCase();

    let props = {
      videoUrl: video,
      songName: song,
      imageUrl: image,
      description: description,
      user: user,
      userImage: session?.user?.image,
    };

    let res = await (
      await fetch(URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(props),
      })
    ).json();

    if (res?.success) setAllNull();
    else alert("Some Error Occured");
  };

  let setAllNull = () => {
    setVideo("");
    setimage("");
    setSong("");
    setDescription("");
  };

  return (
    <div
      ref={ref}
      className="w-full h-screen rounded-lg text-black top-[40px] absolute bg-white translate-y-full  hidden"
    >
      <div className="mt-10 p-4 ">
        <h1 className="text-4xl leading-wide">
          Create the next viral video....
        </h1>
        <form
          onSubmit={handleUpload}
          className="my-6 mx-2 font-sans font-bold spaxe-y-7"
        >
          <div className="relative z-0 mb-6 w-full group">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none mb-6 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#fe2b54] peer"
                  placeholder=" "
                  onChange={(e) => setVideo(e.target.value)}
                  value={video}
                  required
                  autoComplete="off"
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium text-center absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#fe2b54] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 opacity-50 peer-focus:opacity-100"
                >
                  Video URL
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-[#fe2b54] peer"
                  placeholder=" "
                  onChange={(e) => setimage(e.target.value)}
                  value={image}
                  required
                  autoComplete="off"
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium text-center absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#fe2b54] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 opacity-50 peer-focus:opacity-100"
                >
                  Image URL
                </label>
              </div>
            </div>
          </div>
          <div className="relative z-0 mb-12 w-full group">
            <input
              type="text"
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-[#fe2b54] peer"
              placeholder=" "
              value={song}
              onChange={(e) => setSong(e.target.value)}
              required
              autoComplete="off"
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium text-center absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#fe2b54] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 opacity-50 peer-focus:opacity-100"
            >
              Song Name
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full flex-1 group">
            <textarea
              type="password"
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-3 w-full h-56 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-[#fe2b54] peer"
              placeholder=" "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              autoComplete="off"
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium text-center absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#fe2b54] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 opacity-50 peer-focus:opacity-100"
            >
              Caption
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-[#fe2b54] hover:bg-white hover:text-[#fe2b54] border-2 border-[#fe2b54] focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      <IconContext.Provider
        value={{
          className:
            "text-gray-900 opacity-25 absolute top-0 right-0 m-2 hover:opacity-100 transition duration-300",
        }}
      >
        <button onClick={handleClose}>
          <IoIosCloseCircleOutline size={32} />
        </button>
      </IconContext.Provider>
    </div>
  );
});

UploadForm.displayName = "UploadForm";

export default UploadForm;
