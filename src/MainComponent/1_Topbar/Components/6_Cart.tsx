import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from "@/components/ui/button"
import { BASE_URL } from '@/FetchData/BaseURL';

//useContext
import { ColContext} from '@/AppType/ColType';
import { SelectedContext } from '@/AppType/SelectedType';
import { UserContext } from '@/AppType/UserType';
import { useContext } from 'react';
import { Book } from '@/Page/2_Detailpage/Contentpage/RightPanel/BookType';


function Cart() {
  const { darkMode } = useContext(ColContext);
  const { pick, setPick } = useContext(SelectedContext);
  const { username } = useContext(UserContext);

  const handleRemoveBook = (indexToRemove: number) => {
    setPick((prevPick: any) => prevPick.filter((_: any, index: number) => index !== indexToRemove));
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
      <DialogContent className="w-[800px] max-h-[500px] bg-white overflow-y-scroll">
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
                    <div className='flex justify-between'>
                      <img
                        src={`https://covers.openlibrary.org/b/id/${book.cover_i}}-M.jpg`}
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
              </div>
              
            </div>
            
            <div>
              <Button className='bg-black text-white rounded' onClick={handleClear}>Clear all</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Cart;
