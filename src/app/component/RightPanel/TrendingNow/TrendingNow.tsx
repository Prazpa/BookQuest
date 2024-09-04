import axios from "axios";
import Loader from "@/app/component/Loader/Loader";
import Cover_btn from "@/app/component/BookCover/Cover_btn";
import { BASE_URL } from "@/app/providers/BaseURL";
import { Book } from "../../../type/BookType";
import { DarkmodeContext } from "@/app/type/DarkmodeType";
import { SelectedContext } from "@/app/type/SelectedType";
import { useEffect, useState, useContext } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Trending = () => {
  const { darkMode } = useContext(DarkmodeContext);
  const { setKeyBook } = useContext(SelectedContext);

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  useEffect(() => {
    const fetchTrendingData = async () => {
      const response = await axios.get(`${BASE_URL}/trending/now.json`);
      const trendingBooksData = response.data;
      setResponse(trendingBooksData.works);
      setLoading(false);
    };
    fetchTrendingData().catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setKeyBook(response.map((item) => item.key));
  }, [response]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= Math.ceil(response.length / itemsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = response.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(response.length / itemsPerPage);

  return (
    <div className="flex items-center">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap gap-2 w-full xr:flex xr:justify-center md:justify-start">
          {currentItems.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger>
                <div
                  className={`w-[150px] h-[220px] rounded align-middle overflow-hidden ${
                    darkMode
                      ? "bg-black hover:bg-[#d8aef6]"
                      : "bg-[#F7F7F7] hover:bg-[#F6E7AE]"
                  }`}
                >
                  <img
                    src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
                    alt={`Cover Image ${index + 1}`}
                    className="cursor-pointer w-[100px] h-[150px] mx-[23px] my-[15px]"
                  />
                  <div className="text-[12px] text-center">
                    <span
                      className={`font-semibold ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-white max-w-[1000px] h-[500px] overflow-y-auto flex flex-wrap">
                <Cover_btn book={item} />
              </DialogContent>
            </Dialog>
          ))}

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, pageIndex) => (
                <PaginationItem key={pageIndex}>
                  <PaginationLink
                    onClick={() => handlePageChange(pageIndex + 1)}
                    className={
                      pageIndex + 1 === currentPage
                        ? "bg-green-500 text-white rounded-full px-3 py-1"
                        : ""
                    }
                  >
                    {pageIndex + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }
                  aria-disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default Trending;
