import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { useContext } from 'react';
import { DarkmodeContext } from '@/app/type/DarkmodeType';
import { BASE_URL } from '@/app/providers/BaseURL';
import { Button } from '@/components/ui/button';

function Shared_btn({ book }: any) {
    const { darkMode } = useContext(DarkmodeContext);
    const link = `${BASE_URL}${book.key}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(link)
            .then(() => {
                alert("Link copied to clipboard!");
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    };

    const shareOnFacebook = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
        window.open(facebookUrl, "_blank", "width=600,height=400");
    };

    const shareOnTwitter = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}`;
        window.open(twitterUrl, "_blank", "width=600,height=400");
    };

    const shareOnInstagram = () => {
        const instagramUrl = `https://www.instagram.com/?url=${encodeURIComponent(link)}`;
        window.open(instagramUrl, "_blank", "width=600,height=400");
    };
    return (
            <Dialog>
                <DialogTrigger
                    className={`rounded-full text-[14px] w-14 h-10 ${darkMode ? 'bg-[#940D18] text-white hover:bg-[#d8aef6] hover:text-black' : 'bg-[#0D9488] text-white hover:bg-[#F6E7AE] hover:text-black'}`}
                >
                    <span className='text-[16px]'>Shared</span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] bg-white overflow-y-scroll">
                    <DialogHeader>
                        <DialogTitle>Shared</DialogTitle>
                        <DialogDescription>
                            <div className='flex justify-between items-center'>
                                <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                                <Button onClick={handleCopy} className="ml-2 bg-teal-500 text-white rounded-full hover:bg-teal-700">Copy Link</Button>
                            </div>
                            <div className='flex justify-center'>
                                <Button onClick={shareOnFacebook} className="bg-blue-700 text-white rounded-full hover:bg-blue-800 fa fa-facebook"></Button>
                                <Button onClick={shareOnTwitter} className=" bg-blue-400 text-white rounded-full hover:bg-blue-600 fa fa-twitter"></Button>
                                <Button onClick={shareOnInstagram} className="bg-red-500 text-white rounded-full hover:bg-red-700 fa fa-instagram"></Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
       
    )
}

export default Shared_btn;
