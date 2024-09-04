import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DarkmodeContext } from "@/app/type/DarkmodeType";
import { UserContext } from "@/app/type/UserType";
import { useContext, useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const SIGNIN_USER = gql`
  query SignInUser($username: String!, $password: String!) {
    user(
      where: { username: { _eq: $username }, password: { _eq: $password } }
    ) {
      username
    }
  }
`;

const Account = () => {
  const { darkMode } = useContext(DarkmodeContext);
  const { username, setUsername } = useContext(UserContext);

  const [signInUser] = useLazyQuery(SIGNIN_USER);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUsername(userData.username);
    }
  }, [setUsername]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const { data } = await signInUser({
        variables: {
          username: formData.username,
          password: formData.password,
        },
      });

      console.log("SignIn response data:", data);

      if (data && data.user.length > 0) {
        setUsername(formData.username);
        console.log("User signed in:", data.user[0].username);
        setIsDialogOpen(false);

        localStorage.setItem(
          "user",
          JSON.stringify({
            username: formData.username,
          })
        );
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
            <div
              className={`text-[14px] font-bold ${
                darkMode ? "hover:text-[#FF5A67]" : "hover:text-[#2DD4C5]"
              }`}
            >
              {username}
            </div>
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
          <form id="testform2" className="flex flex-col gap-4 py-4">
            <div className="items-center gap-4">
              <Input
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                className="rounded-full text-[14px]"
                placeholder="Username"
                autoComplete="username"
              />
            </div>
            <div className="items-center gap-4">
              <Input
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className="rounded-full text-[14px]"
                placeholder="Password"
                type="password"
                autoComplete="current-password"
              />
            </div>
            <Button
              id="saveButton"
              type="button"
              className="bg-[#0D9488] text-white rounded-full hover:bg-[#2DD4C5]"
              onClick={handleSaveChanges}
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
