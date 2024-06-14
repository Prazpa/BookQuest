import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react'; 

const Carousel4 = () => {
    const { darkMode } = useContext(ColContext);
    return (
        <div className="xs:flex xs:flex-col xr:flex xr:flex-col xr:px-[10px] xr:overflow-y-auto sm:flex-row items-center gap-5 w-full h-[400px]">
            <img
                src="src/assets/img_slider3.jpg" 
                alt="bookSlider3"
                className='h-[400px] w-[400px] lg:w-[350px] md:w-[300px] sm:w-[200px] sm:h-[300px]'
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
