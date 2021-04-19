const numberOfFilms = [];
numberOfFilms[0] = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt('Один из последних просмотренных фильвом?', '');
const b = +prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильвом?', '');
const d = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
