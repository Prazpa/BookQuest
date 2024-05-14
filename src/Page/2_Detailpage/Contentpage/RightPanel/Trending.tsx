import axios from "axios";
import Loader from '@/MainComponent/2_Loader/Loader';
import Cover_btn from '@/MainComponent/4_BookCover/Cover_btn';
import { BASE_URL } from "../../../../FetchData/BaseURL";
import { Book } from './BookType';
import { ColContext } from '@/AppType/ColType';
import { SelectedContext } from "@/AppType/SelectedType";
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
                const trendingBooksData = response.data;
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
                <div className="flex flex-wrap h-[520px] overflow-y-auto justify-center gap-5">
                    {response.map((item, index) => (
                        <Dialog key={index}>
                            <DialogTrigger>
                                <div className={`
                                    flex-col w-[200px] h-[320px] rounded-lg align-middle overflow-hidden
                                    ${darkMode ? 'bg-black hover:bg-[#d8aef6]' : 'bg-[#F7F7F7] hover:bg-[#F6E7AE]'}
                                `}>
                                    <img
                                        src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
                                        alt={`Cover Image ${index + 1}`}
                                        className="cursor-pointer w-[150px] h-[220px] mx-[23px] my-[15px]"
                                    />
                                    <div>
                                        <div className='text-[16px] text-center'>
                                            <span>{item.title}</span>
                                        </div>
                                        <div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="bg-white max-w-[1000px] h-[550px] overflow-y-scroll">
                                <div>
                                    <Cover_btn book={item}/> 
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Trending;
