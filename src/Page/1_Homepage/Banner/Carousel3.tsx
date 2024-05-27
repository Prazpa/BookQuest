import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react'; 

const Carousel3 = () => {
    const { darkMode } = useContext(ColContext);
    return (
        <div className="flex items-center gap-5">
            <img
                src="src/assets/img_slider2.jpg"
                alt="bookSlider1"
                className={`w-[350px] h-[400px]`}
            />
            <div>
                <span className={`font-bold font-['Overpass'] text-2xl ${darkMode ? 'text-[#F26B77]' : 'text-teal-600'}`}>
                    Discover
                </span>

                <p className="font-['Overpass'] text-xl">
                    Discover Your Next Favorite Read: Dive into our Selection of Highly Recommended Books!
                </p>
            </div>
        </div>
    );
};

export default Carousel3;
