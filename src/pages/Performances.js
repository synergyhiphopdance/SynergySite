import React from "react";
import Video from '../assets/TestVideo.MOV'
import '../styles/Performances.css'

export const Performances = () => {
    return (
        <div className="PerformancePage">
            <div className="VideoBox">
                <h1>Performances</h1>
                <ln></ln>
                <video controls className="Video">
                    <source src={Video} type="video/quicktime" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};
