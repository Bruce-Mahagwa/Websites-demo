import { useContext } from "react";
import { useParams } from "react-router-dom"
import BookContext from "../Context"
import NotFound from "./NotFound";
import {FaTags} from "react-icons/fa";
const FeaturedBooks = () => {

  const { featured } = useContext(BookContext);
  const { slug } = useParams()

  const item = featured.find((curr, index, arr) => {
    return curr.isbn === slug
  })
  console.log(item)
  let authors = item.authors.map((auth) => {
    return (
      <p>{auth}</p>
    )
  })
  let categories = item.categories.map((cat) => {
    return (
      <p>{cat}</p>
    )
  })


  const content = (
    <div key={item.isbn}>
      
      <img src={item.thumbnailUrl ? item.thumbnailUrl : featured[0].thumbnailUrl} alt="book poster" data-slug={item.isbn} className = "img-poster"/>
      <h3 data-slug={item.isbn}>{item.title}</h3>
      <div className = "ff-small p1-bt-small">{authors}</div>
        <div className = "ff-small">{categories}</div>
      <div style = {{marginTop: "1em"}}>
        {item.longDescription && <p>{item.longDescription}</p>}
      </div>
    </div>

  )




  return (

    <>

      {slug !== undefined ? content : <div><NotFound /></div>}
    </>
  )
}
export default FeaturedBooks;