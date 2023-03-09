import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideoContext from "../hooks/VideoContext";

function VideoList({ editVideo }) {
  const videos = useVideoContext();
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