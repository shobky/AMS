import './carousel.css'
import React, { useState } from 'react';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi'
import { Link } from 'react-router-dom';
import { BsLink45Deg } from 'react-icons/bs';
import { useEffect } from 'react';

const Carousel = () => {
    // Initialize the useState hook to store the current index
    const [currentIndex, setCurrentIndex] = useState(0);


    // Create an array of slide objects
    const slides = [
        {
            src: 'img1', header: 'SHIP OWNER',
            article: "Reliable, sustainable and safe services across the MIDDLE EAST, RED SEA, ARABIAN GULD AND COAST OF AFRICA",
            link: '',
            footer: 'our fleet includes containers, heavy lifts, roros, rolos, tugs, passsenger and crew boats'
        },
        {
            src: 'img2', header: 'SHIP BUILDING',
            article: "We specialize in building & repairign all kinds of sihps. Approved by  the Classification Societies Stadndard's Requirements.",
            link: '',
            footer: 'Our welder team have most of classification societies approval.'
        },
        {
            src: 'img3', header: 'SHIP SALVAGE',
            article: "AMS is the process of rescuing a ship and it's cargo. We are always alert and for the rescue in all emergencies.",
            link: 'salvage',
            footer: ''
        },
        {
            src: 'img4', header: 'TANKS & PIPES',
            article: "AMS is one of the main manufactures of storage tanks, pressure vessels and vertical storage tanks oil storeage terminals in the UAE and other countries.",
            link: 'tanks&pipes',
            footer: '',
            color: 'carousel_article_black'
        }
    ];

    // Function to handle the next button click
    const handleNextClick = () => {
        // Increment the current index and wrap around to the first slide when the last slide is reached
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    // Function to handle the previous button click
    const handlePrevClick = () => {
        // Decrement the current index and wrap around to the last slide when the first slide is reached
        setCurrentIndex((currentIndex + slides.length - 1) % slides.length);
    };

    // Get the current slide object
    const currentSlide = slides[currentIndex];


    // function useSwipe(onLeft, onRight) {

    //     useEffect(() => {
    //         let startX;
    //         let endX;
    //         const handleTouchStart = (event) => {
    //             // Store the initial touch position
    //             const touch = event.touches[0];
    //             startX = touch.clientX;
    //         };

    //         const handleTouchEnd = (event) => {
    //             // Store the final touch position and compute the swipe direction
    //             const touch = event.changedTouches[0];
    //             endX = touch.clientX;
    //             const direction = startX > endX ? 'left' : 'right';

    //             // Call the appropriate callback function based on the swipe direction
    //             if (direction === 'left') {
    //                 onLeft();
    //             } else if (direction === 'right') {
    //                 onRight();
    //             }
    //         };

    //         // Add event listeners to the document to capture touch events
    //         document.getElementById('homeCarousel')?.addEventListener('touchstart', handleTouchStart, false);
    //         document.getElementById('homeCarousel')?.addEventListener('touchend', handleTouchEnd, false);

    //         // Clean up the event listeners when the component is unmounted
    //         return () => {
    //             document.getElementById('homeCarousel')?.removeEventListener('touchstart', handleTouchStart, false);
    //             document.getElementById('homeCarousel')?.removeEventListener('touchend', handleTouchEnd, false);
    //         };
    //     }, [onLeft, onRight]);
    // }

    // const handleLeft = () => {
    //     handleNextClick()
    // };

    // const handleRight = () => {
    //     handlePrevClick()
    // };

    // useSwipe(handleLeft, handleRight);

    return (
        <div id='homeCarousel' className='carousel-contaienr'>
            <div className='animation-slide'></div>
            {/* Render the current slide */}
            <div className={`carousel_${currentSlide.src}`}></div>
            <article className={` ${currentSlide.color ?? 'carousel_article'}`}>
                <p className='carousel_caption'>{currentSlide.header}</p>
                <p className='carousel_artilce'>{currentSlide.article}</p>
                {/* <p className='carousel_footer'>{currentSlide.footer}</p> */}
                <Link to={`/${currentSlide.link}`} className='carousle_link'><BsLink45Deg />KNOW MORE</Link>
            </article>


            {/* Render the next and previous buttons */}
            <div className='carousle_btn-group'>
                <button className='carusel_btn carusel_btn-prev' onClick={handlePrevClick}><TfiArrowCircleLeft /></button>
                <button className='carusel_btn carusel_btn-next' onClick={handleNextClick}><TfiArrowCircleRight /></button>
            </div>
        </div>
    )
}
export default Carousel
