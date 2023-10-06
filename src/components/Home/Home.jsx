import React from 'react';
import vg from '../../assets/2.webp';
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";

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

        <div className="home3" id='about'>
            <div>
                <h1>Who We Are?</h1>
                <p>
                Your Digital Solution Partner. We are a passionate team of tech enthusiasts dedicated to crafting innovative digital solutions. At Web Guru, we leverage our expertise to transform your ideas into reality, offering a wide range of digital services to elevate your online presence. Discover the people behind the pixels and learn how we can empower your digital journey.
                </p>
            </div>
        </div>

        <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
        
        </>
    );
};

export default Home;