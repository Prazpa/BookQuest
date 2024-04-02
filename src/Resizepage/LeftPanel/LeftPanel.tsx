const LeftPanel = () => {
    return (
        <div className="mx-[56px] h-[550px] relative">

            {/* Categories */}
            <div className="w-[144.11px] h-[165px] absolute">
                <button className="left-[7px] absolute text-neutral-400 text-lg font-semibold font-['Overpass']">Categories</button>

                {/* News */}
                <div className="flex hover:bg-[#F9EFCB] rounded w-[240px] h-[50px] top-[56px] absolute ">
                    <svg
                        className="absolute left-[7px] top-[12px]"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M 2 3 L 2 18 C 2 19.64497 3.3550302 21 5 21 L 19 21 C 20.64497 21 22 19.64497 22 18 L 22 7 L 20 7 L 20 18 C 20 18.56503 19.56503 19 19 19 C 18.43497 19 18 18.56503 18 18 L 18 3 L 2 3 z M 4 5 L 16 5 L 16 18 C 16 18.388348 16.278986 18.657986 16.416016 19 L 5 19 C 4.4349698 19 4 18.56503 4 18 L 4 5 z M 6 7 L 6 10 L 14 10 L 14 7 L 6 7 z M 6 12 L 6 14 L 14 14 L 14 12 L 6 12 z M 6 16 L 6 18 L 14 18 L 14 16 L 6 16 z"></path>
                    </svg>
                    <button className="align-center mx-8 text-black text-lg font-normal font-['Overpass']">News</button>
                </div>

                {/* Best rated */}
                <div className="flex hover:bg-[#F9EFCB] rounded w-[240px] h-[50px] top-[99px] absolute">
                    <svg
                        className="absolute left-[7px] top-[12px]"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 122.88 107.41"
                    >
                        <style type="text/css"></style>
                        <g>
                            <path d="M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z" />
                        </g>
                    </svg>
                    <button className="align-center mx-8 text-black text-lg font-normal font-['Overpass']">Best rated</button>
                </div>

                {/* Commented */}
                <div className="flex hover:bg-[#F9EFCB] rounded w-[240px] h-[50px] top-[142px] absolute">
                    <svg
                        className="absolute left-[7px] top-[12px]"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 50 50"
                    >
                        <path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z"></path>
                    </svg>
                    <button className="align-center mx-8 text-black text-lg font-normal font-['Overpass']">Commented</button>
                </div>
            </div>

            {/* Genre */}
            <div className="w-[144.11px] h-[281px] top-[195px] absolute">

                <button className="absolute text-neutral-400 text-lg font-semibold font-['Overpass']">Genre</button>
                
                {/* Action */}
                <div className="flex hover:bg-[#F6E7AE] rounded w-[240px] h-[50px] top-[43px] absolute">
                    <img className="w-[24px] h-[24px] absolute left-[7px] top-[12px]" src="src/assets/image_1.png" />
                    <button className="align-center mx-8 text-black text-lg font-normal font-['Overpass']">Action</button>
                </div>

                {/* Adventure */}
                <div className="flex hover:bg-[#F6E7AE] rounded w-[240px] h-[50px] top-[86px] absolute">
                    <img className="w-[24px] h-[24px] absolute left-[7px] top-[12px]" src="src/assets/image_2.png" />
                    <button className="align-center mx-8 text-black text-lg font-normal font-['Overpass']">Adventure</button>
                </div>

                {/* Classic */}
                <div className="flex hover:bg-[#F6E7AE] rounded w-[240px] h-[50px] top-[129px] absolute">
                    <img className="w-[24px] h-[24px] absolute left-[7px] top-[12px]" src="src/assets/image_3.png" />
                    <button className="align-center mx-8 text-black text-lg font-normal font-['Overpass']">Classic</button>
                </div>

                {/* Mystery */}
                <div className="flex hover:bg-[#F6E7AE] rounded w-[240px] h-[50px] top-[172px] absolute">
                    <img className="w-[24px] h-[24px] absolute left-[7px] top-[12px]" src="src/assets/image_4.png" />
                    <button className="align-center mx-8 text-black text-lg font-normal font-['Overpass']">Mystery</button>
                </div>

                {/* Fancy */}
                <div className="flex hover:bg-[#F6E7AE] rounded w-[240px] h-[50px] top-[215px] absolute">
                    <img className="w-[24px] h-[24px] absolute left-[7px] top-[12px]" src="src/assets/image_5.png" />
                    <button className="align-center mx-8 text-black text-lg font-normal font-['Overpass']">Fancy</button>
                </div>

                <div className="w-[123.33px] h-[23px] top-[258px] absolute">
                    <button className="absolute text-neutral-400 text-lg font-bold font-['Overpass']">All genres</button>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel