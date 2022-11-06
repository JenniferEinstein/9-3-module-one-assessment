/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  //add parameter
  /* instructions to self
input = array of movies
output = movie titles
1. create an array for the movies to go into.
2. look into each movie object to find the value of the key pair that is the movie title
2a. Do this by iterating the titles
3. push the movie title into the new array
4. return array
*/

  const titlesArray = [];
  for (let i = 0; i < movies.length; i++) {
    titlesArray.push(movies[i].title);
  }
  return titlesArray;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
    /* instructions to self
        2.0. add paramter/s
        input = array of movie objects
        output = one number: the highest metascore that any move rates
        2.1. set variable highest to 0
        2.2. go to the first movie in the array
        2.3. find the meta score of the first movie. If it is higher than 0, replace /highest/ with that number.
        2.4. go to the next movie and repeat.
        2.5. keep doing this until you have gone through all the movies.
        2.6. return highestMS
        after:  I did not think it would return a string, but it did. Could I have returned a number the whole time?
        */

  let highestMS = 0
  for (let i=0; i<movies.length; i++) {
    if(movies[i].metascore > highestMS) {
      highestMS=movies[i].metascore
    }
  }
return +highestMS
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
    /* instructions to self
        input = array of movie objects
        output = one number: the average of all IMDB ratings
        3.1  Add parameter movies
        3.2  set variable for comboRating
        3.2a set variable for averageRating 
        3.3  option one. Add all the IMDB  ratingss and then divide by the number of movies (known by length of the array)
        3.3a  add each item into an array and then add an array. NO
        3.3aa sum the numbers as I iterate.
        3.4 return averageRating

        problems: how to turn the rating that is over 10 into an actual number since it is reading as a string.

        after: Will the ratings always come in the same order? Is there a way to make sure that the source is IMDB before adding it?
        */

  if (movies.length===0) {return 0}
  let comboRating = 0
  let averageRating = 0

  for (let i=0;i<movies.length;i++) {
    comboRating += +(movies[i].ratings[0].value.slice(0,3))
  }
  averageRating = comboRating/(movies.length)

  return averageRating
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
/* instructions to self
  input = movies objects
  output = an object containing how many movies does each rating cagegory hold (do we need to account for ratings if there are none in that category? Probably not.)
  4.1  add parameter
  4.2  add guard clause to make sure there are any movies. [this could return naturally without a guard clause]
  4.3  add empty object to push ratings into
  4.4  Should i use the for loop to count up numbers for each rating? Should I use filter to count up numbers for each rating? Is there a way to do that so I don't have to know what the ratings are before I start counting them up? Can I do these all at once or do I have to do them one by one? But if I do it this way, all I will get back is the count, not the keys.
  */

let ratingsObject = {}
let arrayPG

let arrayP
let arrayPG13
let arrayR



// for (let i=0;i<movies.length;i++){
//   if (movies[i].rated = "PG"){
//     arrayPG.push(movies.title)
//   } 
//   if (movies[i].rated = "P"){
//     arrayP.push(movies.title)
//   } 
//   if (movies[i].rated = "PG13"){
//     arrayPG13.push(movies.title)
//   } 
//   if (movies[i].rated = "R"){
//     arrayR.push(movies.title)
//   } 

function isPG(movies,PG) {
  var r=0
  for (i=0;i<movies.length; i++){
    if (movies[i] == PG){r++} 
    }return r
}

function isP(movies,P) {
  var n=0
  for (i=0;i<movies.length; i++){
    if (movies[i] == P){n++} 
    }return n
}

if (isPG != 0){
  arrayPG = {PG:isPG}
}

if (isP != 0) {
  arrayP = {P:isP}
}

ratingsObject=[arrayP, arrayPG]

// let filteredPG=movies.filter(isPG);

// let countPG = movies.filter(movies)

return ratingsObject
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, imdbID) {
/*
5.1 insert parameters
5.2 insert guard clause: return null for empty array or no ID match
5.3 take the IMDB id parameter and see if it matches any of the IDs in the movie object list. If it does, return the movie object.

why isn't this working?
*/


if (movies = []){
  return null
} 

for (let i=0; i<movies.length; i++){
  if((movies[i].imdbID)===imdbID) {
    return movies[i]
  }
} return movies[i] .  //does not change result
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  /*
  add parameters
  take the genre inputted and return all movies that fall under that genre.
  Movies are listed under more than one genre so be aware of that.
  return a list of movies in an array of
  */

let desiredMovies = []
// genre=genre.toLowerCase()
// genre=string[0].toUpperCase()

for (let i=0; i<movies.length; i++) {

  if(movies[i].genre.includes(genre)) {
    desiredMovies.push(movies[i])
  }
}


return desiredMovies
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {

  let moviesRequested=[];
  for (let i=0; i<movies.length; i++){
    if (movies[i].released.substr(-4,4) < year+1){
      moviesRequested.push(movies[i])
    }

  }
return moviesRequested
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {

/*
shouldn't this just be the metascore question? No, because you have to return the name of the movie. Also, I need to change the box office amount into a number instead of a string. Get rid of the dollar sign. Get rid of the commas. Join everything back together.

OK, but why is Fantasia coming back as having returned the most amount of money. It clearly hasn't. Also, I tried using a guard clause, but that turned everything null.

*/

let highestBox = 0
let movieMost = null

for (let i=0; i<movies.length; i++) {
  let reduxBoxOffice = movies[i].boxOffice.slice(1).replace(/,/g,"");
  if(reduxBoxOffice > highestBox) {
    highestBox=reduxBoxOffice;
    movieMost = movies[i].title;
  }
}
return movieMost
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
