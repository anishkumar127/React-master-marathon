import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideoContext from "../hooks/VideoContext";
import axios from "axios";
import { useEffect, useState } from "react";
function VideoList({ editVideo }) {
  // const videos = useVideoContext();
  const url = "https://my.api.mockaroo.com/video.json?key=d63fc1d0";
  const [videos, setVideos] = useState([])
  async function handleClick() {
    const res = await axios.get(url);
    setVideos(res.data);
  }
  useEffect(() => {
    handleClick();
  }, [])
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log('Playing..', video.title)}
            onPause={() => console.log('Paused..', video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <button onClick={handleClick}>Get Videos</button>
    </>
  )
}

export default VideoList