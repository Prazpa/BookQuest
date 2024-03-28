import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Account() {
    return (
        <div className="relative">
            <div className="w-[180px] h-[50px] left-[1014px] top-[13px] absolute">
                <Dialog>
                    <DialogTrigger >
                        <Button className="top-[-6px] left-[-15px] text-black absolute text-lg font-normal font-['Overpass']" >Sign in</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white r">
                        <DialogHeader>
                            <DialogTitle>Sign Up</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
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
                        </div>
                        <DialogFooter>
                            <Button type="submit" className="bg-black text-white rounded">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <div className="left-[90px] top-[-5px] absolute">
                    <Avatar>
                        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdfaz8GPft5te6NT-ZzlFahCsp5K9aw_1AA&usqp=CAU" />
                        <AvatarFallback>User_img</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}
