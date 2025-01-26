import axios from "axios";

const BASE_URL = "http://localhost:3000/";
export const fetchMovies = async () => {
  const response = await axios.get(`${BASE_URL}movies`);
  return response.data;
};

export const fetchOneMovie = async (id) => {
  const response = await axios.get(`${BASE_URL}movies/${id}`);
  return response.data;
};
