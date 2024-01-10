let person = [
  {
    id: 1,
    first_name: "Valera",
    last_name: "Pinsent",
    email: "vpinsent0@google.co.jp",
    gender: "Male",
    ip_address: "253.171.63.171",
  },
  {
    id: 2,
    first_name: "Kenneth",
    last_name: "Hinemoor",
    email: "khinemoor1@yellowbook.com",
    gender: "Polygender",
    ip_address: "50.231.58.150",
  },
  {
    id: 3,
    first_name: "Roman",
    last_name: "Sedcole",
    email: "rsedcole2@addtoany.com",
    gender: "Genderqueer",
    ip_address: "236.52.184.83",
  },
  {
    id: 4,
    first_name: "Lind",
    last_name: "Ladyman",
    email: "lladyman3@wordpress.org",
    gender: "Male",
    ip_address: "118.12.213.144",
  },
  {
    id: 5,
    first_name: "Jocelyne",
    last_name: "Casse",
    email: "jcasse4@ehow.com",
    gender: "Agender",
    ip_address: "176.202.254.113",
  },
  {
    id: 6,
    first_name: "Stafford",
    last_name: "Dandy",
    email: "sdandy5@exblog.jp",
    gender: "Female",
    ip_address: "111.139.161.143",
  },
  {
    id: 7,
    first_name: "Jeramey",
    last_name: "Sweetsur",
    email: "jsweetsur6@youtube.com",
    gender: "Genderqueer",
    ip_address: "196.247.246.106",
  },
  {
    id: 8,
    first_name: "Anna-diane",
    last_name: "Wingar",
    email: "awingar7@auda.org.au",
    gender: "Agender",
    ip_address: "148.229.65.98",
  },
  {
    id: 9,
    first_name: "Cherianne",
    last_name: "Rantoul",
    email: "crantoul8@craigslist.org",
    gender: "Genderfluid",
    ip_address: "141.40.134.234",
  },
  {
    id: 10,
    first_name: "Nico",
    last_name: "Dunstall",
    email: "ndunstall9@technorati.com",
    gender: "Female",
    ip_address: "37.12.213.144",
  },
];

//------------------------------------------------------------------
// Questions:-1 Find all people who are Agender

function findAgender(person) {
  const fil = person.filter((ele, index) => {
    return ele.gender === "Agender";
  });
  return fil;
}
// console.log(findAgender(person));

// Question:-2 Split their IP address into their components eg. 111.139.161.143 has components [111, 139, 161, 143]

function findIPAddress(person) {
  //---------------------------------------------------------
  // using map.
  //   const ipAdress = person.map((ele, index) => {
  //     return ele.ip_address.split(".").map(Number);
  //   });
  //   return ipAdress;

  //-----------------------------------------------------
  // using reduce.
  const ipAddress = person.map((ele) => {
    const ipwithoutDot = ele.ip_address.split(".");
    const numIP = ipwithoutDot.reduce((acc, eleIP) => {
      acc.push(parseInt(eleIP));
      return acc;
    }, []);
    return numIP;
  });
  return ipAddress;
}
// console.log(findIPAddress(person));

//  3. Find the sum of all the fourth components of the ip addresses.

function sumOfCompo(person) {
  const sumOf = person.reduce((acc, ele) => {
    const splitIP = ele.ip_address.split(".");
    //  console.log(splitIP);
    const fourth = parseInt(splitIP[3], 10);
    acc += fourth;
    return acc;
  }, 0);
  return sumOf;
}
// console.log(sumOfCompo(person));

// Quetions 4. Compute the full name of each person and store it in a new key (full_name or something) for each person.

function fullName(person) {
  const withFullName = person.reduce((acc, ele) => {
    const fullNameVar = `${ele.first_name} ${ele.last_name}`;
    // new object with other exiting properties.
    const newObejectwithFullName = {
      ...ele,
      full_Name: fullNameVar,
    };
    acc.push(newObejectwithFullName);
    return acc;
  }, []);
  return withFullName;
}
// console.log(fullName(person));

// 5. Filter out all the .org emails

function filterOrg(person) {
  const filteredPeople = person.filter((individual) => {
    // return !individual.email.endsWith(".org");
    const email = individual.email.includes(".org");
    return email;
  });
  return filteredPeople;
  //---------------------------------------------------------------
  //   const filteredOrgEmails = person.reduce((acc, currentPerson) => {
  //     // Check if the email ends with '.org'
  //     if (!currentPerson.email.endsWith(".org")) {
  //       acc.push(currentPerson);
  //     }
  //     return acc;
  //   }, []);
  //   return filteredOrgEmails;

  //----------------------------------------------------------------------
}
// console.log(filterOrg(person));
// Questions 6. Calculate how many .org, .au, .com emails are there

function howManyOrgAUCom(person) {
  const emailCounts = person.reduce((acc, currentPerson) => {
    const emailDomain = currentPerson.email.split(".").pop(); // Extract the domain extension

    // Check the domain extension and update the count
    if (emailDomain === "org") {
      acc.orgCount = (acc.orgCount || 0) + 1;
    } else if (emailDomain === "au") {
      acc.auCount = (acc.auCount || 0) + 1;
    } else if (emailDomain === "com") {
      acc.comCount = (acc.comCount || 0) + 1;
    }
    return acc;
  }, {});
  return emailCounts;
}
//console.log(howManyOrgAUCom(person));

// { comCount: 5, orgCount: 2, auCount: 1 }
//---------------------------------------------------------------
// 7. Sort the data in descending order of first name

function sortOrder(person) {
  const sortedData = person.sort((a, b) => {
    let nameA = a.first_name.toLowerCase();
    let nameB = b.first_name.toLowerCase();
    if (nameA > nameB) {
      return -1; //indicate descening order
    } else if (nameA < nameB) {
      return 1; //indicate desending order.
    } else {
      return 0; // name are equal.
    }
  });
  return sortedData;
}
console.log(sortOrder(person));
