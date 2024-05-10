//import axios for fetch
import axios from "axios";

//import Main url for connection
import { BASE_URL } from "./BaseURL";

const fetchCategory = async (category: string) => {
    //receive value from Leftpanel and try to real fetch
    try {
        let fetchdataResponse;

        //make condition because value "Textbook" and "Language" have 'search.json' in url
        if (category.substring(0, 12) === "search.json") {
            fetchdataResponse = await axios.get(`${BASE_URL}/${category}`);
        } else {
            fetchdataResponse = await axios.get(`${BASE_URL}/subjects/${category}.json`);
        }
        
        //Fetch data and export
        const responseData = fetchdataResponse.data; 
        const responseData2 = responseData.works
        return responseData2; 
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export default fetchCategory;
