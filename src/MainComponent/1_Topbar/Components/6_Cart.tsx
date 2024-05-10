import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from "@/components/ui/button"
import { ColContext, PickContext, NameContext } from '@/App';
import { useContext } from 'react';
import { BASE_URL } from '@/FetchData/BaseURL';

function Cart() {
  const { darkMode } = useContext(ColContext);
  const { pick, setPick } = useContext(PickContext);
  const { username } = useContext(NameContext);

  const handleRemoveBook = (indexToRemove: number) => {
    setPick((prevPick: any) => prevPick.filter((_: any, index: any) => index !== indexToRemove));
  };

  const handleClear = () => {
    setPick([]);
  };

  const logopath = "/src/assets/bookmark.png";

  return (
    <Dialog>
      <DialogTrigger className='my-[20px]'>
        <div className="flex self-center p-0">
          <img src={`${logopath}`} alt={`bookmark_btn`} width={'20px'} height={'30px'} className={`bg-white`} />
          <div className={`
              text-sm absolute top-[15px] mx-[-9px] w-[20px]
              rounded-full
              ${darkMode ? 'hover:text-[#FF5A67] bg-white text-black' : 'text-white bg-black hover:text-[#2DD4C5]'}
              `
          }>{pick.length}</div>
          <span className={`text-[16px] font-medium ${darkMode ? 'hover:text-[#FF5A67]' : 'hover:text-[#2DD4C5]'}`}>Saved</span>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[800px] bg-white overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>{username} Lists</DialogTitle>
          <DialogDescription>
            <span>
              <span>That book what you picked</span>
              <ul>
                {pick.map((book: any, index: number) => (
                  <li key={index}>
                    <div className='flex justify-between'>
                      <img
                        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                        alt={`Cover Image ${index + 1}`}
                        className="m-1 cursor-pointer w-[150px] h-[200px]"
                      />
                      <span>{book.title}</span>
                      <Button onClick={() => handleRemoveBook(index)} className='bg-black text-white rounded-full'>Remove</Button>
                      <Button>
                        <a href={`${BASE_URL}${book.key}`} target="blank">shared</a>
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </span>
            <Button className='bg-black text-white rounded' onClick={handleClear}>Clear all</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Cart;
