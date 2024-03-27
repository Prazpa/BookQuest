import "./Topbar.css"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

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
                                <a href="">
                                    <svg className="w-[50px] h-[50px] left-[100px] top-[10px] absolute rounded-[500px]"
                                        fill="#000000"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 402.161 402.161">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M201.08,49.778c-38.794,0-70.355,31.561-70.355,70.355c0,18.828,7.425,40.193,19.862,57.151
                                                    c14.067,19.181,32,29.745,50.493,29.745c18.494,0,36.426-10.563,50.494-29.745c12.437-16.958,19.862-38.323,19.862-57.151
                                                    C271.436,81.339,239.874,49.778,201.08,49.778z M201.08,192.029c-13.396,0-27.391-8.607-38.397-23.616
                                                    c-10.46-14.262-16.958-32.762-16.958-48.28c0-30.523,24.832-55.355,55.355-55.355s55.355,24.832,55.355,55.355
                                                    C256.436,151.824,230.372,192.029,201.08,192.029z"
                                                    />
                                                    <path d="M201.08,0C109.387,0,34.788,74.598,34.788,166.292c0,91.693,74.598,166.292,166.292,166.292
                                                    s166.292-74.598,166.292-166.292C367.372,74.598,292.773,0,201.08,0z M201.08,317.584c-30.099-0.001-58.171-8.839-81.763-24.052
                                                    c0.82-22.969,11.218-44.503,28.824-59.454c6.996-5.941,17.212-6.59,25.422-1.615c8.868,5.374,18.127,8.099,27.52,8.099
                                                    c9.391,0,18.647-2.724,27.511-8.095c8.201-4.97,18.39-4.345,25.353,1.555c17.619,14.93,28.076,36.526,28.895,59.512
                                                    C259.25,308.746,231.178,317.584,201.08,317.584z M296.981,283.218c-3.239-23.483-15.011-45.111-33.337-60.64
                                                    c-11.89-10.074-29.1-11.256-42.824-2.939c-12.974,7.861-26.506,7.86-39.483-0.004c-13.74-8.327-30.981-7.116-42.906,3.01
                                                    c-18.31,15.549-30.035,37.115-33.265,60.563c-33.789-27.77-55.378-69.868-55.378-116.915C49.788,82.869,117.658,15,201.08,15
                                                    c83.423,0,151.292,67.869,151.292,151.292C352.372,213.345,330.778,255.448,296.981,283.218z"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
