import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react'; 
 
const Carousel2 = () => {
    const { darkMode } = useContext(ColContext);
    return (
        <div className={`flex items-center gap-5`}>
            <img
                src="src/assets/img_slider1.jpg"
                alt="bookSlider1"
                className={` w-[350px] h-[400px]`}
            />
            <div>
                <span className={`font-bold font-['Overpass'] text-2xl ${darkMode ? 'text-[#F26B77]' : 'text-teal-600'}`}>
                    Explore
                </span>

                <p className={`font-['Overpass'] text-xl`}>
                    Discover the Vibrant World Within: Explore the US - Unveil the Journey Through Our Captivating Book Covers!
                </p>
            </div>
        </div>
    );
};

export default Carousel2;
