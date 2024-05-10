import { useEffect, useState, useContext } from 'react';
import axios from "axios";
import { BASE_URL } from "../../../../FetchData/BaseURL";
import { ColContext, KeyContext } from "@/App";
import Loader from '@/MainComponent/2_Loader/Loader';
import Cover_btn from '@/MainComponent/4_BookCover/Cover_btn';
interface Book {
    cover_i: number;
    title: string;
    first_publish_year: number;
    author_name: string[];
    language: string[];
    key: any;
}

interface TrendingData {
    works: Book[];
}

const Trending = () => {
    const { darkMode } = useContext(ColContext);
    const { setKeyBook } = useContext(KeyContext);
    const [loading, setLoading] = useState<boolean>(true);
    const [response, setResponse] = useState<Book[]>([])

    useEffect(() => {
        const fetchTrendingData = async (): Promise<Book[] | undefined> => {
            try {
                const response = await axios.get<TrendingData>(`${BASE_URL}/trending/now.json`);
                const trendingBooksData: TrendingData = response.data;
                setResponse(trendingBooksData.works)
            } catch (error) {
                console.error('Error fetching data:', error);
                return undefined;
            } finally {
                setLoading(false);
            }
        };
        fetchTrendingData();
    }, []);

    useEffect(() => {
        const keys = response.map(item => item.key);
        setKeyBook(keys);
    }, [response]);

    return (
        <div className='flex items-center'>
            {loading ? (
                <Loader />
            ) : (
                <div className="scrollbar-container flex flex-wrap h-[600px] overflow-y-auto gap-2">
                    {response.map((item, index) => (
                        <div key={index} className="flex bg-[#F6E7AE] w-full rounded gap-y-10">
                            <img
                                src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
                                alt={`Cover Image ${index + 1}`}
                                className="m-1 cursor-pointer w-[150px] h-[200px]"
                            />

                            <div>
                                <div className='p-[10px] text-[16px]'>
                                    <h1><b>Title:</b> {item.title}</h1>
                                    <h1><b>Years:</b> {item.first_publish_year}</h1>
                                    <h1><b>Author:</b> {item.author_name}</h1>
                                </div>

                                <div>
                                    <Cover_btn book={item} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Trending;

