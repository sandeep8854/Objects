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
  // console.log(actualFilterData);

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
// console.log(funStayingGermany(users));

// Q3 Sort users based on their seniority level

function sortFunSeniorityLevel(users) {
  const seniorityOrder = {
    "Senior Javascript Developer": 5,
    "Senior Golang Developer": 4,
    "Python Developer": 3,
    "Intern - Javascript": 2,
    "Intern - Golang": 1,
  };
  const entriesObject = Object.entries(users);
  //console.log(entriesObject);
  const sortedUser = entriesObject.sort(([_, user1], [__, user2]) => {
    //  console.log(seniorityOrder[user1.desgination]);
    console.log(seniorityOrder[user1.desgination]); // seniortyOrder orders of object and based on user value and print the desination of seniortyOrder keys of value.
    if (seniorityOrder[user1.desgination] > seniorityOrder[user2.desgination]) {
      return -1;
    } else if (
      seniorityOrder[user1.desgination] < seniorityOrder[user2.desgination]
    ) {
      return 1;
    } else {
      return 0;
    }
  });
  const actualFormatData = sortedUser.reduce((acc, [userName, userDetails]) => {
    acc[userName] = userDetails;
    return acc;
  }, {});
  return actualFormatData;
}
// console.log(sortFunSeniorityLevel(users));

/*
{
  Rob: {
    age: 34,
    desgination: 'Senior Javascript Developer',
    interest: [ 'Walking his dog, Cooking' ],
    qualification: 'Masters',
    nationality: 'USA'
  },
  John: {
    age: 24,
    desgination: 'Senior Golang Developer',
    interests: [ 'Chess, Reading Comics, Playing Video Games' ],
    qualification: 'Masters',
    nationality: 'Greenland'
  },
  Pike: {
    age: 23,
    desgination: 'Python Developer',
    interests: [ 'Listing Songs, Watching Movies' ],
    qualification: "Bachaelor's Degree",
    nationality: 'Germany'
  },
  Wanda: {
    age: 24,
    desgination: 'Intern - Javascript',
    interests: [ 'Piano' ],
    qualification: 'Bachaelor',
    nationality: 'Germany'
  },
  Ron: {
    age: 19,
    desgination: 'Intern - Golang',
    interests: [ 'Video Games' ],
    qualification: 'Bachelor',
    nationality: 'UK'
  }
}
*/
//  for Designation - Senior Developer > Developer > Intern
//  for Age - 20 > 10`

//=============================================================================
//  Q4 Find all users with masters Degree.

function findMasterDegreeFunc(users) {
  const objectwithArray = Object.entries(users);
  const filterDatawithMaster = objectwithArray.filter(
    ([userName, userDetails]) => {
      return userDetails.qualification === "Masters";
    }
  );
  const arrangeData = filterDatawithMaster.reduce(
    (acc, [userName, userDetails]) => {
      acc[userName] = userDetails;
      return acc;
    },
    {}
  );
  return arrangeData;
}
// console.log(findMasterDegreeFunc(users));
/*
{
  John: {
    age: 24,
    desgination: 'Senior Golang Developer',
    interests: [ 'Chess, Reading Comics, Playing Video Games' ],
    qualification: 'Masters',
    nationality: 'Greenland'
  },
  Rob: {
    age: 34,
    desgination: 'Senior Javascript Developer',
    interest: [ 'Walking his dog, Cooking' ],
    qualification: 'Masters',
    nationality: 'USA'
  }
}
*/

// Q5 Group users based on their Programming language mentioned in their designation.

function groupBasedOnProgramming(users) {
  const objectValue = Object.values(users);
  // console.log(objectValue);
  let language = ["Golang", "Javascript", "Python"];
  const makingGroup = objectValue.reduce((acc, ele, index) => {
    // console.log(ele);
    const programmingLanguage = ele.desgination;
    //  console.log(typeof programmingLanguage);
    if (programmingLanguage.includes("Golang")) {
      ele.newLanguage = "Golang";
    } else if (programmingLanguage.includes("Javascript")) {
      ele.newLanguage = "Javascript";
    } else if (programmingLanguage.includes("Python")) {
      ele.newLanguage = "Python";
    }

    if (!acc[ele.newLanguage]) {
      acc[ele.newLanguage] = [];
    }
    acc[ele.newLanguage].push(ele);
    delete ele.newLanguage;
    return acc;
  }, {});
  return makingGroup;
}
// console.log(groupBasedOnProgramming(users));

/*
{
  Golang: [
    {
      age: 24,
      desgination: 'Senior Golang Developer',
      interests: [Array],
      qualification: 'Masters',
      nationality: 'Greenland'
    },
    {
      age: 19,
      desgination: 'Intern - Golang',
      interests: [Array],
      qualification: 'Bachelor',
      nationality: 'UK'
    }
  ],
  Javascript: [
    {
      age: 24,
      desgination: 'Intern - Javascript',
      interests: [Array],
      qualification: 'Bachaelor',
      nationality: 'Germany'
    },
    {
      age: 34,
      desgination: 'Senior Javascript Developer',
      interest: [Array],
      qualification: 'Masters',
      nationality: 'USA'
    }
  ],
  Python: [
    {
      age: 23,
      desgination: 'Python Developer',
      interests: [Array],
      qualification: "Bachaelor's Degree",
      nationality: 'Germany'
    }
  ]
}

*/
