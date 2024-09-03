import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DarkmodeContext } from '@/app/type/DarkmodeType';
import { UserContext } from '@/app/type/UserType';
import { useContext } from 'react';

function AvatarComponent() {
    const { darkMode } = useContext(DarkmodeContext);
    const { imageUrl, setImageUrl } = useContext(UserContext); 

    const handleSaveChanges = (e:any) => {
        const saveButton = document.getElementById("saveButton");
        if (saveButton) {
            saveButton.innerText = "Saved";
        } 
        const selectedFile = e.target.files[0];
        const objectUrl = URL.createObjectURL(selectedFile);
        setImageUrl(objectUrl);
        
    };

    return (
        <div className="flex">
            <Dialog>
                <DialogTrigger>
                    <Avatar className={`self-center border-2 ${darkMode ? 'hover:border-[#FF5A67]' : 'hover:border-[#2DD4C5]'}`}>
                        {imageUrl ? (
                            <AvatarImage src={imageUrl} alt="imageUploaded" width={'50px'} height={'50px'}/> 
                        ) : (
                            <div>
                                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdfaz8GPft5te6NT-ZzlFahCsp5K9aw_1AA&usqp=CAU" alt="imageDefault"/>
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
                        {imageUrl && <img src={imageUrl} alt="Uploaded" width={`200px`} height={"300px"} />} 
                    </div>
                    <DialogFooter>
                        <Button id="saveButton" type="submit" className="bg-black text-white rounded" onClick={handleSaveChanges}>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AvatarComponent;
