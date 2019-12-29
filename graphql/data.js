import fetch from "node-fetch";
const API_URL = "https://yts.lt/api/v2/list_movies.json";

export const users = [
  {
    id: 1,
    name: "user 1",
    age: 20,
    gender: "female"
  },
  {
    id: 2,
    name: "user 2",
    age: 20,
    gender: "female"
  },
  {
    id: 3,
    name: "user 3",
    age: 20,
    gender: "female"
  },
  {
    id: 4,
    name: "user 4",
    age: 20,
    gender: "female"
  }
];

const movies = [
  {
    id: 1,
    title: "Star wars II",
    score: 99
  },
  {
    id: 2,
    title: "The Avengers",
    score: 99
  },
  {
    id: 3,
    title: "나쁜 녀석들",
    score: 80
  }
];

export const getById = id => {
  const founds = users.filter(x => x.id === id);
  if (founds && founds.length > 0) {
    return founds[0];
  }
  return null;
};

export const getMovieById = id => {
  const founds = movies.filter(x => x.id === id);
  if (founds && founds.length > 0) {
    return founds[0];
  }

  return null;
};

export const getMovies = () => {
  return movies;
};

export const addMovie = ({ title, score }) => {
  const newMovie = {
    id: 1,
    title,
    score
  };
  const ids = movies.map(x => x.id).sort((a, b) => (a > b ? 0 : 1));
  if (ids.length > 0) {
    newMovie.id = ids[0] + 1;
  }
  movies.push(newMovie);

  return newMovie;
};

export const removeMovie = id => {
  const foundIndex = movies.findIndex(x => x.id === id);
  if (foundIndex < 0) {
    return false;
  }
  const removed = movies.splice(foundIndex, 1);

  if (removeMovie) {
    return true;
  }

  return false;
};

export const getListOfMovies = (limit, minimumRating) => {
  return fetch(
    `${API_URL}?limit=${limit}&minimum_rating=${minimumRating}&sort_by=rating`
  )
    .then(res => res.json())
    .then(json => json.data.movies);
};
