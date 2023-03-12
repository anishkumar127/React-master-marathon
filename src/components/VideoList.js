import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideoContext from "../hooks/VideoContext";
import axios from "axios";
import { useEffect, useState } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";
function VideoList({ editVideo }) {
  const videos = useVideoContext();
  const dispatch = useVideoDispatch();
  const url = "https://my.api.mockaroo.com/video.json?key=d63fc1d0";

  useEffect(() => {
    async function getVideos() {
      const res = await axios.get(url);
      dispatch({ type: "LOAD", payload: res.data })
    }
    getVideos();
  }, [dispatch])

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
    </>
  )
}

export default VideoList