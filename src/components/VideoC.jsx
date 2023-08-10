import React from 'react';
import videoR from '../assets/cleary.mp4'

import "./Video.css";

export const VideoC = () => {
    return (
        <video src={videoR}  autoPlay loop muted></video>
    )
}