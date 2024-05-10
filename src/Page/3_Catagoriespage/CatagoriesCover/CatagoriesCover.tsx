//import useContext
import { useContext } from "react";
import { CatagoriesContext, PickContext } from "@/App";

//import shadcn/ui component
import { Button } from "@/components/ui/button";
import Cover_btn from "@/MainComponent/4_BookCover/Cover_btn";

function CatagoriesCover() {
    //recieve value from Leftpanel
    const { catagoriesValue } = useContext(CatagoriesContext);
    const { pick, setPick } = useContext(PickContext);

    // Check if data is available
    if (!catagoriesValue || !Array.isArray(catagoriesValue) || catagoriesValue.length === 0) {
        return <div>No data available. Please click agian</div>;
    }

    //log what i click each book
    const handleClick = (item: any) => {
        console.log("Clicked on book:", item);
    };

    //pick a book
    const handlePick = (item: any) => {
        console.log("You pick:", item.title);
        // Check if the book is already picked, if not, add it to the list
        if (!pick.includes(item.title)) {
          setPick([...pick, item.title]);
        }
    };

    return (
        <div className="scrollbar-container flex flex-wrap h-[600px] overflow-y-auto gap-2">
            {catagoriesValue.map((item: any, index: any) => (
                <div key={index} className="flex bg-[#F6E7AE] w-[800px] rounded gap-y-10">
                    <img
                        src={`https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`}
                        alt={`Cover Image ${index + 1}`}
                        className="m-1 cursor-pointer w-[150px] h-[200px]"
                    />
                    <div className='p-[10px]'>
                        <h1><b>Title:</b> {item.title}</h1>
                        <h1><b>Years:</b> {item.first_publish_year}</h1>
                        
                        
                        <Cover_btn book={item}/>
                       
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CatagoriesCover;
