import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react'; 

const Carousel3 = () => {
    const { darkMode } = useContext(ColContext);
    return (
        <div className="flex items-center gap-5 w-full h-[400px]">
            <img
                src="src/assets/img_slider2.jpg"
                alt="bookSlider2"
                width={`400px`}
                height={`auto`}
            />
            <div>
                <span className={`font-bold text-[24px] ${darkMode ? 'text-[#F26B77]' : 'text-teal-600'}`}>
                    Discover
                </span>

                <p className="text-black text-[20px]">
                    Discover Your Next Favorite Read: Dive into our Selection of Highly Recommended Books!
                </p>
            </div>
        </div>
    );
};

export default Carousel3;
