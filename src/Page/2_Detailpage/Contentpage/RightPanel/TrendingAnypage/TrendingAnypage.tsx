//Detail component
import Topbar from '@/MainComponent/1_Topbar/Topbar'
import Footer from '@/MainComponent/3_Footer/Footer'
import Trending_btn from '../Trending_btn';
import Loader from '@/MainComponent/2_Loader/Loader';
import LeftPanel from '../../LeftPanel/LeftPanel';
import Cover_btn from '@/MainComponent/4_BookCover/Cover_btn';
import { BASE_URL } from '@/FetchData/BaseURL';
import { Book } from '../BookType'

//import shadcn/ui component
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Badge } from '@/components/ui/badge';

//import for fetching
import { useContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
;

//import for useContext
import { ColContext } from '@/AppType/ColType';
import { ContentContext } from '@/AppType/ContentType';

function TrendingAnypage() {
    //useContext
    const { value } = useContext(ContentContext);
    const { darkMode } = useContext(ColContext);

    //set state
    const [loading, setLoading] = useState<boolean>(true);
    const [response, setResponse] = useState<Book[]>([])

    //fetchdata
    useEffect(() => {
        // Fetch data only when value changes
        const fetchTrendingData = async (): Promise<void> => {
            try {
                setLoading(true);
                const response: AxiosResponse = await axios.get(`${BASE_URL}/trending/${value}.json`);
                const trendingBooksData = response.data;
                setResponse(trendingBooksData.works)
                // console.log(`fetch by : ${value}`, trendingBooksData.works);
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
        <div className={`${darkMode ? 'bg-black' : ''}`}>
            <Topbar />
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel
                    defaultSize={20}
                    className={`flex border-r-4 overflow-x-hidden lg-w-[500px]
                    ${darkMode ? 'border-[#FF5A67]' : 'border-[#14B8A9]'}
                `}
                >
                    <LeftPanel />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={80}>
                    <div className="px-[20px] gap-[10px]">
                        {/* Headline */}
                        <div className="w-[652px] h-[25px]">
                            <span className={`w-[250px] h-[25px] text-black text-[30px] font-semibold
                                ${darkMode ? 'text-white' : 'text-black '}
                            `}>
                                Trending
                            </span>
                        </div>

                        {/* Trending button for sort by time */}
                        <div className="my-[20px]">
                            <Trending_btn />
                        </div>

                        {/* Cover book of trending(default by any)*/}
                        <div className='flex items-center'>
                            {loading ? (
                                <Loader />
                            ) : (
                                <div className="flex flex-wrap h-[520px] overflow-y-auto justify-center gap-5">
                                    {response.map((item, index) => (
                                        <div key={index}
                                            className={`
                                flex-col w-[200px] h-[320px] rounded-lg align-middle overflow-hidden
                                ${darkMode ? 'bg-[#d8aef6]' : 'bg-[#F7F7F7] '}
                        `}>
                                            <img
                                                src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
                                                alt={`Cover Image ${index + 1}`}
                                                className="cursor-pointer w-[150px] h-[220px] mx-[23px] my-[15px]"
                                            />

                                            <div>
                                                <div className='text-[16px] text-center'>
                                                    <span>{item.title}</span>
                                                </div>

                                                <div>
                                                    {/* <Cover_btn book={item}/> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>

            <Footer />
        </div>
    )
}

export default TrendingAnypage;
