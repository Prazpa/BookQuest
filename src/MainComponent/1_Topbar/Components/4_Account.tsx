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
import { ColContext } from '@/AppType/ColType';
import { UserContext } from '@/AppType/UserType';
import { useContext, useState } from 'react';

import { gql, useMutation } from '@apollo/client';

const VERIFY_USER = gql`
  mutation VerifyUser($username: String!, $password: String!) {
    verifyUser(username: $username, password: $password) {
      username
      password
    }
  }
`;


const Account = () => {
    //Receive value from app.tsx
    const { darkMode } = useContext(ColContext);
    const { username, setUsername } = useContext(UserContext);

    const [verifyUser] = useMutation(VERIFY_USER);
    
    //set Default name
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    //track whay i type and set to name and user
    const handleInputChange = (e: any) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    // อัพเดตชื่อ username จาก state ที่เก็บข้อมูลใหม่
    const handleSaveChanges = async () => {
        try {
          // เรียกใช้ mutation เพื่อตรวจสอบข้อมูลผู้ใช้
          const { data } = await verifyUser({
            variables: {
              username: formData.username,
              password: formData.password
            }
          });

          setUsername(formData.username);
    
          // จะทำการรับข้อมูลผู้ใช้กลับมาหลังจากตรวจสอบเสร็จสิ้น
          // คุณสามารถทำการจัดเก็บข้อมูลผู้ใช้ลงใน context หรือ state ของแอพพลิเคชันของคุณต่อไปได้ตามต้องการ
          console.log("User data:", data.verifyUser);
        } catch (error) {
          // กรณีเกิดข้อผิดพลาดระหว่างการตรวจสอบข้อมูลผู้ใช้
          console.error("Error verifying user:", error);
        }
      };

    return (
        <div className='flex items-center'>
            <Dialog >
                <DialogTrigger>
                    {username ? (
                        <div className={`text-[16px] font-medium ${darkMode ? 'hover:text-[#FF5A67]' : 'hover:text-[#2DD4C5]'}`}>{username}</div>
                    ) : (
                        <div className={`text-[16px] font-medium ${darkMode ? 'hover:text-[#FF5A67]' : 'hover:text-[#2DD4C5]'}`}>Sign in</div>
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
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Account;
