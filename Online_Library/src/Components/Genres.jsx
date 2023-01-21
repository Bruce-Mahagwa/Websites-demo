import { useContext, useEffect, useState } from "react";
import BookContext from "../Context";
import { Link } from "react-router-dom"
import {FaTags} from "react-icons/fa";
const Genres = () => {
  const { genres, title, pageCount, handleChange, filteredBooks, genreFilter } = useContext(BookContext);

  const [url, setUrl] = useState("")


  function hitDat(e) {
    const targets = e.target.dataset.slug
    setUrl(targets)
  }



  // console.log(slug)


  const categories = genres.map((item, index) => {
    return (
      <option key={index}>{item}</option>
    )
  })

  const component = filteredBooks.map((item, index, arr) => {
    let authors = item.authors.map((auth) => {
      return (
        <p>{auth}</p>
      )
    })
    let categories = item.categories.map((cat) => {
      return (
        // <p>{cat}</p>
        
        <>
        <p><FaTags className = "m-left-small" style = {{display: "inline"}} />{cat}</p>
        </>
      )
    })

    return (
      <div key={item.isbn}>
        
        <Link to={`/genres/${url}`}><img src={item.thumbnailUrl ? item.thumbnailUrl : filteredBooks[0].thumbnailUrl} alt="book poster" data-slug={item.isbn} onMouseOver={hitDat} className = "img-poster"/></Link>
        <h3 data-slug={item.isbn}>{item.title}</h3>
        <div className = "ff-small p1-bt-small">{authors}</div>
        <div className = "ff-small">{categories}</div>
        
      </div>
    )
  })


  return (
    <section id="genres">
      <button onClick={genreFilter} className = "ff-small m1-bt-small">Filter</button>
      <form>
        
        <div className="form-group">
          <label htmlFor="title" className = "m-left">Genre</label>
          <select name="title" id="title" value={title} onChange={handleChange}>{categories}</select>
        </div>

        <div className="form-group">
          <label htmlFor="pageCount" className = "m-left">Pages: {pageCount}</label>
          <input type="range" name="pageCount" id="pageCount" max="1000" min="100" value={pageCount} onChange={handleChange}></input>
        </div>

      </form>

      <div className = "grid m-top">
        {component}
      </div>
    </section>
  )
}

export default Genres;