import { useEffect, useState } from 'react';
import Loader from '@/Loader/Loader';
import "./scrollbar.css"
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';
import fetchTrendingData from '@/FetchData/Fetchtrending'; 
interface Book {
    cover_i: number;
    title: string;
    first_publish_year: number;
    author_name: string[];
    language: string[];
}

const Trending = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [response, setResponse] = useState<Book[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTrendingData();
                setResponse(data || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleClick = (item: Book) => {
        console.log("Clicked on book:", item);
    };

    return (
        <div className='flex items-center'>
            {loading ? (
                <Loader />
            ) : (
                <div className="scrollbar-container flex flex-wrap h-[600px] overflow-y-auto gap-2">
                    {response.map((item, index) => (
                        <div key={index} className="flex bg-[#F6E7AE] w-[800px] rounded gap-y-10">
                            <img
                                src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
                                alt={`Cover Image ${index + 1}`}
                                className="m-1 cursor-pointer w-[150px] h-[200px]"
                            />
                            <div className='p-[10px]'>
                                <h1><b>Title:</b> {item.title}</h1>
                                <h1><b>Years:</b> {item.first_publish_year}</h1>
                                <h1><b>Author:</b> {item.author_name}</h1>
                                <Badge className='bg-black text-white'>{item.language}</Badge>
                                <div>
                                    <Button variant="secondary" className='bg-[#0D9488] rounded' onClick={() => handleClick(item)}>View</Button>
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
