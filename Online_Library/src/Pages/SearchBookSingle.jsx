import {useContext} from "react";
import {useParams} from "react-router-dom"
import BookContext from "../Context" 
import NotFound from "./NotFound";
import {FaTags} from "react-icons/fa";
const SearchBookSingle = () => {
  const {searchBooks} = useContext(BookContext);
  const {slug} = useParams()
  
  const item = searchBooks.find((curr, index, arr) => {
    return curr.isbn === slug
  })


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

  
  const content = (
    <div key={item.isbn}>
        
        <img src={item.thumbnailUrl ? item.thumbnailUrl : filteredBooks[0].thumbnailUrl} alt="book poster" data-slug={item.isbn} />
      <h3>{item.title}</h3>
        <div className = "ff-small p1-bt-small">{authors}</div>
        <div className = "ff-small">{categories}</div>
      <div style = {{marginTop: "1em"}}>
        {item.longDescription && <p>{item.longDescription}</p>}
      </div>
        
      </div>
    
  )
                                 
  return (
    <>
        
      {content}
    </>
  )
}
export default SearchBookSingle