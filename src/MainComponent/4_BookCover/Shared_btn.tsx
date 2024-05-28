import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { useContext } from 'react';
import { ColContext } from '@/AppType/ColType';
import { BASE_URL } from '@/FetchData/BaseURL';


function Shared_btn({ book }: any) {
    const { darkMode } = useContext(ColContext);
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
                            <a href={`${BASE_URL}${book.key}`} target="blank">{BASE_URL}{book.key}</a>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Shared_btn