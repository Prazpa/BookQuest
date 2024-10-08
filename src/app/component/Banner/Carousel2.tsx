import { DarkmodeContext } from '@/app/type/DarkmodeType';
import { useContext } from 'react'; 
import slider1 from '@/app/assets/img_slider1.jpg'
 
const Carousel2 = () => {
    const { darkMode } = useContext(DarkmodeContext);
    return (
        <div className={`xs:flex xs:flex-col xr:flex xr:flex-col xr:px-[10px] xr:overflow-y-auto sm:flex-row items-center gap-5 w-full h-[400px]`}>
            <img
                src={slider1}
                alt="bookSlider1"
                className='md:h-[400px] w-[400px] lg:w-[350px] md:w-[300px] sm:w-[200px] sm:h-[300px]'
            />

            <div>
                <span className={`font-bold text-[24px] ${darkMode ? 'text-[#F26B77]' : 'text-teal-600'}`}>
                    Explore
                </span>

                <p className={`text-black text-[20px]`}>
                    Discover the Vibrant World Within: Explore the US - Unveil the Journey Through Our Captivating Book Covers!
                </p>
            </div>
        </div>
    );
};

export default Carousel2;
