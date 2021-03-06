//Dependencies
import React, { useContext } from "react";

//Context
import { BooksContext } from "context/BooksContext";

//Components
import Header from "components/Header";
import BooksList from "components/BooksList";
import Footer from "components/Footer";

const SearchResults = () => {
  const { state } = useContext(BooksContext);

  return (
    <>
      <Header />
      <BooksList booksList={state.booksList} />
      <Footer />
    </>
  );
};

export default SearchResults;
