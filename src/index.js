import React from 'react';
import ReactDOM from 'react-dom';

// Import styling
import './index.css';

// Import functions
import {books} from './books';
import Book from './Book';

// Stateless functional components always need to return jsx.

// JSX Rules
// Return single element. Ex no two divs. Work around, fragments.
// Follow httml semantics.
// use camelCase for html attributes.  ex. onClick
// className vs class
// close every element
// wrap return in () to make life easier.
// You can nest components. (modularity)


function Booklist(){
  return(
      <section className='booklist'>
        {books.map((book) => {
          return(
            <Book key={book.id} {...book}></Book>
          )
        })}
      </section>
  )
}



ReactDOM.render(<Booklist />,document.getElementById('root'));