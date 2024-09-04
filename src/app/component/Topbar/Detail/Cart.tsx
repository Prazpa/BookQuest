import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DarkmodeContext } from "@/app/type/DarkmodeType";
import { SelectedContext } from "@/app/type/SelectedType";
import { UserContext } from "@/app/type/UserType";
import { useContext, useEffect } from "react";
import { Book } from "@/app/component/RightPanel/Trending/BookType";
import Shared_btn from "@/app/component/BookCover/Shared_btn";
import logopath from "@/app/assets/bookmark.png";

function Cart() {
  const { darkMode } = useContext(DarkmodeContext);
  const { pick, setPick } = useContext(SelectedContext);
  const { username } = useContext(UserContext);

  useEffect(() => {
    const storedPick = localStorage.getItem("pick");
    if (storedPick) {
      setPick(JSON.parse(storedPick));
    }
  }, [setPick]);

  useEffect(() => {
    localStorage.setItem("pick", JSON.stringify(pick));
  }, [pick]);

  const handleRemoveBook = (indexToRemove: number) => {
    setPick((prevPick: any) =>
      prevPick.filter((_: any, index: number) => index !== indexToRemove)
    );
  };

  const handleClear = () => {
    setPick([]);
  };

  return (
    <Dialog>
      <DialogTrigger className="my-[20px]">
        <div className="flex self-center">
          <img
            src={logopath}
            alt="bookmark_btn"
            width={"20px"}
            height={"30px"}
            className={`bg-white`}
          />
          <div
            className={`absolute xs:top-[145px] xr:top-[155px]sm:top-[-10px] sm:left-[-20px] text-sm top-[15px] mx-[-9px] w-[20px] rounded-full ${
              darkMode
                ? "hover:text-[#FF5A67] bg-white text-black"
                : "text-white bg-black hover:text-[#2DD4C5]"
            }`}
          >
            {pick.length}
          </div>
          <span
            className={`text-[14px] font-bold ${
              darkMode ? "hover:text-[#FF5A67]" : "hover:text-[#2DD4C5]"
            }`}
          >
            Saved
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[800px] max-h-[500px] bg-white overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{username} Lists</DialogTitle>
          <DialogDescription>
            <div>
              <div>
                <span>That book what you picked</span>
              </div>
              <div>
                <ul>
                  {pick.map((book: Book, index: number) => (
                    <li key={index}>
                      <div className="flex justify-between items-center bg-slate-300 rounded-lg px-[10px]">
                        <div className="flex">
                          <img
                            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                            alt={`Cover Image ${index + 1}`}
                            className="m-1 cursor-pointer w-[70px] h-[100px]"
                          />
                          <span className="flex items-center">
                            {book.title}
                          </span>
                        </div>

                        <div className="flex items-center">
                          <Button
                            onClick={() => handleRemoveBook(index)}
                            className={`rounded-full text-[14px] bg-[#940D18] text-white hover:bg-[#d8aef6] hover:text-black`}
                          >
                            Remove
                          </Button>

                          <Shared_btn book={book} />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="py-2 flex justify-center">
              <Button
                className="bg-[#940D18] hover:bg-[#FF5A67] text-white rounded-full"
                onClick={handleClear}
              >
                Clear all
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Cart;
