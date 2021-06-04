import React from 'react'

 const Book = ({ img, title, author }) => {
  // alt. const {img, title, author} = props;
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('Hello World');
  };
  const complexExample = () => {
    alert(author);
  };

  return ( 
  <article className='book' onMouseOver={() => {
    console.log(title);
  }}>
    <img src={img} alt='' />
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>
      button example
    </button>
    <button type="button" onClick={() => complexExample(author)}>more complex example</button>
  </article>
  );
};

export default Book;

 