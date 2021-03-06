import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for the passed query

export default {
  search: function (query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&printType=books&maxResults=20");
  },
  // Saves a book to the database to pull later
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  getBooks: function () {
    return axios.get("/api/books");
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }
};
