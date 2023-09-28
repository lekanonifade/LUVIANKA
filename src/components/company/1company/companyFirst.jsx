import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const images = [
    'src/assets/images/companyfull.svg',
    'src/assets/images/companyhalf1.svg',
    'src/assets/images/companyhalf2.svg',
];

const Companyfirst = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-center">
                {currentIndex === 0 ? (
                    <img src={images[0]} alt="Image 1" />
                ) : (
                    <>
                        <img src={images[1]} alt="Image 2" className="w-1/2" />
                        <img src={images[2]} alt="Image 3" className="w-1/2" />
                    </>
                )}
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <button
                    className="text-gray-700 hover:text-gray-900 py-2 px-4 rounded-l"
                    onClick={prevSlide}
                >
                    <FontAwesomeIcon icon={faCaretLeft} className='text-3xl' />
                </button>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <button
                    className="text-gray-700 hover:text-gray-900 py-2 px-4 rounded-r"
                    onClick={nextSlide}
                >
                    <FontAwesomeIcon icon={faCaretRight} className='text-3xl' />
                </button>
            </div>
        </div>
    );
};

export default Companyfirst;
