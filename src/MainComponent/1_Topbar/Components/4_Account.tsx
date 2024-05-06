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
import { Label } from '@/components/ui/label';

//import for Darkmode
import { ColContext } from '@/App';
import { useContext } from 'react';

const Account = () => {
    //Receive value from app.tsx
    const { darkMode } = useContext(ColContext);

    const customtext = `text-[16px] font-medium `
    return (
        <div className='flex items-center'>
            <Dialog>
                <DialogTrigger>
                    <div className={`${customtext} ${darkMode ? 'hover:text-[#FF5A67]': 'hover:text-[#2DD4C5]'}`}>Sign in</div>
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
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                defaultValue="Username"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input
                                id="username"
                                defaultValue="@Username669"
                                className="col-span-3"
                            />
                        </div>
                    </form>
                    <DialogFooter>
                        <Button type="submit" className="bg-black text-white rounded">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Account;
