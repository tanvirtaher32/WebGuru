import React from 'react';
import vg from '../../assets/2.webp';

const Home = () => {
    return (
        <>
        
        <div className='home'>
            <main>
                <h1>
                    Web Guru
                </h1>
                <p>Solution to all your problems</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alt="" />

            <p>
            Welcome to Web Guru, your trusted partner in digital solutions. Explore a world of innovation where we harness technology to empower your business, from cutting-edge software development to strategic digital consultancy. Discover how we can elevate your digital presence and drive growth in the digital age. 
            </p>
        </div>
        
        </>
    );
};

export default Home;