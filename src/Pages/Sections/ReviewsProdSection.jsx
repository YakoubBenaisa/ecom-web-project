
import ReviewCard from '../../Components/ProductStructure/ReviewCard';
import TopProd from '../../Components/ProductStructure/TopProd';
import { BShirt, Jeans, Chemise, OrShirt } from '../../assets/Images';

function Reviews(){

    const reviews = [
        {
          name: "Sarah M.",
          comment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece has exceeded my expectations.",
          postedOn: "December 1, 2023"
        },
        {
          name: "Alex K.",
          comment: "The attention to detail and craftsmanship is outstanding. These clothes make me feel confident and stylish every time I wear them.",
          postedOn: "December 15, 2023"
        },
        {
          name: "Michael R.",
          comment: "Great fit, excellent material quality, and the customer service team was incredibly helpful with sizing questions. Highly recommend!",
          postedOn: "January 3, 2024"
        },
        {
          name: "Emily W.",
          comment: "Finally found a brand that consistently delivers both style and comfort. The fabrics are breathable and the cuts are flattering.",
          postedOn: "January 18, 2024"
        },
        {
          name: "David L.",
          comment: "The shopping experience was seamless, and the clothes arrived perfectly packaged. The quality is exactly as advertised - excellent!",
          postedOn: "February 5, 2024"
        },
        {
          name: "Jessica H.",
          comment: "These pieces have become staples in my wardrobe. The versatility and quality make them perfect for both work and casual occasions.",
          postedOn: "February 20, 2024"
        }
      ];
    return (
        <div className='mx-[140px] pt-[50px]'>
            <span className='mx-[200px] font-bold text-[26px]'>All Reviews <span className='font-semibold opacity-60 text-[14px]'>(451)</span></span>
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
                    {reviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            width={610}
                            hight={242}
                            name={review.name}
                            comment={review.comment}
                            postedOn={review.postedOn}
                        />
                    ))}
                </div>
            </div> 
            <div className='cursor-pointer duration-500 hover:border-black font-normal mt-[50px] text-[16px] align-middle w-[218px] h-[58px] border-2 rounded-3xl
                            flex m-auto justify-center items-center mb-[-80px]'>
                <span>Load More Reviews</span>
            </div>    
            <div>
                <TopProd title="You might also like" pictures={[BShirt, OrShirt, Jeans, Chemise]} />
            </div>
        </div>
    )
}

export default Reviews;