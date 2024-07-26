import axios from "axios";
import Loader from '@/app/main/2_Loader/Loader';
import Cover_btn from '@/app/main/4_BookCover/Cover_btn';
import { BASE_URL } from "@/app/fetchData/BaseURL";
import { Book } from './BookType';
import { ColContext } from '@/app/settype/ColType';
import { SelectedContext } from "@/app/settype/SelectedType";
import { useEffect, useState, useContext } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Trending = () => {
    const { darkMode } = useContext(ColContext);
    const { setKeyBook } = useContext(SelectedContext);

    const [loading, setLoading] = useState<boolean>(true);
    const [response, setResponse] = useState<Book[]>([])

    useEffect(() => {
        const fetchTrendingData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/trending/now.json`);
                if (response.status === 200) {
                    const trendingBooksData = response.data;
                    setResponse(trendingBooksData.works)
                } else {
                    console.error('Unexpected response status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
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
        <div className='flex items-center '>
            {loading ? (
                <Loader />
            ) : (
                <div className="flex flex-wrap gap-2 w-full xr:flex xr:justify-center md:justify-start">
                    {response.map((item, index) => (
                        <Dialog key={index}>
                            <DialogTrigger>
                                {item.cover_i ? ( 
                                    <div className={`w-[150px] h-[220px] rounded align-middle overflow-hidden ${darkMode ? 'bg-black hover:bg-[#d8aef6]' : 'bg-[#F7F7F7] hover:bg-[#F6E7AE]'}`}>
                                        <img
                                            src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
                                            alt={`Cover Image ${index + 1}`}
                                            className="cursor-pointer w-[100px] h-[150px] mx-[23px] my-[15px]"
                                        />
                                        <div className='text-[12px] text-center'>
                                            <span className={`font-semibold ${darkMode ? 'text-white' : 'text-black '}`}>{item.title}</span>
                                        </div>
                                    </div>
                                ) : null}
                            </DialogTrigger>
                            <DialogContent className="bg-white max-w-[1000px] h-[500px] overflow-y-auto flex flex-wrap">
                                {item.cover_i && <Cover_btn book={item}/>} 
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Trending;
