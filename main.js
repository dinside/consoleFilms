// const result = confirm('Are you here');
// const answer = prompt('how years', "1");
// console.log(typeof(answer));

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}; 

const a = prompt('Один из последних просмотренных фильмов', 'На сколько оцените его?'),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов', 'На сколько оцените его?'),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);