import axios from "axios";

const BooksServices = {
  async getBooks(term: string, page: number) {
    const resp: any = await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=${page}`
      )
      .catch((err) => console.log(err));

    return resp;
  },
};

export default BooksServices;
