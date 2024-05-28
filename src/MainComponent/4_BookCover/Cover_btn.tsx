import { BASE_URL } from '@/FetchData/BaseURL';
import axios from "axios";
import { Book } from '../../Page/2_Detailpage/Contentpage/RightPanel/Trending/BookType';
import { BookKeyType } from './BookKeyType';
import { useState, useContext, useEffect } from 'react';
import { SelectedContext } from "@/AppType/SelectedType";
import { Button } from "@/components/ui/button";
import Loader from '../2_Loader/Loader';
import { ColContext } from '@/AppType/ColType';
import Shared_btn from './Shared_btn';

const Cover_btn = ({ book }: { book: Book }) => {
    const { darkMode } = useContext(ColContext);
    const { pick, setPick } = useContext(SelectedContext);
    const [responseData, setResponseData] = useState<BookKeyType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const [picked, setPicked] = useState(false);

    const fetchDetailData = async () => {
        setLoading(true);
        try {
            const url = `${BASE_URL}${book.key}.json`;
            const response = await axios.get(url);
            const item = response.data;
            setResponseData([item]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDetailData();
    }, [])

    const handlePick = () => {
        if (Array.isArray(pick) && !pick.includes(book)) {
            setPick([...pick, book]);
            setPicked(true); 
        }
    };

    return (
        <div className='flex gap-x-3 p-[10px]'>
            {loading && <Loader />}
            {!loading && responseData.map((item, index) => (
                <div key={index} className='flex flex-wrap'>
                    <img
                        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                        alt={`Cover Image ${index + 1}`}
                        className="cursor-pointer w-[250px] h-[350px]"
                    />
                    <div className='px-[20px] w-[650px] text-[14px]'>
                        <h1><b>Title:</b> {book.title}</h1>
                        <h1><b>Years:</b> {book.first_publish_year}</h1>
                        <h1><b>Author:</b> {book.author_name}</h1>

                        <div>
                            {item.description ? (
                                <h1><b>Description:</b>{item.description.value}</h1>
                            ) : (
                                <h1><b>Description:</b>{item.description}</h1>
                            )}

                        </div>
                        
                        <div className='flex'>
                            <Button
                                className={`rounded-full text-[14px] ${darkMode ? 'bg-[#940D18] text-white hover:bg-[#d8aef6] hover:text-black' : 'bg-[#0D9488] text-white hover:bg-[#F6E7AE] hover:text-black'}`}
                                onClick={handlePick}
                            >
                                {picked ? "Picked" : "Pick"}
                            </Button>

                            <Shared_btn book={book} />
                        </div>
                        
                    </div>
                </div>
            ))}


        </div>
    );
}

export default Cover_btn;
