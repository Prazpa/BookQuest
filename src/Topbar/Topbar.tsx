import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"

export const Topbar = () => {
    return (
        <nav className="mx-[60px] my-[41px]">
            <div className="Topbar w-auto h-[50px] relative">
                {/* logo-name */}
                <div className="top-[7px] absolute text-teal-600 text-2xl font-bold font-['Overpass']">BookQuest</div>

                {/* Serach-bar */}
                <div className="w-[551px] h-[50px] left-[250px] absolute">
                    <Input className="w-[551px] h-[50px] left-0 top-0 absolute rounded-[30px] border-2 border-zinc-300" type="text" placeholder="Search a book that you want" />
                    <Button className="Searchicon w-10 h-10 left-[500px] top-[0px] absolute">
                        <div className="Ellipse6 w-10 h-10 left-0 top-0 absolute bg-teal-600 rounded-full">
                            <svg className="my-[5px] " xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="40" viewBox="0 0 50 50" fill="white">
                                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                            </svg>
                        </div>
                    </Button>
                </div>

                {/* Explore-btn*/}
                <div className="left-[900px] top-[13px] absolute text-lg font-normal font-['Overpass']">
                    <ul>
                        <li>
                            <a href="" className="text-black">Explore</a>
                        </li>
                    </ul>
                </div>

                {/* Accont-section*/}
                <div className="w-[180px] h-[50px] left-[1014px] top-0 absolute">
                    <ul className="top-[13px] absolute text-lg font-normal font-['Overpass']">
                        <li>
                            <a href="" className="text-black ">Sign&nbsp;in</a>
                        </li>
                    </ul>

                    <div>
                        <ul>
                            <li>
                                <a href="" className="left-[100px] top-[5px] absolute">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
