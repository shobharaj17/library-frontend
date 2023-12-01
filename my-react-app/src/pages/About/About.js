import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About e-Bookshelf</h2>
            <p className='fs-17'>"Welcome to our e-BookShelf. Where you can find all kinds of books and journals."</p>
            <p className='fs-17'>Use this website as Resource & Research purpose.</p>
            <p className='fs-17'>We provide a information about a differnt kinds of Books and authors of all around the world. </p>
            <p className='fs-17'> You can read e-book from our website.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About