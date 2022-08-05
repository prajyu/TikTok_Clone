import { getSession, useSession } from "next-auth/react";
import Video from "../components/Video";
import HomeNav from "../components/HomeNav";
import { useState, useRef, useEffect, useMemo } from "react";

const User = () => {
  const { data: session, status } = useSession();

  const [videos, setVideos] = useState([]);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    if (!session?.user) return;
    let fetchVideos = async () => {
      let videoList = await (
        await fetch("/api/database/get", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            user: session?.user?.email,
          }),
        })
      ).json();
      if (videoList?.response.length)
        setVideos([...videos, ...videoList?.response]);
    };
    fetchVideos();
  }, [session, end]);

  const videoContainerRef = useRef();

  const onScroll = () => {
    if (videoContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight, offsetHeight } =
        videoContainerRef.current;
      let totalContentHeight = Math.round(
        scrollTop + offsetHeight + clientHeight
      );
      if (totalContentHeight === scrollHeight) {
        setEnd(!end);
      }
    }
  };

  if (status === "authenticated") {
    return (
      <div className="lg:flex lg:justify-center lg:items-center h-screen overflow-hidden">
        <div
          className="w-screen h-screen overflow-scroll snap-mandatory snap-y"
          ref={videoContainerRef}
          onScroll={onScroll}
        >
          {videos &&
            videos?.map((e, id) => {
              let {
                videoUrl,
                comments,
                imageUrl,
                songName,
                description,
                likes,
                user,
                _id,
                liked,
                userImage,
              } = e;

              return (
                <Video
                  videoUrl={videoUrl}
                  comment={comments}
                  likes={likes}
                  imageUrl={imageUrl}
                  songName={songName}
                  description={description}
                  key={id}
                  user={user}
                  videoId={_id}
                  liked={liked}
                  userImage={userImage}
                />
              );
            })}
        </div>

        <HomeNav />
      </div>
    );
  }
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
    props: { session },
  };
};

export default User;
