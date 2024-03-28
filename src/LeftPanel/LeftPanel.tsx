
function LeftPanel() {
    return (
        <div className="Leftpanel w-[144.11px] h-[476px] relative">
            <div className="Categorias w-[144.11px] h-[165px] left-0 top-0 absolute">
                <div className="Categories left-[7.11px] top-0 absolute text-neutral-400 text-lg font-semibold font-['Overpass']">Categories</div>
                <div className="Novedades w-[88.11px] h-[23px] left-0 top-[56px] absolute">
                    <div className="News left-[44.11px] top-0 absolute text-black text-lg font-normal font-['Overpass']">News</div>
                </div>
                <div className="Mejorvalorados w-[126.11px] h-[23px] left-0 top-[99px] absolute">
                    <div className="BestRated left-[44.11px] top-0 absolute text-black text-lg font-normal font-['Overpass']">best rated</div>
                </div>
                <div className="Comentados w-[144.11px] h-[23px] left-0 top-[142px] absolute">
                    <div className="Commented left-[44.11px] top-0 absolute text-black text-lg font-normal font-['Overpass']">Commented</div>
                </div>
            </div>
            <div className="Generos w-[126.33px] h-[281px] left-[1.78px] top-[195px] absolute">
                <div className="GNeros left-[5.33px] top-0 absolute text-neutral-400 text-lg font-semibold font-['Overpass']">Géneros</div>
                <div className="Accion w-[94.33px] h-[23px] left-0 top-[43px] absolute">
                    <div className="Action left-[42.33px] top-0 absolute text-black text-lg font-normal font-['Overpass']">Action</div>
                    <img className="Image1 w-4 h-[18px] left-0 top-[5px] absolute" src="https://via.placeholder.com/16x18" />
                </div>
                <div className="Aventura w-[119px] h-[23px] left-[7.33px] top-[86px] absolute">
                    <img className="Image2 w-[18px] h-[18px] left-0 top-[5px] absolute" src="https://via.placeholder.com/18x18" />
                    <div className="Adventure left-[35px] top-0 absolute text-black text-lg font-normal font-['Overpass']">Adventure</div>
                </div>
                <div className="Classic w-[92px] h-[23px] left-[7.33px] top-[129px] absolute">
                    <div className="Classic left-[35px] top-0 absolute text-black text-lg font-normal font-['Overpass']">Classic</div>
                    <img className="Image3 w-[18px] h-[18px] left-0 top-[5px] absolute" src="https://via.placeholder.com/18x18" />
                </div>
                <div className="Misterio w-[101px] h-[23px] left-[7.33px] top-[172px] absolute">
                    <div className="Mystery left-[35px] top-0 absolute text-black text-lg font-normal font-['Overpass']">Mystery</div>
                    <img className="Image4 w-[18px] h-[18px] left-0 top-[5px] absolute" src="https://via.placeholder.com/18x18" />
                </div>
                <div className="Fantasia w-[83px] h-[23px] left-[7.33px] top-[215px] absolute">
                    <div className="Fancy left-[35px] top-0 absolute text-black text-lg font-normal font-['Overpass']">Fancy</div>
                    <img className="Image5 w-[18px] h-[18px] left-0 top-[2px] absolute" src="https://via.placeholder.com/18x18" />
                </div>
                <div className="Allgenres w-[123.33px] h-[23px] left-0 top-[258px] absolute">
                    <div className="AllGenres left-[42.33px] top-0 absolute text-neutral-400 text-lg font-normal font-['Overpass']">All genres</div>
                </div>
            </div>
        </div>

    )
}

export default LeftPanel