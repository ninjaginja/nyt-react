import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const APIKEY = "&apikey=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
  // Gets all articles from search searchTerm
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  // Gets all saved articles
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Deletes a saved article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  }
};
