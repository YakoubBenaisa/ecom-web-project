import Star from '../assets/Star 5.png';
import ConfIcon from '../assets/Review.svg';

function ReviewCard({name, comment}){

    return(
        <div className=" border-2 rounded-[20px] min-w-[410px] min-h-[240px] ">
            <div className='m-8 my-10 block'>
                <div className="mb-4 flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                        <img  
                            key={i}
                            src={Star}
                            alt="star rating"
                            className="w-[23px] h-[23px]"
                        />
                    ))}
                </div>
                <div className='flex'>
                    <span className='text-[20px] font-semi-bold ml-1 mr-2'>{name}</span>
                    <img src={ConfIcon} />
                </div>
                <p className='mt-2 text-[rgba(0,0,0,0.6)]'>
                    {comment}
                </p>

            </div>
            

        </div>
    )
}

export default ReviewCard;