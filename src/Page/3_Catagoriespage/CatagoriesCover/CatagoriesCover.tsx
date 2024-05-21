import { useContext, useEffect, useState } from "react";
import fetchCategory from "@/FetchData/Fetchcatagory";
import { ContentContext } from "@/AppType/ContentType";
import { ColContext } from '@/AppType/ColType';
import { Link } from "react-router-dom";
import { Catagoriestype } from "./Catagoriestype";
import Loader from "@/MainComponent/2_Loader/Loader";

function CatagoriesCover() {

    const { darkMode } = useContext(ColContext);
    const { catagoriesValue } = useContext(ContentContext);
    const [saveData, setSavedata] = useState([])
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const handleCategoryChange = async () => {
            try {
                const dataCatagory = await fetchCategory(catagoriesValue);
                console.log("Categories fetched", dataCatagory);
                setSavedata(dataCatagory)
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        handleCategoryChange();
    }, [])


    if (!catagoriesValue || catagoriesValue.length === 0) {
        return <div>No data available. Please click agian</div>;
    }

    return (
        <div className="h-[600px] w-[1030px] overflow-y-scroll">

            <div className="flex justify-between">
                <h1>Catagories : {catagoriesValue}</h1>

                <h1><Link to={`/detailpage/`}>Back</Link></h1>
            </div>

            <div className="flex flex-wrap">
                {loading ? (
                    <Loader />
                ) : (
                    saveData.map((item: Catagoriestype, index: number) => (
                        <div key={index} className={`flex-col w-[200px] h-[320px] rounded-lg align-middle overflow-hidden ${darkMode ? 'bg-black hover:bg-[#d8aef6]' : 'bg-[#F7F7F7] hover:bg-[#F6E7AE]'}`}>
                            <img
                                src={`https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`}
                                alt={`Cover Image ${index + 1}`}
                                className="cursor-pointer w-[150px] h-[220px] mx-[23px] my-[15px]"
                            />
                            <div>
                                <div className='text-[16px] text-center'>
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
}

export default CatagoriesCover;
