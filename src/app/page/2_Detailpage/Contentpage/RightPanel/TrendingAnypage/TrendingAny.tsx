import Trending_btn from '../Trending/Trending_btn';
import Loader from '@/app/main/2_Loader/Loader';
import Cover_btn from '@/app/main/4_BookCover/Cover_btn';
import { BASE_URL } from '@/app/fetchData/BaseURL';
import { Book } from '../Trending/BookType'
import { useContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ColContext } from '@/app/settype/ColType';
import { ContentContext } from '@/app/settype/ContentType';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

function TrendingAny() {
    const { value } = useContext(ContentContext);
    const { darkMode } = useContext(ColContext);
    const [loading, setLoading] = useState<boolean>(true);
    const [response, setResponse] = useState<Book[]>([])

    useEffect(() => {
        const fetchTrendingData = async (): Promise<void> => {
            try {
                setLoading(true);
                const response: AxiosResponse = await axios.get(`${BASE_URL}/trending/${value}.json`);
                const trendingBooksData = response.data;
                setResponse(trendingBooksData.works)
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        if (value !== undefined) {
            fetchTrendingData();
        }
    }, [value]);

    if (value === undefined) {
        return (
            <div>404 no data</div>
        )
    }

    return (
        <div>
            <span className={`text-[24px] font-bold ${darkMode ? 'text-white' : 'text-black '}`}>
                Trending
            </span>
            <Trending_btn />

            <div className='flex items-center'>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="flex flex-wrap gap-3 w-[1000px]">
                        {response.map((item, index) => (
                            <Dialog key={index}>
                                <DialogTrigger>
                                    <div className={`w-[150px] h-[220px] rounded align-middle overflow-hidden ${darkMode ? 'bg-black hover:bg-[#d8aef6]' : 'bg-[#F7F7F7] hover:bg-[#F6E7AE]'}`}>
                                        <img
                                            src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
                                            alt={`Cover Image ${index + 1}`}
                                            className="cursor-pointer w-[100px] h-[150px] mx-[23px] my-[15px]"
                                        />
                                        <div className='text-[12px] text-center'>
                                            <span className="font-semibold">{item.title}</span>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="bg-white max-w-[1000px] h-[550px] overflow-y-scroll">
                                    <Cover_btn book={item} />
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TrendingAny