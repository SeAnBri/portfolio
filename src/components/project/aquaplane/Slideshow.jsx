import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

import './slideshow.css'

const Slideshow = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide + images.length - 1) % images.length);
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
        <div className="slideshow" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <img src={images[currentSlide]} alt="Slideshow" className='aquaplane-image'/>
            <div className='slideshow-nav'>
                <a onClick={prevSlide} className='prev-button'>
                    <MdKeyboardArrowLeft />
                </a>
                <div className="slideshow-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
                <a onClick={nextSlide} className='next-button'>
                    <MdKeyboardArrowRight />
                </a>
            </div>
        </div>
    );
};

export default Slideshow;