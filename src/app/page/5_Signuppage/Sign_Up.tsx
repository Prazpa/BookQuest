import { UserContext } from '@/app/settype/UserType';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { gql, useMutation } from '@apollo/client';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const SIGNUP_USER = gql`
    mutation InsertUser($password: String, $user: String) {
        insert_LogInData(objects: {password: $password, user: $user}) {
            affected_rows
            returning {
                password
                user
            }
        }
    }
`;

function Sign_Up() {
    const { setUsername } = useContext(UserContext);
    const [signupUser] = useMutation(SIGNUP_USER);
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const [message, setMessage] = useState("");

    const handleInputChange = (e: any) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSaveChanges = async () => {
        try {
            if (!formData.username || !formData.password) {
                alert("Please fill in both username and password fields.");
                return;
            }

            const { data } = await signupUser({
                variables: {
                    user: formData.username, 
                    password: formData.password
                }
            });

            if (data.insert_LogInData.affected_rows > 0) {
                setUsername(formData.username);
                setMessage("User registered successfully!");
            } else {
                setMessage("Failed to register user.");
            }

            console.log(formData.username);
            console.log(formData.password);
        } catch (error) {
            console.error("Error verifying user:", error);
            setMessage("Error registering user.");
        }
    };

    return (
        <div className={`flex justify-center items-center h-screen `}>
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
                {message && <p>{message}</p>}
                <Button id="saveButton" type="submit" className="bg-[#0D9488] text-white rounded-full hover:bg-[#2DD4C5]" onClick={handleSaveChanges}>
                    Continue
                </Button>
            </div>
        </div>
    );
}

export default Sign_Up;
