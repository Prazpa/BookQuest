import axios from "axios";
import { BASE_URL } from "./BaseURL";

const fetchCategory = async (category: string) => {
    
    try {
        let fetchdataResponse;
        
        if (category.substring(0, 12) === "search.json") {
            fetchdataResponse = await axios.get(`${BASE_URL}/${category}`);
        } else {
            fetchdataResponse = await axios.get(`${BASE_URL}/subjects/${category}.json`);
        }
        
        const responseData = fetchdataResponse.data; 
        const responseData2 = responseData.works
        return responseData2; 

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export default fetchCategory;
