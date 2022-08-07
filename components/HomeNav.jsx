import { useRef } from "react";
import UploadForm from "./UploadForm";
import { useRouter } from "next/router";

const HomeNav = () => {
  const uploadRef = useRef();
  const router = useRouter();
  const handleUpload = async () => {
    uploadRef.current.classList.remove("animate-down");
    uploadRef.current.classList.add("animate-vertical");
    uploadRef.current.classList.remove("translate-y-full");
    uploadRef.current.classList.remove("hidden");
    uploadRef.current.classList.add("block");
  };

  return (
    <>
      <div className="absolute lg:bottom-0 lg:left-0">
        <div className="w-screen bg-[#000] h-16 absolute bottom-0">
          <div className="flex w-full h-full justify-around itmes-center">
            <button onClick={() => router.push("/home")}>
              <img
                className="w-8 h-8"
                srcSet="https://img.icons8.com/fluency-systems-filled/344/home.png 6x"
                alt=""
                style={{
                  filter:
                    "invert(100%) sepia(0%) saturate(7483%) hue-rotate(117deg) brightness(100%) contrast(102%)",
                }}
              />
            </button>
            <button>
              <img
                className="w-8 h-8"
                srcSet="https://img.icons8.com/fluency-systems-filled/344/search.png 6x"
                style={{
                  filter:
                    "invert(100%) sepia(0%) saturate(7483%) hue-rotate(117deg) brightness(100%) contrast(102%)",
                }}
                alt=""
              />
            </button>
            <button>
              <img
                onClick={handleUpload}
                className="w-14 h-10"
                src="/upload.png"
                alt=""
              />
            </button>

            <button>
              <img
                className="w-8 h-8"
                srcSet="https://img.icons8.com/fluency-systems-regular/344/comments--v2.png 6x"
                style={{
                  filter:
                    "invert(100%) sepia(0%) saturate(7483%) hue-rotate(117deg) brightness(100%) contrast(102%)",
                }}
                alt=""
              />
            </button>
            <button>
              <img
                className="w-8 h-8"
                srcSet="https://img.icons8.com/fluency-systems-regular/344/guest-male.png 6x"
                style={{
                  filter:
                    "invert(100%) sepia(0%) saturate(7483%) hue-rotate(117deg) brightness(100%) contrast(102%)",
                }}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <UploadForm ref={uploadRef} />
    </>
  );
};

export default HomeNav;
