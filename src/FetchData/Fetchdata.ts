import axios from 'axios';

const BASE_URL = 'https://openlibrary.org';

const fetchData = async (): Promise<{
  [x: string]: any; isbns: string[]; titles: string[] 
} | null> => {
    try {
        // Step 1: Get trending books
        const fetchdataResponse = await axios.get(`${BASE_URL}/search.json?q=Trending`);
        const trendingBooksData = fetchdataResponse.data;

        // Step 2: Process trending books data
        const trendingBooks = trendingBooksData.docs;
        const slicedData = trendingBooks.slice(0, 20); // Slice the data
        
        // Step 3: Extract ISBNs and titles
        const isbns: string[] = [];
        const titles: string[] = [];
        const author: string[] = [];
        for (const book of slicedData) {
            if (book.isbn && book.isbn.length > 0) {
                isbns.push(book.isbn[0]); // Assuming the first ISBN is valid
                titles.push(book.title);
                author.push(book.author_name);
                
            }
        }

        // Step 4: Handle cases where ISBNs are not available
        if (isbns.length === 0) {
            console.error('Error: No valid ISBNs found for the trending books.');
            return null;
        }

        return { isbns, titles };

    } catch (error) {
        console.error('Error fetching trending book covers:', error);
        return null;
    }
};

export default fetchData;
