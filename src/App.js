import {  useReducer, useState } from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
import videoDB from "./data/data";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
function App() {
  console.log("render App");
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState('darkMode');
  function videoReducer(videos, action) {
    switch (action.type) {
      case 'ADD':
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case 'DELETE':
        return videos.filter(video => video.id !== action.payload)
      case 'UPDATE':
        const index = videos.findIndex(v => v.id === action.payload.id);
        const newVideo = [...videos];
        newVideo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideo;
      default:
        return videos;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  function editVideo(id) {
    setEditableVideo(videos.find(video => video.id === id));

  }
  // const themeContext = useContext(ThemeContext)
  return (
    <ThemeContext.Provider value={mode}>
      <div className={`App ${mode}`} onClick={() => console.log("App")}>
        <button onClick={() => setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')}>{mode === 'darkMode' ? <span class="material-symbols-outlined">light_mode</span> : <span class="material-symbols-outlined">dark_mode</span>}

        </button>
        <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
        <VideoList dispatch={dispatch} editVideo={editVideo} videos={videos}></VideoList>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
