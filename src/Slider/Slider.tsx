import "./Slider.css"
import { Button } from "../components/ui/button"

export const Slider = () => {
    return (
        <div className="slider-box">
            <div className="Slider-word">
                <div>
                    <img src="src/assets/logo_1.png" alt="" />
                    <div>
                        <span>BookQuest, Platform for everyone who love to read. Find a library of book and author.</span>
                    </div>
                </div>
                <Button className="Doc">Documentation</Button>
                <Button className="start">Get Started</Button>
            </div>
        </div>
    )
}
