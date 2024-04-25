import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Resize";
import Loader from "@/Loader/Loader";

function Cover() {
    const { data } = useContext(AppContext);
    const [ loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(!data || data.length === 0); 
    }, [data]);

    const handleClick = (item: any) => {
        console.log("Clicked on book:", item);
    };

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div className="scrollbar-container flex flex-wrap h-[600px] overflow-y-auto gap-2">
                    {data.map((item:any, index:number) => ( 
                        <div key={index} className="flex bg-[#F6E7AE] rounded gap-y-10">
                            <img
                                src={`https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`}
                                alt={`Cover Image ${index + 1}`}
                                className="m-1 cursor-pointer w-[150px] h-[200px]"
                                onClick={() => handleClick(item)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cover;
