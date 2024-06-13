import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColContext } from "@/AppType/ColType";
import { useContext } from "react";

function Footer() {
    const { darkMode } = useContext(ColContext);
    const srcGithub = "/src/assets/Github_Logo.png";
    const srcGmail = "/src/assets/Gmail_Logo.png";
    const avatarClasses = `${darkMode ? 'hover:bg-[#FF5A67]' : 'hover:bg-[#2DD4C5]'}`;
    return (
        <div className={`flex flex-col md:flex-row justify-center gap-8 w-full p-8 ${darkMode ? 'bg-[#fbccd0]' : 'bg-[#ccfbf7]'}`}>
            <div className="flex flex-col mb-8 items-center md:items-start">
                <h2 className="text-[14px] font-semibold ">Contact Us</h2>
                <div className="flex items-center space-x-4">
                    <a href="https://github.com/Prazpa" target="_blank" rel="noopener noreferrer" aria-label="Visit Github" className="h-full w-full">
                        <Avatar className={avatarClasses}>
                            <AvatarImage src={srcGithub} alt="githubLogo" width={'50px'} height={'50px'}/>
                            <AvatarFallback>Github</AvatarFallback>
                        </Avatar>
                    </a>
                    <a href="mailto:prapakornpm2001@gmail.com" aria-label="Send email to prapakornpm2001@gmail.com">
                        <Avatar className={avatarClasses}>
                            <AvatarImage src={srcGmail} alt="gmailLogo" width={'50px'} height={'50px'}/>
                            <AvatarFallback>Gmail</AvatarFallback>
                        </Avatar>
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-start text-[14px]">
                <h2 className="font-semibold">Resources</h2>
                <ul className="list-disc pl-6 grid grid-rows-3 grid-flow-col gap-x-10">
                    <li>APIs: <a href="https://openlibrary.org/developers/api" target="blank" className="hover:underline">Openlibrary.org</a></li>
                    <li>Component UI: <a href="https://ui.shadcn.com/" target="blank" className="hover:underline">shadcn/ui</a></li>
                    <li>CSS: <a href="https://tailwindui.com/" target="blank" className="hover:underline">tailwindcss</a></li>
                    <li>Design Prototype: <a href="https://www.figma.com/community/file/1339948781745184318/handleit" target="blank" className="hover:underline">Handlelt (Figma)</a></li>
                    <li>Colors: <a href="https://uicolors.app/create" target="blank" className="hover:underline">UI Colors</a></li>
                    <li>Image: <a href="https://copilot.microsoft.com/" target="blank" className="hover:underline">Microsoft Copilot(AI)</a></li>
                    <li>Router: <a href="https://reactrouter.com/en/main" target="blank" className="hover:underline">React-router-dom</a></li>
                    <li>GraphQL: <a href="https://hasura.io/" target="blank" className="hover:underline">Hassura.io</a></li>
                    <li>Database Connection: <a href="https://www.apollographql.com/docs/react/" target="blank" className="hover:underline">Apollo Client</a></li>
                    <li>Website Test: <a href="https://developer.chrome.com/docs/lighthouse/overview" target="blank" className="hover:underline">Lighthouse</a></li>
                    <li>Image Compressors: <a href="https://imageoptim.com/online" target="blank" className="hover:underline">ImageOptim</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Footer;
