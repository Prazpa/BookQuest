import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react'; 

const Carousel4 = () => {
    const { darkMode } = useContext(ColContext);
    return (
        <div className="flex items-center gap-5 w-full h-[400px]">
            <img
                src="src/assets/img_slider3.jpg" 
                alt="bookSlider3"
                width={`400px`}
                height={`auto`}
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
