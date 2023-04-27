import React from 'react';
import Top from '../Components/Body Section/Top Section/Top';
import Sidebar from '../Components/SideBar Section/Sidebar';

const Container = ({ children }) => {
    return (
        <div className="container">
            <Sidebar />
            <div className="mainContent">
                <Top />
                {children}
            </div>
        </div>
    );
};

export default Container;
