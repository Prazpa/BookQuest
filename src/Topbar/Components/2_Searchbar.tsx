import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
// import axios from 'axios';

// interface BookData {
//   isbn: string;
//   coverUrl: string | null;
// }

const Searchbar = () => {
  const [inputSearch, setInputSearch] = useState('');
  
  // const [isbnAndCoverData, setIsbnAndCoverData] = useState<BookData[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  useEffect(() => {
    console.log(inputSearch);
  },[inputSearch])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get<{ docs: { isbn: string; cover_i?: number }[] }>(
  //         `https://openlibrary.org/search.json?title=${inputSearch}&fields=*,availability&limit=20`
  //       );
  //       const result = response.data;
  //       console.log(result);
        

  //       let slicedDocs;
  //       if (result.docs.length > 20) {
  //         slicedDocs = result.docs.slice(0, 20); // Slice the first 20 results
  //       } else {
  //         slicedDocs = result.docs;
  //       }

  //       const data: BookData[] = slicedDocs.map(doc => ({
  //         isbn: doc.isbn,
  //         coverUrl: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg` : null
  //       }));

  //       setIsbnAndCoverData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   if (inputSearch.trim() !== '') {
  //     fetchData();
  //   }
  // }, [inputSearch]);

  return (
    <div className="w-[551px] h-[50px] left-[250px] absolute">
      <Input
        className="w-[551px] h-[50px] left-0 top-0 absolute rounded-[30px] border-2 border-zinc-300"
        type="text"
        placeholder="Search a book that you want"
        value={inputSearch}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Searchbar;
