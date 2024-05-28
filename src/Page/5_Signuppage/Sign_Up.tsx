import { UserContext } from '@/AppType/UserType';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { gql, useMutation } from '@apollo/client';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const SIGNUP_USER = gql`
    mutation InsertUser($password: String, $username: String) {
        insert_user(objects: {password: $password, username: $username}) {
            affected_rows
            returning {
                password
                username
            }
        }
    }
`;
function Sign_Up() {
    const { setUsername } = useContext(UserContext);
    const [ signupUser ] = useMutation(SIGNUP_USER);
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
            // Check if username or password is empty
            if (!formData.username || !formData.password) {
                alert("Please fill in both username and password fields.");
                return;
            }

            const { data } = await signupUser({
                variables: {
                    username: formData.username,
                    password: formData.password
                }
            });

            setUsername(formData.username);
            console.log(formData.username);
            console.log(formData.password);
        }
        catch (error) {
            console.error("Error verifying user:", error);
        }
    };

    return (
        <div className={`flex justify-center items-center h-screen bg-[url('src/assets/bg_img1.png')]`}>
            <div className="w-[425px] h-auto bg-[#ffffffbb] border-white border-2">
                <div className='flex justify-between'>
                    <span className='text-[24px]'>Sign up</span>
                    <Link to={`/`} className='text-[24px]'>Back</Link>
                </div>
                <form id="testform2" className="flex flex-col gap-4 py-4">
                    <div className="items-center gap-4">
                        <Input
                            id="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="rounded-full text-[14px]"
                            placeholder='Username'
                            autoComplete="username"
                        />
                    </div>
                    <div className="items-center gap-4">
                        <Input
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="rounded-full text-[14px]"
                            placeholder='Password'
                            type='password'
                            autoComplete="current-password"
                        />
                    </div>
                </form>
                <Button id="saveButton" type="submit" className="bg-[#0D9488] text-white rounded-full hover:bg-[#2DD4C5]" onClick={handleSaveChanges}>
                    <Link to={'/'}>Continue</Link>
                </Button>

            </div>

        </div>
    )
}

export default Sign_Up