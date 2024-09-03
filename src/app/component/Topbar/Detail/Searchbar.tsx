import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ContentContext } from "@/app/type/ContentType";
import { useForm, SubmitHandler } from "react-hook-form";
import SearchIcon from "@/app/assets/svg/SearchIcon";

interface SearchFormData {
  searchInput: string;
}

const Searchbar = () => {
  const { setData } = useContext(ContentContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>();

  const onSubmit: SubmitHandler<SearchFormData> = (formData) => {
    setData(formData.searchInput);
    console.log(formData);
    navigate(`/searchpage/${formData.searchInput}`);
  };

  return (
    <div className="my-[10px] md:px-[-30px]">
      <form className="flex items-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col relative">
          <Input
            id="searchInput"
            className={`h-[50px] lg:w-[450px] md:w-[250px] sm:w-[250px] border-2 border-zinc-300 rounded-[30px] text-[14px]`}
            type="text"
            placeholder="Search BookQuest"
            {...register("searchInput", { required: true })}
          />
          <div className="absolute top-full mx-[15px]">
            {errors.searchInput && (
              <span className="text-red-600 text-[13px]">
                This field is required
              </span>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className={`flex items-center ml-2`}
          aria-label="Search"
        >
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
};

export default Searchbar;
