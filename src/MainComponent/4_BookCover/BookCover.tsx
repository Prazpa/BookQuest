import { BASE_URL } from '@/FetchData/BaseURL';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from '@/components/ui/dialog';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../2_Loader/Loader';


function BookCover({ value }: any) {

    const [loading, setLoading] = useState<boolean>(true);
    const [response, setResponse] = useState<any>([])

    //fetchdata
    useEffect(() => {
        const fetchDetailData = async (): Promise<any[] | undefined> => {
            try {
                const response = await axios.get(`${BASE_URL}${value}.json`);
                setResponse(response.data)
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                return undefined;
            } finally {
                setLoading(false);
            }
        };
        fetchDetailData();
    }, []);
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <Button variant={"link"}>view</Button>
                </DialogTrigger>


                <DialogContent className="sm:max-w-[1200px] h-[500px] bg-white ">
                    <DialogHeader>
                        test
                    </DialogHeader>

                    <div>
                        <div>
                            {Array.isArray(response) && response.map((item, index) => (
                                <div key={index} className="flex bg-[#F6E7AE] w-[800px] rounded gap-y-10">
                                    <h1>{item.title}</h1>
                                </div>
                            ))}
                        </div>
                    </div>

                </DialogContent>
            </Dialog>
        </div>
    )
}

export default BookCover