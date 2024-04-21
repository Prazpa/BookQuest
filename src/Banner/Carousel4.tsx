const Carousel4 = () => {
    return (
        <div className="flex">
            <img
                src="src/assets/img_slider3.jpg" // Consider using `require` or `import` for image paths
                alt="bookSlider1"
                className="w-[400px] h-[500px] mx-[-30px]"
            />

            <div className="mx-[50px] mt-[150px]">
                <span className="text-teal-600 text-3xl font-bold font-['Overpass']">
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
