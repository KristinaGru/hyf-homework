const shortTitleMovies = movies.filter(
  (movie) => movie.title.split(' ').length < 3
);
console.log('movies with a short title:', shortTitleMovies);

const longMovieTitles = movies
  .filter((movie) => movie.title.split(' ').length > 6)
  .map((movie) => movie.title);
console.log('long movie titles:', longMovieTitles);

const eightiesMoviesAmount = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
).length;
console.log('number of movies made between 1980-1989:', eightiesMoviesAmount);

const tagMovies = movies.map((movie) => {
  return {
    ...movie,
    tag: movie.rating >= 7 ? 'Good' : movie.rating < 4 ? 'Bad' : 'Average'
  };
});
console.log('new array that has an extra key called tag:', tagMovies);

const highRatings = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log('ratings of the movies higher than 6:', highRatings);

const words = ['surfer', 'alien', 'benjamin'];
const moviesContainingWords = movies.filter((movie) =>
  words.some((word) => movie.title.toLowerCase().includes(word))
).length;
console.log(
  'total number of movies containing keywords:',
  moviesContainingWords
);

const dublicateWordMovies = movies
  .map((movie) => {
    const words = movie.title.toLowerCase().split(' ');
    if (new Set(words).size !== words.length) {
      return movie;
    }
  })
  .filter(Boolean);
console.log(
  'movies where a word in the title is duplicated:',
  dublicateWordMovies
);

const averageRating =
  movies.map((movie) => movie.rating).reduce((a, b) => a + b) / movies.length;
console.log('average rating of all the movies:', averageRating.toFixed(2));

const ratings = tagMovies.reduce((movie, cv) => {
  !movie[cv.tag] ? (movie[cv.tag] = 1) : movie[cv.tag]++;
  return movie;
}, {});

console.log('total number of Good, Average and Bad movies:', ratings);
