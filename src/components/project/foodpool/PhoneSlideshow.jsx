import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

import './phone_slideshow.css'

const PhoneSlideShow = ({ mockups }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % mockups.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide + mockups.length - 1) % mockups.length);
    };

    const handleTouchStart = (event) => {
        setTouchStart(event.touches[0].clientX);
    };

    const handleTouchEnd = (event) => {
        const touchEnd = event.changedTouches[0].clientX;
        if (touchStart - touchEnd > 50) {
            nextSlide();
        } else if (touchEnd - touchStart > 50) {
            prevSlide();
        }
    };

    return (
        <div className="phone-slideshow" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className='phone-slideshow-title'>
                <h4>{mockups[currentSlide].heading}</h4>
            </div>
            <img src={mockups[currentSlide].image} alt="Slideshow" className='foodpool-image' />
            <div className='phone-slideshow-nav'>
                <a onClick={prevSlide} className='phone-slideshow-button'>
                    <MdKeyboardArrowLeft />
                </a>
                <div className="phone-slideshow-dots">
                    {mockups.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
                <a onClick={nextSlide} className='phone-slideshow-button'>
                    <MdKeyboardArrowRight />
                </a>
            </div>
        </div>
    );
};

export default PhoneSlideShow;