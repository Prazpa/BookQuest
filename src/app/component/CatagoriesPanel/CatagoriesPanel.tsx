import { useContext, useEffect, useState } from "react";
import fetchCategory from "@/app/providers/Fetchcatagory";
import { ContentContext } from "@/app/type/ContentType";
import { DarkmodeContext } from '@/app/type/DarkmodeType';
import { Link } from "react-router-dom";
import Loader from "@/app/component/Loader/Loader";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Cover_btn from "@/app/component/BookCover/Cover_btn";


function CatagoriesPanel() {
    const { darkMode } = useContext(DarkmodeContext);
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
        <div className="xs:mx-[10px] xr:mx-[10px] sm:px-[20px] md:px-[20px] xl:px-[0px]">
            <div className="flex justify-between w-full">
                <h1 className={`text-[24px] font-bold ${darkMode ? 'text-white' : 'text-black '}`}>Catagories: {catagoriesValue}</h1>
                <a className={`2xl:mx-[55px] xl:mx-[30px] lg:mx-[10px] md:mx-[10px] text-[24px] font-bold ${darkMode ? 'text-white' : 'text-black '}`}>
                    <Link to={`/detailpage/`}>Back</Link>
                </a>
            </div>

            <div className="flex flex-wrap gap-3 w-full xr:flex xr:justify-center">
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

export default CatagoriesPanel;
