//React component and State/axios 
import React, { useState } from 'react';
import axios from 'axios';

//import Detail Component
import Loader from '@/Loader/Loader';

//import shadcn/ui component
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

//import for Darkmode
import { ColContext } from "@/App";
import { useContext } from "react";

//import for Router
import { Link } from 'react-router-dom';

const Searchbar = () => {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);

  //set state for input to check result of typing
  const [inputSearch, setInputSearch] = useState<string>('');

  //set state for store value from fetching data
  //เหลือ any ค่อยมาแก้หลังจากทำหน้า searchpage เสร็จ
  const [books, setBooks] = useState<any[]>([]);

  //set state for loading animation
  const [loading, setLoading] = useState<boolean>(false);

  //see result after click at serach-btn
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  //fetchData
  const fetchData = async () => {
    //display loding animation
    setLoading(true);

    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${inputSearch}`);
      const booksData = response.data.docs;
      console.log(booksData);
      setBooks(booksData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      //stop loding animation
      setLoading(false);
    }
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClick = (book: string) => {
    console.log("Clicked on book:", book);
  };

  return (
    <div className="flex">
      <form id="testform" onSubmit={handleSubmit}>
        <Input
          className="border-2 border-zinc-300 text-normal w-[500px] h-[50px] rounded-[30px] text-[16px]"
          type="text"
          placeholder="Search BookQuest"
          value={inputSearch}
          onChange={handleInputChange}
        />
        <Dialog open={false}>
          <Link to={`/searchpage/${inputSearch}`}>
            <div className="w-10 h-10 rounded-full absolute top-[10px] left-[740px]">
              <div className={`Ellipse6 w-10 h-10 left-0 top-0 absolute rounded-full ${darkMode ? 'bg-[#940d18]': 'bg-[#0D9488]'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="40" viewBox="0 0 50 50" fill="white">
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>
              </div>
            </div>
          </Link>


          {/* เปลี่ยน component ตัด dialog ออก */}
          <DialogContent className="max-w-[1200px] h-[500px] bg-white ">
            <DialogHeader>
              <DialogTitle>Research</DialogTitle>
              <DialogDescription>
                This is the result that I can find.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-wrap justify-center overflow-y-scroll">
              {loading ? (
                <Loader />
              ) : (
                <div className="scrollbar-container flex flex-wrap h-[600px] overflow-y-auto gap-2">
                  {books.map((item, index) => (
                    <div key={index} className="flex bg-[#F6E7AE] w-[800px] rounded gap-y-10">
                      <img
                        src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
                        alt={`Cover Image ${index + 1}`}
                        className="m-1 cursor-pointer w-[150px] h-[200px]"
                      />
                      <div className='p-[10px]'>
                        <h1><b>Title:</b> {item.title}</h1>
                        <h1><b>Years:</b> {item.first_publish_year}</h1>
                        <h1><b>Author:</b> {item.author_name}</h1>
                        <Badge className='bg-black text-white'>{item.language}</Badge>
                        <div>
                          <Button variant="secondary" className='bg-[#0D9488] rounded' onClick={() => handleClick(item)}>View</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </form>

    </div>
  );
};

export default Searchbar;
