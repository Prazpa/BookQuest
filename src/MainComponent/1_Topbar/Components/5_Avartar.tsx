//import shadcn/ui component
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
import { Button } from '@/components/ui/button';

//import for useContext
import { ColContext } from '@/AppType/ColType';
import { UserContext } from '@/AppType/UserType';
import { useContext } from 'react';

function AvatarComponent() {
    // Receive value from app.tsx
    const { darkMode } = useContext(ColContext);
    
    // State to store the URL of the uploaded image
    const { imageUrl, setImageUrl } = useContext(UserContext); 

    // save images
    const handleSaveChanges = (e:any) => {
        const saveButton = document.getElementById("saveButton");
        if (saveButton) {
            saveButton.innerText = "Saved";
        } 
        
        const selectedFile = e.target.files[0];
        
        // Create a URL for the uploaded file
        const objectUrl = URL.createObjectURL(selectedFile);
        
        // Set the URL of the uploaded image
        setImageUrl(objectUrl);
        
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
                    <div className='flex-row'>
                        <h2>Add Image:</h2>
                        <input type="file" onChange={handleSaveChanges} />
                        {/* Display the uploaded image */}
                        {imageUrl && <img src={imageUrl} alt="Uploaded" width={`200px`} height={"300px"} />} 
                    </div>
                    <DialogFooter>
                        <Button id="saveButton" type="submit" className="bg-black text-white rounded" onClick={handleSaveChanges}>
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AvatarComponent;
