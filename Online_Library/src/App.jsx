import { BookProvider } from "./Context";
import './App.css'
import About from "./Pages/About";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import GenresPage from "./Pages/GenresPage"
import Book from "./Pages/Book"
import SearchBook from "./Pages/SearchBook"
import SearchBookSingle from "./Pages/SearchBookSingle"
import FeaturedBooks from "./Pages/FeaturedBooks";
import NotFound from "./Pages/NotFound";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/genres/:slug" element={<Book />} />
        <Route path="/search" element={<SearchBook />} />
        <Route path="/search/:slug" element={<SearchBookSingle />} />
        <Route path="/featured/:slug" element={<FeaturedBooks />} />
        <Route path = "/genres/undefined" element = {<NotFound />} />
        <Route path = "/search/undefined" element = {<NotFound />} />
        <Route path = "/featured/undefined" element = {<NotFound />} />
        <Route path = "/about" element = {<About />} />
      </Routes>
    </>
  )
}
