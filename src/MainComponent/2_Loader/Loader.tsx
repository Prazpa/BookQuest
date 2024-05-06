// Link css file
import "./Loader.css"

function Loader() {
    return (
        <div className="lds-roller absolute right-[450px] top-[400px]">
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