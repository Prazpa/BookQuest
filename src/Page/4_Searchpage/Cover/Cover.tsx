//import React state
import { useContext, useEffect, useState } from "react";

//import axios for fetching data 
import axios from "axios";

//import Detail component
import { BASE_URL } from "@/FetchData/BaseURL";
import Loader from "../../../MainComponent/2_Loader/Loader";
import Cover_btn from "@/MainComponent/4_BookCover/Cover_btn";

//import shadcn/ui component
import { Badge } from "@/components/ui/badge";

//import App context for recieve data
import { ColContext } from '@/AppType/ColType';
import { ContentContext } from "@/AppType/ContentType";


function Cover() {
    //receive data from app.tsx 
    const { data } = useContext(ContentContext);

    //Receive value from app.tsx
    const { darkMode } = useContext(ColContext);

    //set state for loading animation and response
    const [loading, setLoading] = useState<boolean>(true);
    const [response, setResponse] = useState<any>([]);

    //fetchdata
    const fetchSearchData = async (): Promise<any> => {
        try {
            const response = await axios.get(`${BASE_URL}/search.json?q=${data}`);
            return response.data.docs;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('Failed to fetch data');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchSearchData();
                setResponse(data || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [data]);


    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div className="scrollbar-container flex flex-wrap h-[600px] overflow-y-auto gap-2">
                    {response.map((item: any, index: any) => (
                        <div key={index}
                            className={`
                                flex justify-around w-[450px] rounded gap-y-10 
                                ${darkMode ? 'bg-[#d8aef6]' : 'bg-[#F6E7AE] '}
                            `}>
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
                                    <Cover_btn book={item} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cover;
