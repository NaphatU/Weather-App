import React from 'react';
import videoR from '../assets/sunset.mp4'

import "./Video.css";

export const VideoS = () => {
    return (
        <video src={videoR}  autoPlay loop muted></video>
    )
}