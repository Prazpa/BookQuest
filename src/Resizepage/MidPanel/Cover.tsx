
import { useEffect, useState } from 'react';
import { BASE_URL } from "@/FetchData/Fetchdata"; 
import axios from 'axios';
import Loader from '@/Loader/Loader';
import "./scrollbar.css"

const Cover = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [response,setResponse] = useState<any[]>([])
     
    const fetchData = async () => {
        const fetchdataResponse = await axios.get(`${BASE_URL}/trending/now.json`);
        const trendingBooksData = fetchdataResponse.data;
        // console.log("test",trendingBooksData.works);
        setResponse(trendingBooksData.works)
        setLoading(false)
    } 
    
    useEffect(() => {
        fetchData();
    },[])

    const handleClick = (items: object) => {
        console.log("Clicked on book:", items);
    }; 

    return (

        <div className='flex items-center'>
            {loading ? (
                // Loader animation while data is being fetched
                <Loader/>
            ) : (
                // Display cover images
                <div className="scrollbar-container flex flex-wrap  h-[600px] overflow-y-auto">
                    {response.map((items, index) => (
                        <img
                            key={index}
                            src={`https://covers.openlibrary.org/b/id/${items.cover_i}-M.jpg`}
                            alt={`Cover Image ${index + 1}`}
                            width={200}
                            height={250}
                            className="m-1 cursor-pointer"
                            onClick={() => handleClick(items)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cover;
