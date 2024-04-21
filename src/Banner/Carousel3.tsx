const Carousel3 = () => {
    return (
        <div className="flex">
            <img
                src="src/assets/img_slider2.jpg" // Consider using `require` or `import` for image paths
                alt="bookSlider1"
                className="w-[400px] h-[500px] mx-[-30px]"
            />

            <div className="mx-[50px] mt-[150px]">
                <span className="text-teal-600 text-3xl font-bold font-['Overpass']">
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
