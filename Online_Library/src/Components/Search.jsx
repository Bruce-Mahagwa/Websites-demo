import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import BookContext from "../Context";

const Search = () => {
  const value = useRef(null)
  const { handleSearch} = useContext(BookContext);
  
  return (
    <form className = "p1">
      <label htmlFor="search" className = "m-left">Search Library</label>
      <input className = "m-left" type="text" name="search" id="search" ref={value} />
      <Link to="/search"><FaSearch onMouseOver={() => handleSearch(value)} /></Link>
    </form>
  )
}
export default Search;