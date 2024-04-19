
import React, { useEffect, useState } from 'react';
import fetchData from "@/FetchData/Fetchdata"; 
import './loader.css';

interface CoverProps {
    onBookClick: (title: string, isbn: string) => void;
}

const Cover: React.FC<CoverProps> = ({ onBookClick }) => {
    const [coverUrls, setCoverUrls] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [titles, setTitles] = useState<string[]>([]);
    const [isbn, setIsbn] = useState<string[]>([]);
    const [author, setAuthor] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchData()
            .then((data) => {
                if (data && data.isbns && data.isbns.length > 0) {
                    const urls = data.isbns.map(isbn => `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`);
                    setCoverUrls(urls);
                    setTitles(data.titles);
                    setIsbn(data.isbns);
                  
                    setLoading(false); // Data fetched successfully, loading is complete
                } else {
                    setError('Error: No valid ISBNs found for the trending books.');
                    setLoading(false); // Loading failed
                }
            })
            .catch((error) => {
                setError('Error fetching data from the server.');
                console.error('Error fetching data:', error);
                setLoading(false); // Loading failed
            });
    }, []);

    const handleClick = (title: string, isbn: string) => {
        console.log("Clicked on book:", title);
        onBookClick(title,isbn); // Pass the clicked book title to the parent component
    }; 

    return (
        <div>
            {loading ? (
                // Loader animation while data is being fetched
                <div className="lds-roller flex justify-center items-center align-middle">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                // Display cover images
                <div className="flex flex-wrap justify-center">
                    {coverUrls.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Cover Image ${index + 1}`}
                            width={200}
                            height={250}
                            className="m-1 cursor-pointer"
                            onClick={() => handleClick(titles[index], isbn[index])}
                        />
                    ))}
                </div>
            )}

            {error && <div>{error}</div>}
        </div>
    );
}

export default Cover;
