import React from 'react';
import videoR from '../assets/rain.mp4'

import "./Video.css";

export const VideoR = () => {
    return (
        <video src={videoR}  autoPlay loop muted></video>
    )
}