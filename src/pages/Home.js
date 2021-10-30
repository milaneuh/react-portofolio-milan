import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Milan Rougemont</h1>
                    <h2>Web & Mobile Developer</h2>
                    <div className="pdf">
                        <a href="./media/CVMILAN.pdf" target="_blank">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;