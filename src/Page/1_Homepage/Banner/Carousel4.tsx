import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react'; 

const Carousel4 = () => {
    const { darkMode } = useContext(ColContext);
    return (
        <div className="flex items-center gap-5">
            <img
                src="src/assets/img_slider3.jpg" 
                alt="bookSlider1"
                className={`w-[350px] h-[400px]`}
            />
            <div>
                <span className={`font-bold font-['Overpass'] text-2xl ${darkMode ? 'text-[#F26B77]' : 'text-teal-600'}`}>
                    Share
                </span>

                <p className="font-['Overpass'] text-xl">
                    Unlock Your Story: Share the Book That Speaks to You!
                </p>
            </div>
        </div>
    );
};

export default Carousel4;
