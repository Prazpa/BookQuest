// รอเขียนใหม่ สำหรับ fetch for cover.tsx

// import axios from "axios";
// import { BASE_URL } from "./BaseURL";

// //import AppContext for receive data
// import { AppContext } from "./../App";
// import { useContext } from "react";

// //set state for useContext to send another file
// const { data } = useContext(AppContext);

// const fetchSearchData = async (value: any) => {
//     try {
//         const response = await axios.get(`${BASE_URL}/search.json?q=${data}`);
//         const searchingBooksData = response.data;
//         console.log(`Searching books data: ${data}`, searchingBooksData.docs);
//         return searchingBooksData.docs;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return undefined;
//     }
// };

// export default fetchSearchData;