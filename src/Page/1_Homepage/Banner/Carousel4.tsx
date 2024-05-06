const Carousel4 = () => {
    return (
        <div className="flex items-center">
            <img
                src="src/assets/img_slider3.jpg" 
                alt="bookSlider1"
                className={` 
                    h-[400px] mx-[-30px]
                    xs:hidden
                    xr:hidden
                    sm:w-[250px] sm:h-[350px]
                    md:w-[300px] 
                    lg:w-[300px]
                    xl:w-[400px]
            `}
            />

            <div className="mx-[50px]">
                <span className="text-teal-600 text-2xl font-bold font-['Overpass']">
                    Share
                </span>

                <p className="py-[10px] text-xl font-['Overpass']">
                    Unlock Your Story: Share the Book That Speaks to You!
                </p>
            </div>
        </div>
    );
};

export default Carousel4;
