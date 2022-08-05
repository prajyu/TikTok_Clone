import { useEffect, useRef, useState } from "react";

const ImageGrid = () => {
  const [images, setImages] = useState([]);
  const gridOneRef = useRef();
  const gridTwoRef = useRef();
  const gridThreeRef = useRef();

  useEffect(() => {
    let autoScroll = async (ref) => {
      if (!ref?.current) return false;
      let children = ref.current.children;
      let random = Math.floor(Math.random() * children.length);
      await children[random]?.scrollIntoView({ behavior: "smooth" });
    };
    const intervalId = setInterval(() => {
      let refs = [gridOneRef, gridTwoRef, gridThreeRef];
      let randomIndex = Math.floor(Math.random() * refs.length);
      let randomRef = refs[randomIndex];
      autoScroll(randomRef);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    async function fetchImages() {
      let page = Math.floor(Math.random() * 20) + 1;
      let json = await (
        await fetch(`https://picsum.photos/v2/list?limit=6&&page=${page}`)
      ).json();
      json = json.map((e) => e.download_url);

      setImages(json);
    }
    fetchImages();
  }, []);
  return (
    <div className="h-96 ">
      <div className="grid grid-cols-2 lg:grid-cols-3 rounded-md w-full h-full pointer-events-none">
        <div
          ref={gridOneRef}
          className="w-full h-full overflow-scroll snap-y snap-mandatory"
        >
          {images.length &&
            images.map((url, id) => {
              return (
                <img
                  src={url}
                  key={id}
                  alt="image"
                  className="object-cover w-full h-full snap-always snap-start"
                />
              );
            })}
        </div>
        <div
          ref={gridTwoRef}
          className="w-full h-full overflow-scroll snap-y snap-mandatory"
        >
          {images.length &&
            images.map((url, id) => {
              return (
                <img
                  src={url}
                  key={id}
                  alt="image"
                  className="object-cover w-full h-full snap-start"
                />
              );
            })}
        </div>
        <div
          ref={gridThreeRef}
          className="w-full h-full overflow-scroll snap-y snap-mandatory  hidden lg:block"
        >
          {images.length &&
            images.map((url, id) => {
              return (
                <img
                  src={url}
                  key={id}
                  alt="image"
                  className="object-cover w-full h-full snap-start"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
