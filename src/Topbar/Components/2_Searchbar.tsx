import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import axios from 'axios';

// Define a Book type to specify the structure of a book object
interface Book {
  isbn?: string[];
  // Add more properties if needed
}

const Searchbar: React.FC = () => {
  // State
  const [inputSearch, setInputSearch] = useState<string>('');
  const [slicedData, setSlicedata] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Update Input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  // Fetch Data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${inputSearch}`);
      const result = response.data.docs;
      const slicedData = result.slice(0, 20);
      setSlicedata(slicedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Click for Fetch Data
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <form id="testform" className="w-[551px] h-[50px] left-[250px] absolute" onSubmit={handleSubmit}>
        <Input
          className="w-[551px] h-[50px] left-0 top-0 absolute rounded-[30px] border-2 border-zinc-300"
          type="text"
          placeholder="Search BookQuest"
          value={inputSearch}
          onChange={handleInputChange}
        />
        <Dialog>
          <DialogTrigger>
            <button className="w-10 h-10 absolute bg-teal-600 rounded-full left-[500px] top-[1px]" type="submit">
              <svg className="my-[5px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="40" viewBox="0 0 50 50" fill="white">
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
              </svg>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-[1200px] h-[500px] bg-white ">
            <DialogHeader>
              <DialogTitle>Research</DialogTitle>
              <DialogDescription>
                This is the result that I can find.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-wrap justify-center overflow-y-scroll">
              {loading ? (
                <div>Loading...</div>
              ) : (
                slicedData.map((book, index) => (
                  <div key={index} className="m-4">
                    {book.isbn && (
                      <img
                        src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-L.jpg`}
                        alt={`cover_${index}`}
                        width={200}
                        height={300}
                      />
                    )}
                  </div>
                ))
              )}
            </div>
          </DialogContent>
        </Dialog>
      </form>
    </div>
  );
};

export default Searchbar;
