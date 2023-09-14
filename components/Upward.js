"use client"

import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const Upward = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='relative z-50'>
            {showScrollButton && (
                <div
                    className='fixed bottom-10 right-6 bg-myGreen p-2 rounded-full shadow cursor-pointer button'
                    onClick={scrollToTop}
                >
                    <FaArrowCircleUp size={32} color='#001b29' />
                </div>
            )}
        </div>
    );
}

export default Upward;
