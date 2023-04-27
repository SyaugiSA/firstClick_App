import React from 'react';
import './body.css';
import Top from './Top Section/Top';
import Listing from './Listing Section/Listing';
import Activity from './Activity Section/Activity';
import video from '../../Assets/video.mp4';

const Body = () => {
    return (
        <div className="mainContent">
            <Top />

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>MooCare First Click App</h1>
                    <div className="buttons flex">
                        <button className="btn transparent">Start</button>
                    </div>

                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        <div className="textDiv">
                            <h1 style={{ color: '#EEEFF1' }}>MY STAT HELLO WORLD</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom flex">
                <Listing />
                <Activity />
            </div>
        </div>
    );
};

export default Body;
