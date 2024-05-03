import { useContext } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AppContext } from "../../../App";

function CatagoriesCover() {
    const { data } = useContext(AppContext);

    // Check if data is available
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <div>No data available</div>;
    }

    const handleClick = (item: any) => {
        console.log("Clicked on book:", item);
    };

    return (
        <div className="scrollbar-container flex flex-wrap h-[600px] overflow-y-auto gap-2">
            {data.map((item: any, index: any) => (
                <div key={index} className="flex bg-[#F6E7AE] w-[800px] rounded gap-y-10">
                    <img
                        src={`https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`}
                        alt={`Cover Image ${index + 1}`}
                        className="m-1 cursor-pointer w-[150px] h-[200px]"
                    />
                    <div className='p-[10px]'>
                        <h1><b>Title:</b> {item.title}</h1>
                        <h1><b>Years:</b> {item.first_publish_year}</h1>
                        <h1><b>Author:</b> {item.author_name}</h1>
                        <Badge className='bg-black text-white'>{item.subject}</Badge>
                        <div>
                            <Button variant="secondary" className='bg-[#0D9488] rounded' onClick={() => handleClick(item)}>View</Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CatagoriesCover;
