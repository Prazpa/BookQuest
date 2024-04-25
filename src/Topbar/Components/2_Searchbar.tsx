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
import { Button } from '@/components/ui/button';

// Define a Book type to specify the structure of a book object
interface Book {
  isbn?: string[];
  // Add more properties if needed
}

const Searchbar = () => {
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

  const reponsive = `lg:w-[400px] md:w-[300px] sm:w-[250px]`
  const reponsive_btn = ``
  const layout = `w-[700px] h-[50px] rounded-[30px]`

  return (
    <div className='flex'>
      <form id="testform" onSubmit={handleSubmit}>
        <Input
          className={`border-2 border-zinc-300 ${layout} ${reponsive}`}
          type="text"
          placeholder="Search BookQuest"
          value={inputSearch}
          onChange={handleInputChange}
        />
      </form>
        <Dialog>
          <DialogTrigger>
            <Button className={`w-10 h-10 bg-teal-600 rounded-full ${reponsive_btn}`} type="submit">
              find
            </Button>
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
      
    </div>
  );
};

export default Searchbar;
