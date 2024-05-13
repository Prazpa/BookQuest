//import for Darkmode 
import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react'; 
 
const Carousel2 = () => {
     //Receive value from app.tsx
    const { darkMode } = useContext(ColContext);

    return (
        <div className={`
            flex items-center
            xs:flex-col 
            xr:flex-col
            sm:flex-row 
        `}>
            <img
                src="src/assets/img_slider1.jpg"
                alt="bookSlider1"
                className={` 
                    xs:w-[100px] xs:h-[100px] xs:rounded-md    
                    xr:w-[150px] xr:h-[150px] 
                    sm:w-[250px] sm:h-[400px]
                    md:w-[300px] 
                `}
            />

            <div className={`
                xs:mx-0
                sm:mx-[50px]
            `}>
                <span className={`
                    text-teal-600 font-bold font-['Overpass']
                    xs:text-[18px]
                    sm:text-2xl
                    ${darkMode ? 'invert' : ''}
                `}>
                    Explore
                </span>

                <p className={`
                    font-['Overpass'] 
                    xs:text-[16px]
                    xr:text:-[16px]
                    sm:text-[18px]
                    md:text-xl
                    `}>
                    Discover the Vibrant World Within: Explore the US - Unveil the Journey Through Our Captivating Book Covers!
                </p>
            </div>
        </div>
    );
};

export default Carousel2;
