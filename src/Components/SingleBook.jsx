import {useParams} from  "react-router-dom";
import {useContext} from "react";
import BookContext from "../Context";
import {FaTags} from "react-icons/fa";
const SingleBook = () => {
  const {slug} = useParams()
  const {filteredBooks} = useContext(BookContext);
  const item = filteredBooks.find((curr, index, arr) => {
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
        
        <img src={item.thumbnailUrl ? item.thumbnailUrl : filteredBooks[0].thumbnailUrl} alt="book poster" data-slug={item.isbn} className = "img-poster"/>
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
      {content}
    </>
  )
}
export default SingleBook