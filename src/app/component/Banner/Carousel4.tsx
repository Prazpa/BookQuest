import { DarkmodeContext } from '@/app/type/DarkmodeType';
import { useContext } from 'react'; 
import slider3 from '@/app/assets/img_slider3.jpg' 

const Carousel4 = () => {
    const { darkMode } = useContext(DarkmodeContext);
    return (
        <div className="xs:flex xs:flex-col xr:flex xr:flex-col xr:px-[10px] xr:overflow-y-auto sm:flex-row items-center gap-5 w-full h-[400px]">
            <img
                src={slider3} 
                alt="bookSlider3"
                className='md:h-[400px] w-[400px] lg:w-[350px] md:w-[300px] sm:w-[200px] sm:h-[300px]'
            />
            <div>
                <span className={`font-bold text-[24px]  ${darkMode ? 'text-[#F26B77]' : 'text-teal-600'}`}>
                    Share
                </span>

                <p className="text-black text-[20px]">
                    Unlock Your Story: Share the Book That Speaks to You!
                </p>
            </div>
        </div>
    );
};

export default Carousel4;
