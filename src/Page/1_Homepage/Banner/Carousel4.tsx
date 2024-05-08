const Carousel4 = () => {
    return (
        <div className="flex items-center">
            <img
                src="src/assets/img_slider3.jpg" 
                alt="bookSlider1"
                className={` 
                    xs:w-[100px] xs:h-[100px] xs:rounded-md    
                    xr:w-[150px] xr:h-[150px] 
                    sm:w-[250px] sm:h-[400px]
                    md:w-[300px]
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
