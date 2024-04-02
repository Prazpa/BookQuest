
const RightPanel = () => {
    return (
        <div className="w-[315px] h-[442px] relative">

            {/* Reading */}
            <div className="w-[315px] h-[30px] absolute">
                <span className="absolute text-black text-2xl font-semibold font-['Overpass']">Reading</span>
                <span className="left-[175px] top-[7px] absolute text-neutral-400 text-md font-normal font-['Overpass']">See more</span>
            </div>
            
            {/* Completed */}
            <div className="w-[315px] h-[30px] left-0 top-[338px] absolute">
                <span className="labsolute text-black text-2xl font-semibold font-['Overpass']">Completed</span>
                <span className="left-[175px] top-[7px] absolute text-neutral-400 text-md font-normal font-['Overpass']">See more</span>           
            </div>
        </div>
    )
}

export default RightPanel