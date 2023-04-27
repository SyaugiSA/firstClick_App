import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

//Imported Images =========>
import logo from '../../Assets/firstClick.png';
import video from '../../Assets/video.mp4';
//Imported Icons ==========>
import { IoMdSpeedometer } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';

const Sidebar = () => {
    const path = window.location.pathname;

    function activeClass(pathUrl) {
        return path === pathUrl ? 'active' : '';
    }

    return (
        <div className="sideBar grid">
            <div className="logoDiv flex">
                <img src={logo} alt="Image Name" />
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">MENU</h3>
                <ul className="menuLists grid">
                    <li className={`listItem ${activeClass('/Usertraffic')}`}>
                        <a href="Usertraffic" className="menuLink flex">
                            <IoMdSpeedometer className="icon" />
                            <span className="smallText">User Traffic</span>
                        </a>
                    </li>

                    <li className={`listItem ${activeClass('/Useractivity')}`}>
                        <a href="Useractivity" className="menuLink flex">
                            <BsFillPersonFill className="icon" />
                            <span className="smallText">User Activity</span>
                        </a>
                    </li>
                </ul>
            </div>
            <br />
        </div>
    );
};

export default Sidebar;
