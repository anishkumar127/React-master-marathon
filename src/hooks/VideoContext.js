import { useContext } from "react";
import VideosContext from "../context/VideosContext";

function useVideoContext() {
    return useContext(VideosContext)
}

export default useVideoContext