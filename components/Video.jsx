import { useSession } from "next-auth/react";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const Video = ({
  videoUrl,
  imageUrl,
  likes,
  liked,
  comment,
  songName,
  description,
  user,
  videoId,
  userImage,
}) => {
  /*forwardRef(
  ({ videoUrl, imageUrl, likeCount, comment, songName }, ref) => {
    useImperativeHandle(ref, () => ({
      playVideo: (e) => {
        videoRef.current.play();
      },
      pauseVideo: (e) => {
        videoRef.current.pause();
      },
    }));*/

  const { data: session } = useSession();

  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [inScreen, setInScreen] = useState(false);

  const videoRef = useRef();
  const likeRef = useRef();

  useEffect(() => {
    setLikeCount(likes);
    setLike(liked);
    videoRef.current.disableRemotePlayback = true;
  }, [likes, liked]);

  useEffect(() => {
    if (inScreen) {
      updateData();
    }
  }, [likeCount, inScreen]);

  useEffect(() => {
    if (!like) {
      likeRef.current.classList.add("white");
      likeRef.current.classList.remove("like");
    } else {
      likeRef.current.classList.add("like");
      likeRef.current.classList.remove("white");
    }
  }, [like]);

  let updateData = async () => {
    if (!session.user || !videoId) return false;
    const body = JSON.stringify({
      user: session.user.email,
      videoId,
      liked: like,
    });
    let response = await (
      await fetch("/api/database/like", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body,
      })
    ).json();
  };

  let handleVideo = () => {
    if (!videoRef.current) return false;
    if (videoRef.current.paused) playVideo();
    if (videoRef.current.muted) {
      videoRef.current.muted = false;
    } else {
      videoRef.current.muted = true;
    }
  };

  let pauseVideo = () => {
    if (!videoRef.current) return false;
    videoRef.current.pause();
  };

  let playVideo = () => {
    if (!videoRef.current) return false;
    videoRef.current.play();
  };

  let handleLike = async () => {
    setLike(!like);
    if (like) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        setInScreen(inView);
        if (inView) {
          playVideo();
        } else {
          pauseVideo();
        }
      }}
      className="w-screen h-full relative snap-start bg-[#1c1c1c]"
      threshold={1}
    >
      <video
        width={1080}
        height={720}
        ref={videoRef}
        controls={false}
        className="w-screen h-full object-fill lg:object-none"
        onClick={handleVideo}
        src={videoUrl}
        loop
        playsinline={true}
        disableRemotePlayback={true}
      ></video>
      <div className="h-2/5 lg:h-2/4 justify-around flex flex-col mb-32 mr-3 text-right absolute right-0 bottom-0">
        <span>
          <button className="h-12 w-12 rounded-full object-cover border-[3px] border-[#fe2b54] ">
            <Image
              src={userImage}
              width={48}
              height={48}
              alt=""
              className="h-full object-cover rounded-full"
            />
          </button>
        </span>
        <span>
          <button onClick={handleLike}>
            <img
              srcSet="https://img.icons8.com/ios-glyphs/344/like--v1.png 6x"
              alt=""
              className="w-10 h-10 white transition duration-300"
              ref={likeRef}
            />
            <span className="font-bold text-white text-xs">
              {likeCount > 0 ? likeCount : "0"}
            </span>
          </button>
        </span>

        <span>
          <button>
            <img
              srcSet="https://img.icons8.com/fluency-systems-filled/344/comments--v1.png 6x"
              alt=""
              className="w-10 h-10"
              style={{
                filter:
                  "invert(100%) sepia(0%) saturate(7483%) hue-rotate(117deg) brightness(100%) contrast(102%)",
              }}
            />
            <span className="font-bold text-white text-xs">
              {comment.length ? comment.length : "0"}
            </span>
          </button>
        </span>

        <span>
          <button>
            <img
              srcSet=" https://img.icons8.com/fluency-systems-filled/344/forward-arrow.png 6x"
              alt=""
              className="w-10 h-10"
              style={{
                filter:
                  "invert(100%) sepia(0%) saturate(7483%) hue-rotate(117deg) brightness(100%) contrast(102%)",
              }}
            />
            <span className="font-bold text-white text-xs">Share</span>
          </button>
        </span>
      </div>
      <div className="w-4/5 h-56 flex flex-col bottom-0 absolute text-white m-4">
        <span className="mb-3 text-2xl font-mono font-bold align-middle">
          @{user}
        </span>
        <span className="text-lg  h-2/5 overflow-scroll font-sans align-text-bottom drop-shadow-lg">
          {description}
        </span>
        <div className="w-screen pr-7 w-screen relative flex justify-between items-center overflow-hidden">
          <div className="w-full animate-move text-center">
            <span className="overflow-hidden text-xs font-thin whitespace-nowrap">
              {songName}
            </span>
          </div>

          <img
            src={imageUrl}
            className="w-10 aspect-square rounded-full animate-spin object-cover"
            alt=""
          />
        </div>
      </div>
    </InView>
  );
};

export default Video;
