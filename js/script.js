"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Реализация ввода без цикла, требует 4 переменных вместо двух
/* const lastViewMovie0 = prompt('Один из последних просмотренных фильмов?', ''),
      ratingMovie0 = prompt('На сколько оцените его?', ''),
      lastViewMovie1 = prompt('Один из последних просмотренных фильмов?', ''),
      ratingMovie1 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastViewMovie0] = ratingMovie0;
personalMovieDB.movies[lastViewMovie1] = ratingMovie1; */

function rememberMyFilms() {
    for (let i = 0; i <= 1; i++) {
        const lastViewMovie = prompt('Один из последних просмотренных фильмов?', ''),
              ratingMovie = prompt('На сколько оцените его?', '');
    
        if (lastViewMovie != null && ratingMovie != null && lastViewMovie != '' && ratingMovie != '' && lastViewMovie.length < 50) {
            personalMovieDB.movies[lastViewMovie] = ratingMovie;
            console.log('Done!');
        } else {
            console.log('Error');
            i--;
        }
    }
}

// rememberMyFilms();

//Альтернативная реализация цикла с ипользование while
/* let i = 0;
while (i <= 1) {
    const lastViewMovie = prompt('Один из последних просмотренных фильмов?', ''),
    ratingMovie = prompt('На сколько оцените его?', '');

    if (lastViewMovie != null && ratingMovie != null && lastViewMovie != '' && ratingMovie != '' && lastViewMovie.length < 50) {
    personalMovieDB.movies[lastViewMovie] = ratingMovie;
    console.log('Done!');
    } else {
    console.log('Error');
    i--;
    }
    i++;
} */

//Альтернативная реализация цикла с ипользование do while
/* let i = 0;
do {
    const lastViewMovie = prompt('Один из последних просмотренных фильмов?', ''),
    ratingMovie = prompt('На сколько оцените его?', '');

    if (lastViewMovie != null && ratingMovie != null && lastViewMovie != '' && ratingMovie != '' && lastViewMovie.length < 50) {
    personalMovieDB.movies[lastViewMovie] = ratingMovie;
    console.log('Done!');
    } else {
    console.log('Error');
    i--;
    }
    i++; 
}
while (i <= 1); */

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }

}

showMyDB(personalMovieDB.privat);
// console.log(personalMovieDB);

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        personalMovieDB.genres[i] = prompt (`Ваш любимый жанр под номером ${i + 1}`);
    }
}

writeYourGenres();
