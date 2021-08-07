"use strict";

const numberOfFlims = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFlims,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastViewMovie0 = prompt('Один из последних просмотренных фильмов?', ''),
      ratingMovie0 = prompt('На сколько оцените его?', ''),
      lastViewMovie1 = prompt('Один из последних просмотренных фильмов?', ''),
      ratingMovie1 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastViewMovie0] = ratingMovie0;
personalMovieDB.movies[lastViewMovie1] = ratingMovie1;

console.log(personalMovieDB);