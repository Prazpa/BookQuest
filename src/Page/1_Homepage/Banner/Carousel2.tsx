import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react'; 
 
const Carousel2 = () => {
    const { darkMode } = useContext(ColContext);
    return (
        <div className={`flex items-center gap-5 w-full h-[400px]`}>
            <img
                src="src/assets/img_slider1.jpg"
                alt="bookSlider1"
                width={`400px`}
                height={`auto`}
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
