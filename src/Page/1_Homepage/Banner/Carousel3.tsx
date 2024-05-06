const Carousel3 = () => {
    return (
        <div className="flex items-center">
            <img
                src="src/assets/img_slider2.jpg" 
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
                    Discover
                </span>

                <p className="py-[10px] text-xl font-['Overpass']">
                    Discover Your Next Favorite Read: Dive into our Selection of Highly Recommended Books!
                </p>
            </div>
        </div>
    );
};

export default Carousel3;
