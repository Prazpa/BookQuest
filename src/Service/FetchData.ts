// import axios from "axios";
// import { useState, ChangeEvent, FormEvent } from "react";

// // State
// const [inputSearch, setInputSearch] = useState<string>('');
// const [isbn, setIsbn] = useState<string>('');
// const [slicedata, setSlicedata] = useState<any[]>([]);

// // Update Input
// export const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//   setInputSearch(e.target.value);
// };

// // Fetch Data
// export const fetchData = async () => {
//   try {
//     const response = await axios.get(
//       `https://openlibrary.org/search.json?q=${inputSearch}`
//     );

//     // Object search result
//     const result = response.data.docs;

//     // Cut data for faster
//     let slicedData = [];
//     if (result.length >= 20) {
//       slicedData = result.slice(0, 5);
//       console.log(slicedata);
//     } else {
//       slicedData = result;
//     }

//     // Get isbn key for generate IMG
//     let test = [];
//     for (let i = 0; i < slicedData.length; i++) {
//       const isbn_value = result[i].isbn ? result[i].isbn[0] : null;
//       if (isbn_value) {
//         console.log(isbn_value);
//         test.push(isbn_value);
//       }
//     }
    
//     setIsbn(test[0]); 
//     setSlicedata(slicedData);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// // Click for Fetch Data
// export const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   console.log(inputSearch);

//   try {
//     await fetchData();
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };
