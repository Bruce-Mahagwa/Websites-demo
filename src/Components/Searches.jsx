import {useContext, useState} from "react";
import BookContext from "../Context"
import {Link} from "react-router-dom"
import {FaTags} from "react-icons/fa";
const Searches = () => {
  const { searchBooks } = useContext(BookContext);

   const [url, setUrl] = useState("")
  
  function hitDat(e) {
    const targets = e.target.dataset.slug
    setUrl(targets)
  }
  
  const component = searchBooks.map((item, index, arr) => {
    let authors = item.authors.map((auth) => {
      return (
        <p>{auth}</p>
      )
    })
    let categories = item.categories.map((cat) => {
      return (
        <p><FaTags className = "m-left-small" style = {{display: "inline"}} />{cat}</p>
      )
    })

    return (
      <div key={item.isbn}>
        
        <Link to={`/search/${url}`}><img src={item.thumbnailUrl} alt="book poster" data-slug={item.isbn} onMouseOver={hitDat} className = "img-poster" /></Link>
        <h3>{item.title}</h3>
        <div className = "ff-small p1-bt-small">{authors}</div>
        <div className = "ff-small">{categories}</div>
      </div>
    )
  })



  
  return (
    <section>
      <div>
        {component}
      </div>
    </section>
  )
}
export default Searches