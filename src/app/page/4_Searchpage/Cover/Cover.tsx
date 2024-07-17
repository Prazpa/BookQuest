import axios from "axios";
import { BASE_URL } from "@/app/fetchData/BaseURL";
import Loader from "@/app/main/2_Loader/Loader";
import { ColContext } from '@/app/settype/ColType';
import { ContentContext } from "@/app/settype/ContentType";
import { useContext, useEffect, useState } from "react";
import { Doc } from "./SearchBook";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Cover_btn from "@/app/main/4_BookCover/Cover_btn";
import { Link } from "react-router-dom";

function Cover() {

    const { data } = useContext(ContentContext);
    const { darkMode } = useContext(ColContext);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ response, setResponse ] = useState<Doc[]>([]);

    const fetchSearchData = async (): Promise<void> => {
        try {
            const response = await axios.get(`${BASE_URL}/search.json?q=${data}`);
            setResponse(response.data.docs);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [data]);

    const fetchData = async () => {
        setLoading(true);
        await fetchSearchData();
    };

    return (
        <div className="xs:mx-[10px] xr:mx-[10px] sm:px-[20px] md:px-[20px] xl:px-[0px]">
            <div className="flex flex-wrap justify-between w-full">
                <h1 className={`text-[24px] font-bold ${darkMode ? 'text-white' : 'text-black '}`}>Result: {data}</h1>
                <a className={`2xl:mx-[55px] xl:mx-[30px] lg:mx-[10px] md:mx-[10px] text-[24px] font-bold ${darkMode ? 'text-white' : 'text-black '}`}>
                    <Link to={`/detailpage/`}>Back</Link>
                </a>
            </div>
            
            <div className="flex flex-wrap gap-1 w-full xr:flex xr:justify-center md:justify-start">
                {loading ? (
                    <Loader />
                ) : (
                    response.map((item: any, index: number) => (
                        <Dialog key={index}>
                            <DialogTrigger>
                                <div className={`w-[150px] h-[220px] rounded align-middle overflow-hidden ${darkMode ? 'bg-black hover:bg-[#d8aef6]' : 'bg-[#F7F7F7] hover:bg-[#F6E7AE]'}`}>
                                    <img
                                        src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
                                        alt={`Cover Image ${index + 1}`}
                                        className="cursor-pointer w-[100px] h-[150px] mx-[23px] my-[15px]"
                                    />
                                    <div className='text-[12px] text-center'>
                                        <span className={`font-semibold ${darkMode ? 'text-white' : 'text-black '}`}>{item.title}</span>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="bg-white max-w-[1000px] h-[550px] overflow-y-scroll">
                                <Cover_btn book={item}/> 
                            </DialogContent>
                        </Dialog>   
                    ))
                )}
            </div>
            


        </div>
    );
}

export default Cover;
