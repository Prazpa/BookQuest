//import shadcn/ui component
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//import for Darkmode
import { ColContext } from "@/App";
import { useContext } from "react";




function Footer() {
    //Receive value from app.tsx
    const { darkMode } = useContext(ColContext);

    return (
        <div className={`flex flex-col md:flex-row justify-center gap-8 w-full p-8 ${darkMode ? 'bg-[#fbccd0]': 'bg-[#ccfbf7]'}`}>
            {/* Contact */}
            <div className="flex flex-col mb-8 items-center md:items-start">
                <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                <div className="flex items-center space-x-4">
                    <a href="https://github.com/Prazpa" target="_blank" rel="noopener noreferrer">
                        <Avatar className="hover:bg-[#042F2B]">
                            <AvatarImage src="src/assets/Github_Logo.png" />
                            <AvatarFallback>Github</AvatarFallback>
                        </Avatar>
                    </a>
                    <a href="mailto:prapakornpm2001@gmail.com">
                        <Avatar className="hover:bg-[#042F2B]">
                            <AvatarImage src="src/assets/Gmail_Logo.png" />
                            <AvatarFallback>Gmail</AvatarFallback>
                        </Avatar>
                    </a>
                </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col items-start">
                <h2 className="text-lg font-semibold mb-2">Resources</h2>
                <ul className="list-disc pl-6 grid grid-rows-3 grid-flow-col gap-x-10">
                    <li className="mb-2">APIs: <a href="https://openlibrary.org/developers/api" target="blank">Openlibrary.org</a></li>
                    <li className="mb-2">Component UI: <a href="https://ui.shadcn.com/" target="blank">shadcn/ui</a></li>
                    <li className="mb-2">CSS: <a href="https://tailwindui.com/" target="blank">tailwindcss</a></li>
                    <li className="mb-2">Design Prototype: <a href="https://www.figma.com/community/file/1339948781745184318/handleit" target="blank">Handlelt (Figma)</a></li>
                    <li className="mb-2">Colors: <a href="https://uicolors.app/create" target="blank">UI Colors</a></li>
                    <li className="mb-2">Image: <a href="https://copilot.microsoft.com/" target="blank">Microsoft Copilot (AI)</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
