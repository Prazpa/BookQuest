//import shadcn/ui component
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//import for Darkmode
import { ColContext } from "@/AppType/ColType";
import { useContext } from "react";

function Footer() {
    //Receive value from app.tsx
    const { darkMode } = useContext(ColContext);
    const srcGithub = "/src/assets/Github_Logo.png";
    const srcGmail = "/src/assets/Gmail_Logo.png";
    return (
        <div className={`flex flex-col md:flex-row justify-center gap-8 w-full p-8 ${darkMode ? 'bg-[#fbccd0]': 'bg-[#ccfbf7]'}`}>
            {/* Contact */}
            <div className="flex flex-col mb-8 items-center md:items-start">
                <h2 className="text-[20px] font-semibold mb-2">Contact Us</h2>
                <div className="flex items-center space-x-4">
                    <a href="https://github.com/Prazpa" target="_blank" rel="noopener noreferrer">
                        <Avatar className={`${darkMode ? 'hover:bg-[#FF5A67]' : 'hover:bg-[#2DD4C5]'}`}>
                            <AvatarImage src={`${srcGithub}`} />
                            <AvatarFallback>Github</AvatarFallback>
                        </Avatar>
                    </a>
                    <a href="mailto:prapakornpm2001@gmail.com">
                        <Avatar className={` ${darkMode ? 'hover:bg-[#FF5A67]' : ' hover:bg-[#2DD4C5]'}`}>
                            <AvatarImage src={`${srcGmail}`}/>
                            <AvatarFallback>Gmail</AvatarFallback>
                        </Avatar>
                    </a>
                </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col items-start">
                <h2 className="text-[20px] font-semibold mb-2">Resources</h2>
                <ul className="list-disc pl-6 grid grid-rows-3 grid-flow-col gap-x-10">
                    <li className="mb-2 text-[16px]">APIs: <a href="https://openlibrary.org/developers/api" target="blank" className="hover:underline">Openlibrary.org</a></li>
                    <li className="mb-2 text-[16px]">Component UI: <a href="https://ui.shadcn.com/" target="blank" className="hover:underline">shadcn/ui</a></li>
                    <li className="mb-2 text-[16px]">CSS: <a href="https://tailwindui.com/" target="blank" className="hover:underline">tailwindcss</a></li>
                    <li className="mb-2 text-[16px]">Design Prototype: <a href="https://www.figma.com/community/file/1339948781745184318/handleit" target="blank" className="hover:underline">Handlelt (Figma)</a></li>
                    <li className="mb-2 text-[16px]">Colors: <a href="https://uicolors.app/create" target="blank" className="hover:underline">UI Colors</a></li>
                    <li className="mb-2 text-[16px]">Image: <a href="https://copilot.microsoft.com/" target="blank" className="hover:underline">Microsoft Copilot(AI)</a></li>
                    <li className="mb-2 text-[16px]">Router: <a href="https://reactrouter.com/en/main" target="blank" className="hover:underline">React-router-dom</a></li>
                    <li className="mb-2 text-[16px]">Database: <a href="https://hasura.io/" target="blank" className="hover:underline">Hassura(GraphQL)</a></li>
                    <li className="mb-2 text-[16px]">Database Connection: <a href="https://www.apollographql.com/docs/react/" target="blank" className="hover:underline">Apollo Client</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
