//import useContext
import { useContext } from "react";
import { CatagoriesContext } from "@/AppType/CatagoriesType";

//import shadcn/ui component
import Cover_btn from "@/MainComponent/4_BookCover/Cover_btn";

//import for useContext
import { ColContext } from '@/AppType/ColType';


function CatagoriesCover() {
    //Receive value from app.tsx
    const { darkMode } = useContext(ColContext);

    //recieve value from Leftpanel
    const { catagoriesValue } = useContext(CatagoriesContext);

    // Check if data is available
    if (!catagoriesValue || !Array.isArray(catagoriesValue) || catagoriesValue.length === 0) {
        return <div>No data available. Please click agian</div>;
    }

    return (
        <div className="scrollbar-container flex flex-wrap h-[600px] overflow-y-auto gap-2">
            {catagoriesValue.map((item: any, index: any) => (
                <div key={index}
                    className={`
                        flex justify-around w-[450px] rounded gap-y-10 
                        ${darkMode ? 'bg-[#d8aef6]' : 'bg-[#F6E7AE] '}
                    `}>
                    <img
                        src={`https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`}
                        alt={`Cover Image ${index + 1}`}
                        className="m-1 cursor-pointer w-[150px] h-[200px]"
                    />
                    <div className='p-[10px]'>
                        <h1><b>Title:</b> {item.title}</h1>
                        <h1><b>Years:</b> {item.first_publish_year}</h1>


                        <Cover_btn book={item} />

                    </div>
                </div>
            ))}
        </div>
    );
}

export default CatagoriesCover;
