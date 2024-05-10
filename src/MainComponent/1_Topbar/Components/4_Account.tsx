//import shadcn/ui component
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

//import for useContext
import { ColContext, NameContext } from '@/App';
import { useContext, useState } from 'react';

const Account = () => {
    //Receive value from app.tsx
    const { darkMode } = useContext(ColContext);
    const {username, setUsername} = useContext(NameContext);
    
    const customtext = `text-[16px] font-medium `

    const [formData, setFormData] = useState({
        name: "Name",
        username: "Username"
    });

    const handleInputChange = (e: any) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };


    const handleSaveChanges = () => {
        setUsername(formData.username); // อัพเดตชื่อ username จาก state ที่เก็บข้อมูลใหม่
    };

    return (
        <div className='flex items-center'>
            <Dialog >
                <DialogTrigger>
                    {username ? (
                        <div className={`${customtext} ${darkMode ? 'hover:text-[#FF5A67]' : 'hover:text-[#2DD4C5]'}`}>{username}</div>
                    ) : (
                        <div className={`${customtext} ${darkMode ? 'hover:text-[#FF5A67]' : 'hover:text-[#2DD4C5]'}`}>Sign in</div>
                    )}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white ">
                    <DialogHeader>
                        <DialogTitle>Sign Up</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <form id="testform2" className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="col-span-3"
                                placeholder='Name'
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Input
                                id="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="col-span-3"
                                placeholder='Username'
                            />
                        </div>
                    </form>
                    <DialogFooter>
                        <Button type="submit" className="bg-black text-white rounded" onClick={handleSaveChanges}>
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Account;
