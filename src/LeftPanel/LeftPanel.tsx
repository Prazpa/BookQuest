import "./LeftPanel.css"

function LeftPanel() {
    return (
        <div className="Leftpanel" style={{ width: 137, height: 476}}>
            <div className="Categorias" style={{ width: 137, height: 165, left: 0, top: 0, position: 'absolute' }}>
                <div className="Categories" style={{ left: 0, top: 0, position: 'absolute', color: '#9B9B9B', fontSize: 18, fontFamily: 'Overpass', fontWeight: '600', wordWrap: 'break-word' }}>Categories</div>
                <div className="Novedades" style={{ width: 81, height: 23, left: 0, top: 56, position: 'absolute' }}>
                    <div className="News" style={{ left: 37, top: 0, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word' }}>News</div>
                    <div className="Vector" style={{ width: 18, height: 17.12, left: 0, top: 1, position: 'absolute', background: '#2C9585' }}></div>
                </div>
                <div className="Mejorvalorados" style={{ width: 119, height: 23, left: 0, top: 99, position: 'absolute' }}>
                    <div className="BestRated" style={{ left: 37, top: 0, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word' }}>best rated</div>
                    <div className="Vector" style={{ width: 18, height: 16.51, left: 0, top: 2, position: 'absolute', background: '#2C9585' }}></div>
                </div>
                <div className="Comentados" style={{ width: 137, height: 23, left: 0, top: 142, position: 'absolute' }}>
                    <div className="Commented" style={{ left: 37, top: 0, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word' }}>Commented</div>
                    <div className="Vector" style={{ width: 18, height: 18, left: 0, top: 2, position: 'absolute', background: '#2C9585' }}></div>
                </div>
            </div>
            <div className="Generos" style={{ width: 121, height: 281, left: 0, top: 195, position: 'absolute' }}>
                <div className="GNeros" style={{ left: 0, top: 0, position: 'absolute', color: '#9B9B9B', fontSize: 18, fontFamily: 'Overpass', fontWeight: '600', wordWrap: 'break-word' }}>Géneros</div>
                <div className="Accion" style={{ width: 87, height: 23, left: 2, top: 43, position: 'absolute' }}>
                    <div className="Action" style={{ left: 35, top: 0, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word' }}>Action</div>
                    <img className="Image1" style={{ width: 18, height: 18, left: 0, top: 5, position: 'absolute' }} src="src/assets/image_1.png" />
                </div>
                <div className="Aventura" style={{ width: 119, height: 23, left: 2, top: 86, position: 'absolute' }}>
                    <img className="Image2" style={{ width: 18, height: 18, left: 0, top: 5, position: 'absolute' }} src="src/assets/image_2.png" />
                    <div className="Adventure" style={{ left: 35, top: 0, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word' }}>Adventure</div>
                </div>
                <div className="Classic" style={{ width: 92, height: 23, left: 2, top: 129, position: 'absolute' }}>
                    <div className="Classic" style={{ left: 35, top: 0, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word' }}>Classic</div>
                    <img className="Image3" style={{ width: 18, height: 18, left: 0, top: 5, position: 'absolute' }} src="src/assets/image_3.png" />
                </div>
                <div className="Misterio" style={{ width: 101, height: 23, left: 2, top: 172, position: 'absolute' }}>
                    <div className="Mystery" style={{ left: 35, top: 0, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word' }}>Mystery</div>
                    <img className="Image4" style={{ width: 18, height: 18, left: 0, top: 5, position: 'absolute' }} src="src/assets/image_4.png" />
                </div>
                <div className="Fantasia" style={{ width: 83, height: 23, left: 2, top: 215, position: 'absolute' }}>
                    <div className="Fancy" style={{ left: 35, top: 0, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word' }}>Fancy</div>
                    <img className="Image5" style={{ width: 18, height: 18, left: 0, top: 2, position: 'absolute' }} src="src/assets/image_5.png" />
                </div>
                <div className="Allgenres" style={{ width: 116, height: 23, left: 2, top: 258, position: 'absolute' }}>
                    <div className="AllGenres" style={{ left: 35, top: 0, position: 'absolute', color: '#9B9B9B', fontSize: 18, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word' }}>All genres</div>
                    <div className="Vector" style={{ width: 14, height: 7.41, left: 0, top: 10, position: 'absolute', background: '#9B9B9B' }}></div>
                </div>
            </div>
        </div>

    )
}

export default LeftPanel