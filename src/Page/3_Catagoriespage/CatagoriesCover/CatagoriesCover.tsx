import { useContext, useEffect, useState } from "react";
import fetchCategory from "@/FetchData/Fetchcatagory";
import { ContentContext } from "@/AppType/ContentType";
import { ColContext } from '@/AppType/ColType';
import { Link } from "react-router-dom";
import Loader from "@/MainComponent/2_Loader/Loader";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Cover_btn from "@/MainComponent/4_BookCover/Cover_btn";


function CatagoriesCover() {
    const { darkMode } = useContext(ColContext);
    const { catagoriesValue } = useContext(ContentContext);
    const [ saveData, setSavedata ] = useState([])
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ reloadCatagories, setReloadCatagories ] = useState(false); 

    useEffect(() => {
        const handleCategoryChange = async () => {
            try {
                const dataCatagory = await fetchCategory(catagoriesValue);
                setSavedata(dataCatagory)
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        handleCategoryChange();
    }, [catagoriesValue, reloadCatagories]) 

    useEffect(() => {
        if (reloadCatagories) {
            setLoading(true);
            setReloadCatagories(false);
        }
    }, [reloadCatagories])

    if (!catagoriesValue || catagoriesValue.length === 0) {
        return <div>No data available. Please click again</div>;
    }

    return (
        <div>
            <div className="flex justify-between">
                <h1 className={`text-[24px] font-bold ${darkMode ? 'text-white' : 'text-black '}`}>Catagories: {catagoriesValue}</h1>
                <a className={`mx-[22px] text-[24px] font-bold ${darkMode ? 'text-white' : 'text-black '}`}>
                    <Link to={`/detailpage/`}>Back</Link>
                </a>
            </div>

            <div className="flex flex-wrap gap-3 w-[1000px]">
                {loading ? (
                    <Loader />
                ) : (
                    saveData.map((item: any, index: number) => (
                        <Dialog key={index}>
                            <DialogTrigger>
                                <div className={`w-[150px] h-[220px] rounded align-middle overflow-hidden ${darkMode ? 'bg-black hover:bg-[#d8aef6]' : 'bg-[#F7F7F7] hover:bg-[#F6E7AE]'}`}>
                                    <img
                                        src={`https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`}
                                        alt={`Cover Image ${index + 1}`}
                                        className="cursor-pointer w-[100px] h-[150px] mx-[23px] my-[15px]"
                                    />
                                    <div className='text-[12px] text-center'>
                                        <span className="font-semibold">{item.title}</span>
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

export default CatagoriesCover;
