import React from "react";
import { useState, createContext, useEffect, useRef } from "react"
import books from "./books.json";

const BookContext = React.createContext({});

export const BookProvider = ({ children }) => {
  const [state, setState] = useState({
    pageCount: 0,
    genres: [],
    featured: [],
    filteredBooks: [],
    searchBooks: []
  })
  // featured 

  function featured() {
    let uni;
    let arr = []
    for (let i = 0; i < 20; i++) {
      uni = Math.floor(Math.random() * 100)
      arr.push(uni)
    }
    arr = Array.from(new Set(arr))
    let popFeat = []
    for (let i = 0; i < arr.length; i++) {
      popFeat.push(books[arr[i]])
    }
    return popFeat;
  }

  // categories and genre filter

  let genresList = books.map((item) => {
    return item.categories[0]
  })
  genresList = Array.from(new Set(genresList))

  // 1st use effect

  useEffect(() => {
    let featuredBooks = featured();
    setState({
      ...state,
      genres: genresList,
      featured: featuredBooks
    })
  }, [])


  function genreFilter(e) {
    let tempBooks = [...books];
    const { title, pageCount } = state;
    if (title) {
      tempBooks = tempBooks.filter((item) => {
        return item.categories[0] === title;
      })
    }
    if (pageCount) {
      tempBooks = tempBooks.filter((item) => {
        return item.pageCount >= pageCount
      })
    }


    setState({
      ...state,

      filteredBooks: tempBooks
    })

  }






  function handleChange(e) {
    const target = e.target;
    const value = target.value === "checkbox" ? target.checked : target.value;

    const name = e.target.name

    setState({
      ...state,

      [name]: value
    })

  }


  function handleSearch(values) {
    let searchItems = [...books];
    let searchTerm = values.current.value;
    searchTerm = searchTerm.toLowerCase();
    
    if (searchTerm) {
        searchItems = searchItems.filter((item) => {
          return item["title"].toLowerCase() === searchTerm || item["title"].toLowerCase().substr(0, 4) === searchTerm.substr(0, 4) || item["title"].toLowerCase().includes(searchTerm)
        })
      searchItems = Array.from(new Set(searchItems))
    }
    else {
      searchItems = []
    }
    setState({
  ...state,
  searchBooks: searchItems
    })
  }




  return (
    <BookContext.Provider value={{ featured: state.featured, genres: state.genres, handleChange: handleChange, title: state.title, pageCount: state.pageCount, filteredBooks: state.filteredBooks, genreFilter: genreFilter, handleSearch: handleSearch, searchBooks: state.searchBooks }}>
      {children}
    </BookContext.Provider>
  )
}
export default BookContext;