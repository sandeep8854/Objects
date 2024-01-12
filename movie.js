const favouritesMovies = {
  Matrix: {
    imdbRating: 8.3,
    actors: ["Keanu Reeves", "Carrie-Anniee"],
    oscarNominations: 2,
    genre: ["sci-fi", "adventure"],
    totalEarnings: "$680M",
  },
  FightClub: {
    imdbRating: 8.8,
    actors: ["Edward Norton", "Brad Pitt"],
    oscarNominations: 6,
    genre: ["thriller", "drama"],
    totalEarnings: "$350M",
  },
  Inception: {
    imdbRating: 8.3,
    actors: ["Tom Hardy", "Leonardo Dicaprio"],
    oscarNominations: 12,
    genre: ["sci-fi", "adventure"],
    totalEarnings: "$870M",
  },
  "The Dark Knight": {
    imdbRating: 8.9,
    actors: ["Christian Bale", "Heath Ledger"],
    oscarNominations: 12,
    genre: ["thriller"],
    totalEarnings: "$744M",
  },
  "Pulp Fiction": {
    imdbRating: 8.3,
    actors: ["Sameul L. Jackson", "Bruce Willis"],
    oscarNominations: 7,
    genre: ["drama", "crime"],
    totalEarnings: "$455M",
  },
  Titanic: {
    imdbRating: 8.3,
    actors: ["Leonardo Dicaprio", "Kate Winslet"],
    oscarNominations: 13,
    genre: ["drama"],
    totalEarnings: "$800M",
  },
};

//  NOTE: For all questions, the returned data must contain all the movie information //including its name.

//   Q1. Find all the movies with total earnings more than $500M.

function totalEarningFunc(favouritesMovies) {
  // Step - 1
  //-------------------------------------------------------------------------
  /*
  const keyElement = Object.keys(favouritesMovies).reduce((acc, ele) => {
    // console.log(favouritesMovies[ele]); // value.
    //   console.log(ele); // keys.
    const numberEarning = favouritesMovies[ele].totalEarnings;
    const withDolorAndM = Number(
      numberEarning.slice(1, numberEarning.length - 1)
    );

    if (withDolorAndM && withDolorAndM > 500) {
      if (!acc[ele]) {
        acc[ele] = [];
      }
      acc[ele] = favouritesMovies[ele];
    }
    return acc;
  }, {});
  return keyElement;
*/
  //--------------------------------------------------------------------------------
  // Method 2-
  const makeAnArray = Object.entries(favouritesMovies); // from keys and value become in an array
  // console.log(makeAnArray);
  //  let str = "$500M";
  //  console.log(Number(str.replace(/\D/g, ""))); // 500

  const movieMoreThen500 = makeAnArray.reduce((acc, [movie, details]) => {
    if (Number(details.totalEarnings.replace(/\D/g, "")) > 500) {
      acc[movie] = details;
    }
    return acc;
  }, {});
  return movieMoreThen500;
}
//console.log(totalEarningFunc(favouritesMovies));

/*
{
  Matrix: {
    imdbRating: 8.3,
    actors: [ 'Keanu Reeves', 'Carrie-Anniee' ],
    oscarNominations: 2,
    genre: [ 'sci-fi', 'adventure' ],
    totalEarnings: '$680M'
  },
  Inception: {
    imdbRating: 8.3,
    actors: [ 'Tom Hardy', 'Leonardo Dicaprio' ],
    oscarNominations: 12,
    genre: [ 'sci-fi', 'adventure' ],
    totalEarnings: '$870M'
  },
  'The Dark Knight': {
    imdbRating: 8.9,
    actors: [ 'Christian Bale', 'Heath Ledger' ],
    oscarNominations: 12,
    genre: [ 'thriller' ],
    totalEarnings: '$744M'
  },
  Titanic: {
    imdbRating: 8.3,
    actors: [ 'Leonardo Dicaprio', 'Kate Winslet' ],
    oscarNominations: 13,
    genre: [ 'drama' ],
    totalEarnings: '$800M'
  }
}
*/

//    Q2. Find all the movies who got more than 3 oscarNominations and also totalEarning are more than $500M.

function oscarAnd500MFunc(favouritesMovies) {
  const makeAnArray = Object.entries(favouritesMovies); // from keys and value become in an array
  //  console.log(makeAnArray);  // key value become the inside the array.

  const oscarAnd500M = makeAnArray.reduce((acc, [movie, details]) => {
    //   console.log(movie); // keys
    //  console.log(details); // value
    let earningInNumber = details.totalEarnings.replace(/\D/g, "");
    // console.log(earningInNumber);  // like as 500 600 785 etc.
    if (earningInNumber > 500 && details.oscarNominations > 3) {
      acc[movie] = details;
    }
    return acc;
  }, {});
  return oscarAnd500M;
}
// console.log(oscarAnd500MFunc(favouritesMovies));
/*
{
  Inception: {
    imdbRating: 8.3,
    actors: [ 'Tom Hardy', 'Leonardo Dicaprio' ],
    oscarNominations: 12,
    genre: [ 'sci-fi', 'adventure' ],
    totalEarnings: '$870M'
  },
  'The Dark Knight': {
    imdbRating: 8.9,
    actors: [ 'Christian Bale', 'Heath Ledger' ],
    oscarNominations: 12,
    genre: [ 'thriller' ],
    totalEarnings: '$744M'
  },
  Titanic: {
    imdbRating: 8.3,
    actors: [ 'Leonardo Dicaprio', 'Kate Winslet' ],
    oscarNominations: 13,
    genre: [ 'drama' ],
    totalEarnings: '$800M'
  }
}
*/

//    Q.3 Find all movies of the actor "Leonardo Dicaprio".

function actorLeonardoDicaprio(favouritesMovies) {
  const makeAnArray = Object.entries(favouritesMovies); // from keys and value become in an array
  // console.log(makeAnArray); // key value become the inside the array.

  const actorLeonardo = makeAnArray.reduce((acc, [movie, details]) => {
    // console.log(movie); // keys
    // console.log(details); // value
    if (details.actors.indexOf("Leonardo Dicaprio") > -1) {
      acc[movie] = details;
    }
    return acc;
  }, {});
  return actorLeonardo;
}
// console.log(actorLeonardoDicaprio(favouritesMovies));

/*
{
  Inception: {
    imdbRating: 8.3,
    actors: [ 'Tom Hardy', 'Leonardo Dicaprio' ],
    oscarNominations: 12,
    genre: [ 'sci-fi', 'adventure' ],
    totalEarnings: '$870M'
  },
  Titanic: {
    imdbRating: 8.3,
    actors: [ 'Leonardo Dicaprio', 'Kate Winslet' ],
    oscarNominations: 13,
    genre: [ 'drama' ],
    totalEarnings: '$800M'
  }
}
*/
//    Q.4 Sort movies (based on IMDB rating)
//        if IMDB ratings are same, compare totalEarning as the secondary metric.

function basedOnIMDBOrTotalEarning(favouritesMovies) {
  const entriesArray = Object.entries(favouritesMovies);
  //  console.log(entriesArray); // first keys and value become the inside the array.
  const resultSort = entriesArray.sort(([, aMovie], [, bMovie]) => {
    //  console.log(aMovie); // except 1st element he give all element only value because key as taking as empty.
    //  console.log(bMovie); // except last element he give remainig element.and comma taking
    // which one i don't want. and only value will be printed.
    if (aMovie.imdbRating !== bMovie.imdbRating) {
      //   return aMovie.imdbRating - bMovie.imdbRating;  // both the same things.
      if (aMovie.imdbRating < bMovie.imdbRating) {
        return -1;
      } else if (aMovie.imdbRating > bMovie.imdbRating) {
        return 1;
      } else {
        return 0;
      }
    }

    // if imdbRating are same compare with total earning.

    const earningA = Number(aMovie.totalEarnings.replace(/\D/g, ""));
    //   console.log(earningA); //
    const earningB = Number(bMovie.totalEarnings.replace(/\D/g, ""));
    //  console.log(earningB);
    if (earningA < earningB) {
      return -1;
    } else if (earningA > earningB) {
      return 1;
    } else {
      return 0;
    }
  });
  // console.log(resultSort); // sort as a asending order.
  return Object.fromEntries(resultSort);
}
// console.log(basedOnIMDBOrTotalEarning(favouritesMovies));

///     Q.5 Group movies based on genre. Priority of genres in case of multiple genres present are:
//    drama > sci-fi > adventure > thriller > crime
