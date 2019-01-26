import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function () {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=mystery&printType=books&maxResults=20");
  }
};
