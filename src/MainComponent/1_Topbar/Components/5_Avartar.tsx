import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';

import { ColContext } from '@/App';
import { useContext, useState } from 'react';
import { Button } from '@/components/ui/button';

function AvatarComponent() {
    // Receive value from app.tsx
    const { darkMode } = useContext(ColContext);
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(""); // State to store the URL of the uploaded image

    const handleSaveChanges = (e:any) => {
        const selectedFile = e.target.files[0];
        const objectUrl = URL.createObjectURL(selectedFile); // Create a URL for the uploaded file
        setFile(selectedFile);
        setImageUrl(objectUrl); // Set the URL of the uploaded image
    };

    return (
        <div className="flex">
            <Dialog>
                <DialogTrigger>
                    <Avatar className={`self-center border-2 ${darkMode ? 'hover:border-[#FF5A67]' : 'hover:border-[#2DD4C5]'}`}>
                        {imageUrl ? (
                            <AvatarImage src={imageUrl} /> // Use the uploaded image URL if available
                        ) : (
                            <div>
                                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdfaz8GPft5te6NT-ZzlFahCsp5K9aw_1AA&usqp=CAU" />
                                <AvatarFallback>User_img</AvatarFallback>
                            </div>
                            
                        )}
                    </Avatar>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white ">
                    <DialogHeader>
                        <DialogTitle>Your img profile</DialogTitle>
                    </DialogHeader>
                    <div>
                        <h2>Add Image:</h2>
                        <input type="file" onChange={handleSaveChanges} />
                        {imageUrl && <img src={imageUrl} alt="Uploaded" />} {/* Display the uploaded image */}
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="bg-black text-white rounded">
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AvatarComponent;
