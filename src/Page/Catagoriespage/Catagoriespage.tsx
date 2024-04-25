import { BASE_URL } from '@/FetchData/BaseURL';
import Footer from '@/Footer/Footer'
import Loader from '@/Loader/Loader';
import LeftPanel from '@/Resizepage/LeftPanel/LeftPanel'
import Topbar from '@/Topbar/Topbar'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useEffect, useState, createContext} from 'react';

export const AppContext = createContext<any>(null);

interface Book {
    cover_id: number;
    title: string;
    first_publish_year: number;
    author_name: string[];
    language: string;
}

export default function Catagoriespage() {
    
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [books, setBooks] = useState<Book[]>([]);

    const fetchData = async (value: string) => {
        try {
            let fetchdataResponse;
            if (value.substring(0, 12) === "search.json") {
                fetchdataResponse = await axios.get(`${BASE_URL}/${value}`);
            } else {
                fetchdataResponse = await axios.get(`${BASE_URL}/subjects/${value}.json`);
            }
            const realResponse = fetchdataResponse.data.works;
            setBooks(realResponse);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false); // Update loading state in case of error
        }
    };

    useEffect(() => {
        if (selectedCategory) {
            fetchData(selectedCategory);
            setSelectedCategory(selectedCategory);
        }
    }, [selectedCategory]);

    const handleClick = (item: Book) => {
        console.log("Clicked on book:", item);
    };
    
    const [coverId, setCoverId] = useState<string>("");
    return (
        <AppContext.Provider value={{ coverId, setCoverId }}>
            <Topbar />
            <div>
                <LeftPanel />
                <div className='flex items-center'>
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className="scrollbar-container flex flex-wrap h-[600px] overflow-y-auto gap-2">
                            {books.map((item, index) => (
                                <div key={index} className="flex bg-[#F6E7AE] w-[800px] rounded gap-y-10">
                                    <img
                                        src={`https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`}
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
            </div>
            
            
            <Footer />
        </AppContext.Provider>
    )
}
