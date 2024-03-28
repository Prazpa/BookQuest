import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"

export default function Account() {
  return (
    <div className="relative">
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
  )
}
