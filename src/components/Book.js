import React from 'react'

const Book = (props) => {

 return (
   <div className="book-card" >
      <img src={props.book.imageURL} alt="" />
     <p> {props.book.title} </p>
      <span>by {props.book.authors} </span>
      <span>Condition: {props.book.book_condition} </span>
     <button onClick={() => props.getBook(props.book)}>Add to cart</button>
   </div>
 )
}

export default Book;
