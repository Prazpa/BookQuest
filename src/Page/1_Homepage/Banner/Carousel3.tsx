const Carousel3 = () => {
    return (
        <div className="flex items-center">
            <img
                src="src/assets/img_slider2.jpg"
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
