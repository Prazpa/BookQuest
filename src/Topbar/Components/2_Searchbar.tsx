import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import axios from 'axios';

const Searchbar = () => {
  
  // State
  const [inputSearch, setInputSearch] = useState('');
  const [slicedata, setSlicedata] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  // Update Input
  const handleInputChange = (e) => {
    setInputSearch(e.target.value);
  };

  // Fetch Data
  const fetchData = async () => {
    setLoading(true); // Set loading to true before making the request
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${inputSearch}`
      );

      // Object search result
      const result = response.data.docs;
      console.log(result);

      // Cut data for faster
      let slicedData = [];
      if (result.length >= 20) {
        slicedData = result.slice(0, 20);
        console.log(slicedata);
      } else {
        slicedData = result;
      }

      setSlicedata(slicedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false after the request is completed
    }
  };


  // Click for Fetch Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputSearch);

    try {
      await fetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <form className="w-[551px] h-[50px] left-[250px] absolute" onSubmit={handleSubmit}>
        
        {/* Input bar */}
        <Input
          className="w-[551px] h-[50px] left-0 top-0 absolute rounded-[30px] border-2 border-zinc-300"
          type="text"
          placeholder="Search BookQuest"
          value={inputSearch}
          onChange={handleInputChange}
        />

        {/* Result popup */}
        <Dialog>
          <DialogTrigger >
            <button className='w-10 h-10 absolute bg-teal-600 rounded-full left-[500px] top-[1px]' type='submit'>
              <svg className="my-[5px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="40" viewBox="0 0 50 50" fill="white">
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
              </svg>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-[1200px] h-[500px] bg-white ">
            <DialogHeader>
              <DialogTitle>Research</DialogTitle>
              <DialogDescription>
                This is result that I can find it.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-wrap justify-center overflow-scroll">
              {loading ? ( // Display loading indicator if loading is true
                <div>Loading...</div>
              ) : (
                slicedata.map((book, index) => (
                  <div key={index} className="m-4">
                    {book.isbn &&
                      <img
                        src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-L.jpg`}
                        alt={`cover_${index}`}
                        width={200}
                        height={300}
                      />
                    }
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
