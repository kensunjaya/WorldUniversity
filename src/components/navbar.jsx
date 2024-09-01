import { useContext, useState } from "react"
import { IoSearch } from "react-icons/io5"
import { DataContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const { setSearchQuery } = useContext(DataContext);
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(keyword);
      navigate("/search");
    }
  }

  const handleHome = () => {
    navigate("/");
  }

  const handleAbout = () => {
    navigate("/about");
  }

  const handleFilter = () => {
    navigate("/filter");
  }

  return (
    <nav className="flex items-center p-5 font-sans text-secondary bg-primary rounded-b-3xl fixed top-0">
      <button className="flex items-center font-semibold text-lg" onClick={() => navigate("/")}>
        WorldUniversity
      </button>

      <div className="flex items-center border border-secondary rounded-md ml-10 mx-10 bg-transparent text-sm w-[20rem]">
        <IoSearch className="text-secondary mx-2" />
        <input
          className="bg-transparent border-none outline-none w-full py-[0.5rem] placeholder:text-fourth"
          placeholder="Search for countries ..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleSearchKeyDown}
        />
      </div>

      <button className="hover:bg-fourth hover:text-primary py-1 px-3 transition rounded-xl mx-10" onClick={handleHome}>
        Home
      </button>
      <button className="hover:bg-fourth hover:text-primary py-1 px-3 transition rounded-xl mx-10" onClick={handleFilter}>
        Filter
      </button>
      <button className="hover:bg-fourth hover:text-primary py-1 px-3 transition rounded-xl mx-10" onClick={handleAbout}>
        About
      </button>
    </nav>
  )
}