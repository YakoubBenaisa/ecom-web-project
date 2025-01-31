import ReviewCard from '../../Components/ProductStructure/ReviewCard';
import { useState } from 'react';


// Reviews Section of Landing Page
function Reviews(){

     const [currentIndex, setCurrentIndex] = useState(0);
    
        // Array of review data customer names and comments
        const reviews = [
            { name: "Sarah A.", Comment: " \"I'm blown away by the quality and style of the clothes\
                                        I received from Shop.co.From casual wear to elegant dresses.\”" },
            { name: "Alex K." , Comment : "\"Finding clothes that align with my personal style used to be a challenge until I \
                                        discovered Shop.co.\”"},
            { name: "James L.", Comment : "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to \
                                        have stumbled upon Shop.co.\”"},
        ];
       // Handler for left arrow click - moves to previous review
        const handleLeftArrowClick = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
            );
        };
       // Handler for right arrow click - moves to next review
        const handleRightArrowClick = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
        };

    return(
        <>
            {/*----------------------------- Customers Reviews ---------------------------*/}
            <div className='lg:mx-[350px] my-[80px]'>
                <div className='flex justify-center'>
                    <h3 className='lg:text-[48px] text-[26px] font-bold mb-[60px] text-nowrap'>
                        OUR HAPPY CUSTOMERS
                    </h3>
                    {/* Arrows on the right */}
                    <div className='mb-[30px] ml-auto flex items-center gap-4'>
                        <button
                            className='text-[24px] font-bold'
                            onClick={handleLeftArrowClick}
                        >
                            &#8592;
                        </button>
                        <button
                            className='text-[24px] font-bold'
                            onClick={handleRightArrowClick}
                        >
                            &#8594;
                        </button>
                    </div>
                </div>
                <div className='flex justify-center'>
                    {/* Reviews carousel section */}
                    <div className='lg:flex justify-center gap-10  block'>
                        {reviews.map((review, index) => {
                            const isActive = index === currentIndex;
                            const isNext = (index === (currentIndex + 1) % reviews.length);
                            const isPrev = (index === (currentIndex - 1 + reviews.length) % reviews.length);

                            return (
                                <div
                                    key={index}
                                    className={`transition-transform duration-300 ease-in-out 
                                        ${isActive ? 'scale-110' : isNext || isPrev ? 'scale-90 opacity-50' : 'hidden'}`}
                                >
                                    <ReviewCard name={review.name} comment={review.Comment}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Reviews;