import { BASE_URL } from '@/FetchData/BaseURL';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import axios from 'axios';
import { useEffect, useState } from 'react';



function BookCover({ value }: any) {
    const [responseData, setResponseData] = useState<any[]>([]);

    //fetchdata
    useEffect(() => {
        const fetchDetailData = async (): Promise<void> => {
            try {
                const response_2 = await axios.get(`${BASE_URL}${value}.json`);
                console.log(value);
                const newResponse = response_2.data;
                setResponseData(Array.isArray(newResponse) ? newResponse : []);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            } 
        };
        fetchDetailData();
    }, [value]); 

    return (
        <div>
            <Dialog>
                <DialogTrigger >
                    <div>view</div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[1200px] h-[500px] bg-white ">
                    <DialogHeader>
                        <DialogTitle>test</DialogTitle>
                    </DialogHeader>    
                        <DialogDescription>
                            <div>
                                {responseData.map((item:any, index:any ) => (
                                    <div key={index} className="flex bg-[#F6E7AE] w-[800px] rounded gap-y-10">
                                        <h1>{item.title}</h1>
                                    </div>
                                ))}
                            </div>
                        </DialogDescription>
                    
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default BookCover;
