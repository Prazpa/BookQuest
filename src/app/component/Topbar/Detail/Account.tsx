import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DarkmodeContext } from "@/app/type/DarkmodeType";
import { UserContext } from "@/app/type/UserType";
import { useContext, useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import bcrypt from "bcryptjs";

const SIGNIN_USER = gql`
  query SignInUser($username: String!) {
    user(where: { username: { _eq: $username } }) {
      username
      password
    }
  }
`;

const Account = () => {
  const { darkMode } = useContext(DarkmodeContext);
  const { username, setUsername } = useContext(UserContext);

  const [signInUser] = useLazyQuery(SIGNIN_USER);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUsername(userData.username);
      setValue("username", userData.username);
    }
  }, [setUsername, setValue]);

  const handleSaveChanges = async (formData: {
    username: string;
    password: string;
  }) => {
    try {
      const { data } = await signInUser({
        variables: {
          username: formData.username,
        },
      });

      if (data && data.user.length > 0) {
        const storedPasswordHash = data.user[0].password;

        // Compare the entered password with the stored hashed password
        const isPasswordValid = bcrypt.compareSync(
          formData.password,
          storedPasswordHash
        );

        if (isPasswordValid) {
          setUsername(formData.username);
          setIsDialogOpen(false);

          localStorage.setItem(
            "user",
            JSON.stringify({
              username: formData.username,
            })
          );
        } else {
          console.error("Invalid password");
        }
      } else {
        console.error("Invalid username or password");
      }
    } catch (error) {
      console.error("Error verifying user:", error);
    }
  };

  return (
    <div className="flex items-center">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          {username ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div
                  className={`text-[14px] font-bold ${
                    darkMode ? "hover:text-[#FF5A67]" : "hover:text-[#2DD4C5]"
                  }`}
                >
                  {username}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setUsername("");
                    localStorage.removeItem("user");
                  }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div
              className={`text-[14px] font-bold ${
                darkMode ? "hover:text-[#FF5A67]" : "hover:text-[#2DD4C5]"
              }`}
              onClick={() => setIsDialogOpen(true)}
            >
              Sign in
            </div>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-[24px]">Sign in</DialogTitle>
          </DialogHeader>
          <form
            id="testform2"
            className="flex flex-col gap-4 py-4"
            onSubmit={handleSubmit(handleSaveChanges)}
          >
            <div className="items-center gap-4">
              <Input
                {...register("username", { required: true })}
                className="rounded-full text-[14px]"
                placeholder="Username"
                autoComplete="username"
              />
              {errors.username && (
                <p className="text-red-500">Username is required</p>
              )}
            </div>
            <div className="items-center gap-4">
              <Input
                {...register("password", { required: true })}
                className="rounded-full text-[14px]"
                placeholder="Password"
                type="password"
                autoComplete="current-password"
              />
              {errors.password && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>
            <Button
              id="saveButton"
              type="submit"
              className="bg-[#0D9488] text-white rounded-full hover:bg-[#2DD4C5]"
            >
              Continue
            </Button>
            <hr className="border-2" />
            <Button
              id="CreateAccButton"
              type="button"
              className="bg-white text-black rounded-full hover:bg-[#2DD4C5]"
            >
              <Link to={`/Login`}>Create your BookQuest account</Link>
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Account;
