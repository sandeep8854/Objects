const users = {
  John: {
    age: 24,
    desgination: "Senior Golang Developer",
    interests: ["Chess, Reading Comics, Playing Video Games"],
    qualification: "Masters",
    nationality: "Greenland",
  },
  Ron: {
    age: 19,
    desgination: "Intern - Golang",
    interests: ["Video Games"],
    qualification: "Bachelor",
    nationality: "UK",
  },
  Wanda: {
    age: 24,
    desgination: "Intern - Javascript",
    interests: ["Piano"],
    qualification: "Bachaelor",
    nationality: "Germany",
  },
  Rob: {
    age: 34,
    desgination: "Senior Javascript Developer",
    interest: ["Walking his dog, Cooking"],
    qualification: "Masters",
    nationality: "USA",
  },
  Pike: {
    age: 23,
    desgination: "Python Developer",
    interests: ["Listing Songs, Watching Movies"],
    qualification: "Bachaelor's Degree",
    nationality: "Germany",
  },
};

// Q1 Find all users who are interested in playing video games.

function playingVideoGame(users) {
  const keyResultData = Object.keys(users).reduce((acc, ele) => {
    // console.log(ele);
    const nameOfUserValue = users[ele]; //we have key so we can access the value.
    //  console.log(nameOfPlayer);
    let tempArr = nameOfUserValue.interests;
    // console.log(tempArr);
    if (tempArr !== undefined && tempArr[0].includes("Playing Video Games")) {
      acc.push(users[ele]);
    }
    return acc;
  }, []);
  return keyResultData;
}
//console.log(playingVideoGame(users));
/*
[
  {
    age: 24,
    desgination: 'Senior Golang Developer',
    interests: [ 'Chess, Reading Comics, Playing Video Games' ],
    qualification: 'Masters',
    nationality: 'Greenland'
  }
]
*/
//=============================================================================
// Q2 Find all users staying in Germany.

function funStayingGermany(users) {
  const usersInGermany = Object.entries(users);
  const filterData = usersInGermany.filter(([userName, userDetails]) => {
    return userDetails.nationality === "Germany";
  });

  const actualFilterData = filterData.reduce((acc, [userName, userDetails]) => {
    acc[userName] = userDetails;
    return acc;
  }, {});
  console.log(actualFilterData);

  //===========================================================
  /*
  const inGermany = Object.keys(users).reduce((acc, ele) => {
    const userValue = users[ele];
    //   console.log(userValue);
    if (userValue.nationality && userValue.nationality === "Germany") {
      acc.push(users[ele]);
    }
    return acc;
  }, []);
  return inGermany;
  */
  //================================================================
}
console.log(funStayingGermany(users));

// Q3 Sort users based on their seniority level
//  for Designation - Senior Developer > Developer > Intern
//  for Age - 20 > 10
//  Q4 Find all users with masters Degree.
// Q5 Group users based on their Programming language mentioned in their designation.
