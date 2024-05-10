// Cover_btn component
import { useState, useContext } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Button } from "@/components/ui/button";
import axios from "axios";
import { BASE_URL } from '@/FetchData/BaseURL';
import { PickContext } from "@/App";

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
        <div>
            <Dialog>
                <DialogTrigger
                    className="bg-white rounded-full h-[50px] w-[80px] text-semibold"
                    onClick={handleViewClick}
                >
                    <span>View</span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[1200px] h-[500px] bg-white overflow-y-scroll">
                    <DialogHeader>
                        <DialogTitle>Details</DialogTitle>
                        <DialogDescription>
                            {loading && <div>Loading...</div>}
                            {!loading && responseData.map((item, index) => (
                                <div key={index}>
                                    <img
                                        src={`https://covers.openlibrary.org/b/id/${item.cover || item.cover_id }-M.jpg`}
                                        alt={`Cover Image ${index + 1}`}
                                        className="m-1 cursor-pointer w-[150px] h-[200px]"
                                    />
                                    <div>
                                        <h1><b>Title:</b> {item.title}</h1>
                                        <h1><b>Years:</b> {item.first_publish_year}</h1>
                                        <h1><b>Author:</b> {item.author_name}</h1>
                                        <h1>{item.key}</h1>
                                    </div>
                                    <div>
                                        {item.description && <h1><b>Description:</b> {item.description.value}</h1>}
                                    </div>

                                    <Button
                                        className="bg-white rounded-full"
                                        onClick={() => handlePick(item)}
                                    >
                                        Pick
                                    </Button>
                                </div>
                            ))}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <Button className="bg-white rounded-full" onClick={() => handlePick(book)}>Pick</Button>
            
            <Dialog>
                <DialogTrigger
                    className="bg-white rounded-full h-[50px] w-[80px] text-bold"
                    onClick={handleViewClick}
                >
                    <span>Shared</span>
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
