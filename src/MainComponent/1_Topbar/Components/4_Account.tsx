import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ColContext } from '@/AppType/ColType';
import { UserContext } from '@/AppType/UserType';
import { useContext, useState } from 'react';

import { gql, useMutation } from '@apollo/client';

const LOGIN_USER = gql`
    mutation InsertUser($password: String, $username: String) {
    insert_user(objects: {password: $password, username: $username}) {
        affected_rows
        returning {
            password
            username
        }
    }
}`;


const Account = () => {
    const { darkMode } = useContext(ColContext);
    const { username, setUsername } = useContext(UserContext);

    const [loginUser, { loading}] = useMutation(LOGIN_USER);

    //set Default name
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });


    const handleInputChange = (e: any) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSaveChanges = async () => {
        try {
            const { data } = await loginUser({
                variables: {
                    username: formData.username,
                    password: formData.password
                }
            });
           
            setUsername(formData.username);
            console.log("User data:", data.user); 
            console.log(formData.username);
            console.log(formData.password);            
        } catch (error) {
            console.error("Error verifying user:", error);
        }
    };


    return (
        <div className='flex items-center'>
            <Dialog >
                <DialogTrigger>
                    {username ? (
                        <div className={`text-[14px] font-bold ${darkMode ? 'hover:text-[#FF5A67]' : 'hover:text-[#2DD4C5]'}`}>{username}</div>
                    ) : (
                        <div className={`text-[14px] font-bold ${darkMode ? 'hover:text-[#FF5A67]' : 'hover:text-[#2DD4C5]'}`}>Sign in</div>
                    )}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white ">
                    <DialogHeader>
                        <DialogTitle className='text-[20px]'>Update Your Profile with Ease!</DialogTitle>
                        <DialogDescription>
                            <span className='text-[16px]'>Ready to personalize your profile? Sign in now to make changes and hit save when you're done</span>
                        </DialogDescription>
                    </DialogHeader>
                    <form id="testform2" className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Input
                                id="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="col-span-3 rounded-full text-[16px]"
                                placeholder='Username'
                                autoComplete="username"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Input
                                id="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="col-span-3 rounded-full text-[16px]"
                                placeholder='Password'
                                type='password'
                                autoComplete="current-password"
                            />
                        </div>
                    </form>
                    <DialogFooter>
                        <Button id="saveButton" type="submit" className="bg-black text-white rounded-full hover:bg-white" onClick={handleSaveChanges}>
                            {loading ? "Loading..." : "Save changes"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Account;
