//Component
import { BASE_URL } from '@/FetchData/BaseURL';
import axios from "axios";

//useContext
import { useState, useContext } from 'react';
import { PickContext } from "@/AppType/PickType";

//shadcn/ui component
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Button } from "@/components/ui/button";


interface Book {
    cover_i: number;
    title: string;
    first_publish_year: number;
    author_name: string[];
    language: string[];
    key: any;
}

const Cover_btn = ({ book }: { book: Book }) => {
    const { pick, setPick } = useContext(PickContext);
    const [responseData, setResponseData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchDetailData = async () => {
        setLoading(true); // Set loading to true while fetching data
        try {
            const url = `${BASE_URL}${book.key}.json`;
            const response = await axios.get(url);
            const item = response.data;
            console.log(item);
            
            setResponseData([item]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Set loading to false after fetching data
        }
    };

    const handleViewClick = () => {
        fetchDetailData();
    };

    const handlePick = (item: any) => {
        if (!pick.includes(item)) {
            setPick([...pick, item]);
        
            
        }
    };

    return (
        <div className='flex gap-x-3 p-[10px]'>
            <Dialog>
                <DialogTrigger
                    className="bg-[white] rounded-full h-[50px] w-[80px] font-medium hover:bg-accent hover:text-accent-foreground"
                    onClick={handleViewClick}
                >
                    <span className='text-[16px] text-bold'>View</span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[1200px] h-[500px] bg-white overflow-y-scroll">
                    <DialogHeader>
                        <DialogTitle>Details</DialogTitle>
                        <DialogDescription>
                            {loading && <div>Loading...</div>}
                            {!loading && responseData.map((item, index) => (
                                <div key={index} className='flex '>
                                    <img
                                        src={`https://covers.openlibrary.org/b/id/${item.covers || item.covers[0]}-M.jpg`}
                                        alt={`Cover Image ${index + 1}`}
                                        className="cursor-pointer"
                                    />
                                    <div>
                                        <h1><b>Title:</b> {item.title}</h1>
                                        <h1><b>Years:</b> {item.first_publish_year}</h1>
                                        <h1><b>Author:</b> {item.author_name}</h1>
                                        <h1>{item.key}</h1>
                                        <div>
                                            {item.description && <h1><b>Description:</b> {item.description.value}</h1>}
                                        </div>
                                    </div>
                                    

                                </div>
                            ))}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <Button className="bg-[white]  rounded-full text-[16px] text-normal" onClick={() => handlePick(book)}>Pick</Button>
            
            <Dialog>
                <DialogTrigger
                    className="bg-[white] rounded-full h-[50px] w-[80px] font-medium hover:bg-accent hover:text-accent-foreground"
                    onClick={handleViewClick}
                >
                    <span className='text-[16px]'>Shared</span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white overflow-y-scroll">
                    <DialogHeader>
                        <DialogTitle>Shared</DialogTitle>
                        <DialogDescription>
                            {loading && <div>Loading...</div>}
                            {!loading && responseData.map((item, index) => (
                                <div key={index}>
                                    <a href={`${BASE_URL}${item.key}`} target="blank">{BASE_URL}{item.key}</a>
                                </div>
                            ))}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
             </Dialog>
        </div>
    );
}

export default Cover_btn;
