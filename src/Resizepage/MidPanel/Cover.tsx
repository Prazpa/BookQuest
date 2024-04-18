import { useEffect, useState } from 'react';
import fetchData from "@/FetchData/Fetchdata"; // Adjust the path as needed
import './loader.css'

function Cover() {
  const [coverUrls, setCoverUrls] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData().then((isbns) => {
      if (isbns && isbns.length > 0) {
        const urls = isbns.map(isbn => `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`);
        setCoverUrls(urls);
      } else {
        setError('Error: No valid ISBNs found for the trending books.');
      }
    }).catch((error) => {
      setError('Error fetching data from the server.');
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <div>
      {coverUrls.length > 0 ? (
        <div className="flex flex-wrap justify-center">
          {coverUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Cover Image ${index + 1}`}
              width={200}
              height={300}
              className="m-1"
            />
          ))}
        </div>
      ) : (

        // loader section
        <div>
          {error || 
            <div className="lds-roller absolute top-5 left-7">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          }
        </div>
      )}
    </div>
  );
}

export default Cover;
