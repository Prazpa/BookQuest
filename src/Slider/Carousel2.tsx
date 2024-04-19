import React from 'react';

const Carousel2: React.FC = () => {
    return (
        <div className="flex">
            <img
                src="src/assets/img_slider1.jpg" // Consider using `require` or `import` for image paths
                alt="bookSlider1"
                className="w-[400px] h-[500px] mx-[-30px]"
            />

            <div className="mx-[50px] mt-[150px]">
                <span className="text-teal-600 text-3xl font-bold font-['Overpass']">
                    Explore
                </span>

                <p className="py-[10px] text-xl font-['Overpass']">
                    Discover the Vibrant World Within: Explore the US - Unveil the Journey Through Our Captivating Book Covers!
                </p>
            </div>
        </div>
    );
};

export default Carousel2;
