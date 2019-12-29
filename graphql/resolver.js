import {
  users,
  getById,
  getMovieById,
  getMovies,
  addMovie,
  removeMovie,
  getListOfMovies
} from "./data";

export const resolvers = {
  Query: {
    name: () => "It' me!",
    user: (_, args) => {
      console.log(args);
      const { id } = args;
      return getById(id);
    },
    users: () => users,
    movies: () => getMovies(),
    movie: (_, { id }) => getMovieById(id),
    listOfMovies: (_, { limit, minimum_rating }) =>
      getListOfMovies(limit, minimum_rating)
  },
  Mutation: {
    addMovie: (_, { title, score }) => {
      return addMovie({ title, score });
    },
    removeMovie: (_, { id }) => {
      return removeMovie(id);
    }
  }
};
