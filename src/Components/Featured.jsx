import { useContext, useState } from "react";
import BookContext from "../Context";
import { Link } from "react-router-dom"
import {FaTags} from "react-icons/fa";
const Featured = () => {
  const { featured } = useContext(BookContext)
  const [url, setUrl] = useState("")

  function hitDat(e) {
    const targets = e.target.dataset.slug
    setUrl(targets)
  }



  const component = featured.map((item, index, arr) => {
    let authors = item.authors.map((auth) => {
      return (
        <p>{auth}</p>
      )
    })
    let categories = item.categories.map((cat) => {
      return (
        <>
        <p><FaTags className = "m-left-small" style = {{display: "inline"}} />{cat}</p>
        </>
      )
    })

    return (
      <div key={item.isbn} className="featured-grid">
        
        <Link to={`/featured/${url}`}><img src={item.thumbnailUrl ? item.thumbnailUrl : featured[0].thumbnailUrl} alt="book poster" data-slug={item.isbn} onMouseOver={hitDat} className = "img-poster"/></Link>
        <h4 className = "ff-small p1-bt-small">{item.title}</h4>
        <div className = "ff-small p1-bt-small">{authors}</div>
        <div className = "ff-small">{categories}</div>
      </div>
    )
  })

  return (
    // {component}
    <section id="featured">
      <div className="grid">
        {component}
      </div>
    </section>
  )
}
export default Featured