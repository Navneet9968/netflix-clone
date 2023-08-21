import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

//whenever we try instance.get('/something'),it will try to go to https://api.themoviedb.org/3/something
//it will append after this base url

export default instance;