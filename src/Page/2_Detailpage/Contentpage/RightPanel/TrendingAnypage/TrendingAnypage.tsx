import Topbar from '@/MainComponent/1_Topbar/Topbar'
import Footer from '@/MainComponent/3_Footer/Footer'
import Trending_btn from '../Trending_btn';
import { BASE_URL } from '@/FetchData/BaseURL';
import Loader from '@/MainComponent/2_Loader/Loader';
import LeftPanel from '../../LeftPanel/LeftPanel';

//import shadcn/ui component
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';

//import for Trending
import { useContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { ValueContext } from '@/App';
import Cover_btn from '@/MainComponent/4_BookCover/Cover_btn';


interface Book {
    cover_i: number;
    title: string;
    first_publish_year: number;
    author_name: string[];
    language: string[];
}

interface TrendingData {
    works: Book[];
}

function TrendingAnypage() {
    //Receive value from detailpage.tsx
    const { value } = useContext(ValueContext);
    
    //set state for loading and response
    const [loading, setLoading] = useState<boolean>(true);
    const [response, setResponse] = useState<Book[]>([])

    //fetchdata
    useEffect(() => {
        // Fetch data only when value changes
        const fetchTrendingData = async (): Promise<void> => {
            try {
                setLoading(true);
                const response: AxiosResponse<TrendingData> = await axios.get<TrendingData>(`${BASE_URL}/trending/${value}.json`);
                const trendingBooksData: TrendingData = response.data;
                setResponse(trendingBooksData.works)
                console.log(`fetch by : ${value}`, trendingBooksData.works);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        // Only fetch data when value changes
        if (value !== undefined) {
            fetchTrendingData();
        }
        
    }, [value]);

    if (value === undefined) {
        // หากยังไม่มีค่า ให้ทำอะไรก็ตามที่ต้องการ เช่นแสดง Loader หรือข้อความ "Loading..."
        return (
            <div>404 no data</div>
        )
    }
    
    return (
        <div>
            <Topbar />
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel
                    defaultSize={22}
                    className="flex border-r-4 border-[#14B8A9] overflow-x-hidden lg-w-[500px]"
                >
                    <LeftPanel />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={78}>
                    <div className="px-[20px] gap-[10px]">
                        {/* Headline */}
                        <div className="w-[652px] h-[23.79px]">
                            <span className="w-[250px] h-[25px] text-black text-2xl font-semibold">
                                Trending
                            </span>
                        </div>

                        {/* Trending button for sort by time */}
                        <div className="my-[20px]">
                            <Trending_btn />
                        </div>

                        {/* Cover book of trending(default by any)*/}
                        <div className="flex my-[20px] gap-2">
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
                                                        <Cover_btn book={item} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>


            <Footer />
        </div>
    )
}

export default TrendingAnypage;
