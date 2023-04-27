import React from 'react';
import './top.css';

//imported icons
import { BiSearchAlt } from 'react-icons/bi';

const Top = () => {
    return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h2 style={{ color: '#0938A7' }}>First Click App v1.1.0</h2>
                    <p style={{ color: '#353535' }}>Hello Ezra, Good Luck!</p>
                </div>

                <div className="searchBar flex">
                    <BiSearchAlt className="icon" />
                    <input type="text" placeholder="Cari Disini" />
                </div>
            </div>
        </div>
    );
};

export default Top;
