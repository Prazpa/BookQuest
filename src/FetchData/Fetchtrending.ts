// //import axios for fetch
// import axios, { AxiosResponse } from "axios";

// //import Main url for connection
// import { BASE_URL } from "./BaseURL";

// interface Book {
//     cover_i: number;
//     title: string;
//     first_publish_year: number;
//     author_name: string[];
//     language: string[];
// }

// interface TrendingData {
//     works: Book[];
// }

// const fetchTrendingData = async (): Promise<Book[] | undefined> => {
//     try {
//         const response: AxiosResponse<TrendingData> = await axios.get<TrendingData>(`${BASE_URL}/trending/now.json`);
//         const trendingBooksData: TrendingData = response.data;
//         // console.log("Trending books data:", trendingBooksData.works);
//         return trendingBooksData.works;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return undefined;
//     }
// };

// export default fetchTrendingData;