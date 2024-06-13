import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { useContext } from 'react';
import { ColContext } from '@/AppType/ColType';
import { BASE_URL } from '@/FetchData/BaseURL';
import { Button } from '@/components/ui/button';

function Shared_btn({ book }: any) {
    const { darkMode } = useContext(ColContext);
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
        <div>
            <Dialog>
                <DialogTrigger
                    className={`rounded-full text-[14px] w-14 h-10 ${darkMode ? 'bg-[#940D18] text-white hover:bg-[#d8aef6] hover:text-black' : 'bg-[#0D9488] text-white hover:bg-[#F6E7AE] hover:text-black'}`}
                >
                    <span className='text-[16px]'>Shared</span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white overflow-y-scroll">
                    <DialogHeader>
                        <DialogTitle>Shared</DialogTitle>
                        <DialogDescription>
                            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                            <Button onClick={handleCopy} className="ml-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">Copy Link</Button>
                            <Button onClick={shareOnFacebook} className="ml-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">Share on Facebook</Button>
                            <Button onClick={shareOnTwitter} className="ml-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">Share on Twitter</Button>
                            <Button onClick={shareOnInstagram} className="ml-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">Share on Instagram</Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Shared_btn;
