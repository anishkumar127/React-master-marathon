import "./AddVideo.css";
import { useContext, useEffect, useState } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";

const initialState = {
    time: "1 month ago",
    channel: "Coder Dost",
    verified: true,
    title: "",
    views: "",
};

function AddVideo({ editableVideo }) {
    const [video, setVideo] = useState(initialState);
    const dispatch = useContext(VideoDispatchContext)

    function handleSubmit(e) {
        e.preventDefault();
        if (editableVideo) {
            dispatch({ type: "UPDATE", payload: video })
        } else {
            dispatch({ type: "ADD", payload: video })
        }
        setVideo(initialState);
    }
    function handleChange(e) {
        setVideo({ ...video, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        if (editableVideo) {
            setVideo(editableVideo)
        }
    }, [editableVideo])
    return (
        <form>
            <input
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="title"
                value={video.title}
            />
            <input
                type="text"
                name="views"
                onChange={handleChange}
                placeholder="views"
                value={video.views}
            />
            <button onClick={handleSubmit}>{editableVideo ? "Edit" : "Add"} Video</button>
        </form>
    );
}

export default AddVideo;
