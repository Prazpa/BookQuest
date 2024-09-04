import { UserContext } from '@/app/type/UserType';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { gql, useMutation } from '@apollo/client';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import bcrypt from 'bcryptjs';

const SIGNUP_USER = gql`
    mutation InsertUser($password: String!, $username: String!) {
        insert_user(objects: {password: $password, username: $username}) {
            affected_rows
            returning {
                password
                username
            }
        }
    }
`;

interface FormData {
    username: string;
    password: string;
}

function Sign_Up() {
    const { setUsername } = useContext(UserContext);
    const [signupUser] = useMutation(SIGNUP_USER);
    const [message, setMessage] = useState("");

    // Initialize react-hook-form with FormData type
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    // Handle form submission with SubmitHandler
    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            // Hash the password before sending it to the server
            const hashedPassword = bcrypt.hashSync(data.password, 10);
    
            const { data: result } = await signupUser({
                variables: {
                    username: data.username,
                    password: hashedPassword
                }
            });
    
            if (result.insert_user.affected_rows > 0) {
                setUsername(data.username);
                setMessage("User registered successfully!");
            } else {
                setMessage("Failed to register user.");
            }
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
                <form id="testform2" className="flex flex-col gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="items-center gap-4">
                        <Input
                            {...register('username', { required: "Username is required" })}
                            className="rounded-full text-[14px]"
                            placeholder='Username'
                            autoComplete="username"
                        />
                        {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                    </div>
                    <div className="items-center gap-4">
                        <Input
                            {...register('password', { required: "Password is required" })}
                            className="rounded-full text-[14px]"
                            placeholder='Password'
                            type='password'
                            autoComplete="current-password"
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                    <Button id="saveButton" type="submit" className="bg-[#0D9488] text-white rounded-full hover:bg-[#2DD4C5]">
                        Continue
                    </Button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default Sign_Up;
