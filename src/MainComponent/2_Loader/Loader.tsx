// Link css file
import "./Loader.css"

function Loader() { 
    return (
        <div className={`
            lds-roller flex items-center mx-[400px] mt-[200px] 
        `}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader