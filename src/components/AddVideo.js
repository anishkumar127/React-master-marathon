import "./AddVideo.css";
import { useEffect, useRef, useState } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";

const initialState = {
    time: "1 month ago",
    channel: "Coder Dost",
    verified: true,
    title: "",
    views: "",
};

function AddVideo({ editableVideo }) {
    const [video, setVideo] = useState(initialState);
    const dispatch = useVideoDispatch();
    const inputRef = useRef(null);
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
        inputRef.current.focus();
        // inputRef.current.value = "temp value";
        // inputRef.current.placeholder = "";
        // "type here".split('').forEach((char, i) => {
        //     setTimeout(() => {
        //         inputRef.current.placeholder = inputRef.current.placeholder + char;
        //     }, 200 * i);
        // })
    }, [editableVideo])
    return (
        <form>
            <input
                type="text"
                ref={inputRef}
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
