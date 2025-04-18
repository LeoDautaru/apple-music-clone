import axios from "axios";

export const searchSongs = (query) => {
  return axios.get(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
  );
};
