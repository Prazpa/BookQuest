//Component
import { BASE_URL } from '@/FetchData/BaseURL';
import axios from "axios";
import { Book } from '../../Page/2_Detailpage/Contentpage/RightPanel/BookType';
import { BookKeyType } from './BookKeyType';

//useContext
import { useState, useContext, useEffect } from 'react';
import { SelectedContext } from "@/AppType/SelectedType";

//shadcn/ui component
import { Button } from "@/components/ui/button";
import Loader from '../2_Loader/Loader';

const Cover_btn = ({ book }: { book: Book }) => {
    //useContext
    const { pick, setPick } = useContext(SelectedContext);

    //state
    const [responseData, setResponseData] = useState<BookKeyType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchDetailData = async () => {
        setLoading(true); // Set loading to true while fetching data
        try {
            const url = `${BASE_URL}${book.key}.json`;
            const response = await axios.get(url);
            const item = response.data;
            // console.log(item);
            setResponseData([item]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Set loading to false after fetching data
        }
    };

    useEffect(() => {
        fetchDetailData();
    }, [])

    const handlePick = (item: any) => {
        if (!pick.includes(item)) {
            setPick([...pick, item]);
            console.log(item.title);
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
                        className="cursor-pointer w-[250px] h-[400px]"
                        
                    />
                    <div className='px-[20px] w-[650px] text-[16px]'>
                        <h1><b>Title:</b> {book.title}</h1>
                        <h1><b>Years:</b> {book.first_publish_year}</h1>
                        <h1><b>Author:</b> {book.author_name}</h1>

                        <div>
                            {item.description ? (
                                <h1><b>Description:</b> {item.description.value}</h1>
                            ) : (
                                <h1><b>Description:</b> -</h1>
                            )}

                            {/* <h1><b>Subject:</b>{item.subjects.join(", ")}</h1> */}
                        </div>  

                        <Button className="bg-[white]  rounded-full text-[16px] text-normal" onClick={() => handlePick(book)}>Pick</Button>
                        
                        {/* shared-btn */}
                    </div>
                </div>
            ))}


        </div>
    );
}

export default Cover_btn;
