let employeeData = [
  {
    id: 1,
    first_name: "Gregg",
    last_name: "Lacey",
    job: "Web Developer III",
    salary: "$3.62",
    location: "Malta",
  },
  {
    id: 2,
    first_name: "Hernando",
    last_name: "Scargill",
    job: "Sales Associate",
    salary: "$4.16",
    location: "France",
  },
  {
    id: 3,
    first_name: "Loren",
    last_name: "Doull",
    job: "Physical Therapy Assistant",
    salary: "$4.34",
    location: "U.S. Virgin Islands",
  },
  {
    id: 4,
    first_name: "Sherwood",
    last_name: "Adriano",
    job: "Web Developer II",
    salary: "$6.46",
    location: "Brazil",
  },
  {
    id: 5,
    first_name: "Addison",
    last_name: "Dofty",
    job: "Structural Engineer",
    salary: "$6.40",
    location: "Costa Rica",
  },
  {
    id: 6,
    first_name: "Jess",
    last_name: "McUre",
    job: "Software Test Engineer I",
    salary: "$4.06",
    location: "Colombia",
  },
  {
    id: 7,
    first_name: "Nevil",
    last_name: "Matussevich",
    job: "Safety Technician I",
    salary: "$3.83",
    location: "Poland",
  },
  {
    id: 8,
    first_name: "Ivonne",
    last_name: "Lamping",
    job: "Analog Circuit Design manager",
    salary: "$3.07",
    location: "China",
  },
  {
    id: 9,
    first_name: "Sigvard",
    last_name: "Linggood",
    job: "Dental Hygienist",
    salary: "$5.34",
    location: "Russia",
  },
  {
    id: 10,
    first_name: "Edna",
    last_name: "Mundwell",
    job: "Biostatistician III",
    salary: "$9.28",
    location: "United States",
  },
  {
    id: 11,
    first_name: "Cathyleen",
    last_name: "Conklin",
    job: "VP Quality Control",
    salary: "$5.28",
    location: "Brazil",
  },
  {
    id: 12,
    first_name: "Stephani",
    last_name: "Trase",
    job: "Editor",
    salary: "$8.49",
    location: "Indonesia",
  },
  {
    id: 13,
    first_name: "Enoch",
    last_name: "Buddles",
    job: "Pharmacist",
    salary: "$3.63",
    location: "Peru",
  },
  {
    id: 14,
    first_name: "Jennilee",
    last_name: "Watsham",
    job: "Programmer Analyst I",
    salary: "$9.24",
    location: "Indonesia",
  },
  {
    id: 15,
    first_name: "Tadeas",
    last_name: "Caslake",
    job: "Research Nurse",
    salary: "$4.18",
    location: "Macedonia",
  },
  {
    id: 16,
    first_name: "Joell",
    last_name: "Snasdell",
    job: "Librarian",
    salary: "$6.62",
    location: "Croatia",
  },
  {
    id: 17,
    first_name: "Ariana",
    last_name: "McGillacoell",
    job: "Chief Design Engineer",
    salary: "$6.56",
    location: "China",
  },
  {
    id: 18,
    first_name: "Doro",
    last_name: "Perrinchief",
    job: "VP Sales",
    salary: "$0.89",
    location: "Zambia",
  },
  {
    id: 19,
    first_name: "Con",
    last_name: "Basso",
    job: "Automation Specialist I",
    salary: "$4.18",
    location: "China",
  },
  {
    id: 20,
    first_name: "Trixy",
    last_name: "Ayliffe",
    job: "Compensation Analyst",
    salary: "$0.49",
    location: "South Africa",
  },
  {
    id: 21,
    first_name: "Luelle",
    last_name: "Puffett",
    job: "Executive Secretary",
    salary: "$8.25",
    location: "China",
  },
  {
    id: 22,
    first_name: "Sylvester",
    last_name: "Novic",
    job: "Office Assistant I",
    salary: "$1.65",
    location: "South Korea",
  },
  {
    id: 23,
    first_name: "Harmon",
    last_name: "Pilch",
    job: "Structural Analysis Engineer",
    salary: "$0.48",
    location: "China",
  },
  {
    id: 24,
    first_name: "Nollie",
    last_name: "Cannavan",
    job: "Database Administrator I",
    salary: "$4.21",
    location: "Poland",
  },
  {
    id: 25,
    first_name: "Elena",
    last_name: "Asquez",
    job: "Software Test Engineer III",
    salary: "$9.42",
    location: "Azerbaijan",
  },
  {
    id: 26,
    first_name: "Scotty",
    last_name: "Fearnside",
    job: "Assistant Manager",
    salary: "$2.80",
    location: "Russia",
  },
  {
    id: 27,
    first_name: "Xaviera",
    last_name: "Wickrath",
    job: "Administrative Assistant I",
    salary: "$6.62",
    location: "Thailand",
  },
  {
    id: 28,
    first_name: "Basile",
    last_name: "Luna",
    job: "Data Coordiator",
    salary: "$2.61",
    location: "Chile",
  },
  {
    id: 29,
    first_name: "Fayth",
    last_name: "Lindop",
    job: "Health Coach II",
    salary: "$5.14",
    location: "Indonesia",
  },
  {
    id: 30,
    first_name: "Curtice",
    last_name: "Mea",
    job: "Senior Financial Analyst",
    salary: "$5.00",
    location: "Colombia",
  },
];

// 1- Find all Web Developers
//  2- Convert all the salary values into proper numbers instead of strings
// Questions - 3. Assume that each salary amount is a factor of 10000 and correct it but add it as a new key (corrected_salary or something)
// Questions:- 4 Find the sum of all salaries
// Questions:- 5. Find the sum of all salaries based on country using only HOF method
// Questions:- 6  Find the average salary of based on country using only HOF method

function convertStringIntoNumber(employeeData) {
  // static solution.
  //   let result = employeeData.reduce((acc, element) => {
  //     if (
  //       element.job === "Web Developer III" ||
  //       element.job === "Web Developer II"
  //     ) {
  //       acc.push(element);
  //     }

  //     return acc;
  //   }, []);
  //   return result;
  // End solution.

  const result = employeeData.reduce((acc, element) => {
    if (element.job.toLowerCase().includes("web developer")) {
      acc.push(element);
    }
    return acc;
  }, []);
  return result;
}
// console.log(convertStringIntoNumber(employeeData));

/*
[
  {
    id: 1,
    first_name: 'Gregg',
    last_name: 'Lacey',
    job: 'Web Developer III',
    salary: '$3.62',
    location: 'Malta'
  },
  {
    id: 4,
    first_name: 'Sherwood',
    last_name: 'Adriano',
    job: 'Web Developer II',
    salary: '$6.46',
    location: 'Brazil'
  }
]
*/

//-----------------------------------------------------------------------------------
// 2- 2- Convert all the salary values into proper numbers instead of strings

function convertStrIntoNumber(employeeData) {
  const employeeDataNumSal = employeeData.reduce((acc, element) => {
    const salInNumber = parseFloat(element.salary.replace("$", ""));
    //  console.log(salInNumber);
    const emplwithSal = { ...element, salary: salInNumber };
    // console.log(emplwithSal);
    acc.push(emplwithSal);
    return acc;
  }, []);
  return employeeDataNumSal;
}
// console.log(convertStrIntoNumber(employeeData));
/*
{
    id: 30,
    first_name: 'Curtice',
    last_name: 'Mea',
    job: 'Senior Financial Analyst',
    salary: 5,
    location: 'Colombia'
  }
  */
//----------------------------------------------------------------------------------
// 3- Assume that each salary amount is a factor of 10000 and correct it but add it as a new key (corrected_salary or something)

function salAmountFactor(employeeData) {
  const emplyDataAfterAdded = employeeData.reduce((acc, element) => {
    const factorData = (
      parseFloat(element.salary.replace("$", "")) * 10000
    ).toFixed(2);

    // new object
    const modifiedEmployee = { ...element, corrected_salary: `$${factorData}` };
    acc.push(modifiedEmployee);
    return acc;
  }, []);
  return emplyDataAfterAdded;
}
//console.log(salAmountFactor(employeeData));

/*
{
    id: 30,
    first_name: 'Curtice',
    last_name: 'Mea',
    job: 'Senior Financial Analyst',
    salary: '$5.00',
    location: 'Colombia',
    corrected_salary: '$50000.00'
  }
*/

//--------------------------------------------------------------------------------

// Questions:- 4 Find the sum of all salaries

function sumOfAllSal(employeeData) {
  const afterAddedSal = employeeData.reduce((acc, element) => {
    const salPro = parseFloat(element.salary.replace("$", ""));
    //  console.log(salPro);
    acc += salPro;
    return acc;
  }, 0);
  return afterAddedSal.toFixed(2);
}
// console.log(sumOfAllSal(employeeData));

// 146.30 output.

//--------------------------------------------------------------------------------------

//  Questions:- 5. Find the sum of all salaries based on country using only HOF method

function basedOnCountry(employeeData) {
  const sumSalariesByCountry = employeeData.reduce((acc, employee) => {
    const country = employee.location;
    // console.log(country);
    const salary = parseFloat(employee.salary.replace("$", ""));
    //  console.log(salary);
    //   console.log(acc[country]);

    if (acc[country] === undefined) {
      acc[country] = salary;
    } else {
      acc[country] = acc[country] + salary;
    }
    //  acc[country] = (acc[country] || 0) + salary;
    return acc;
  }, {});
  return sumSalariesByCountry;
}
//console.log(basedOnCountry(employeeData));
/*
{
  Malta: 3.62,
  France: 4.16,
  'U.S. Virgin Islands': 4.34,
  Brazil: 11.74,
  'Costa Rica': 6.4,
  Colombia: 9.059999999999999,
  Poland: 8.04,
  China: 22.54,
  Russia: 8.14,
  'United States': 9.28,
  Indonesia: 22.87,
  Peru: 3.63,
  Macedonia: 4.18,
  Croatia: 6.62,
  Zambia: 0.89,
  'South Africa': 0.49,
  'South Korea': 1.65,
  Azerbaijan: 9.42,
  Thailand: 6.62,
  Chile: 2.61
}
*/

//------------------------------------------------------------------------

//Questions:- 6  Find the average salary of based on country using only HOF method

function averageSalBasedOnCountry(employeeData) {
  const employeesByCountry = employeeData.reduce((acc, element) => {
    const country = element.location;
    if (!acc[country]) {
      acc[country] = [];
    }
    acc[country].push(element);
    return acc;
  }, {});

  //  console.log(employeesByCountry);

  const averageSalByCountry = Object.keys(employeesByCountry).reduce(
    (acc1, ele1) => {
      const totalSalary = employeesByCountry[ele1].reduce((acc2, ele2) => {
        const sal = parseFloat(ele2.salary.replace("$", ""));
        acc2 += sal;
        return acc2;
      }, 0);
      const averageSalary = totalSalary / employeesByCountry[ele1].length;
      acc1[ele1] = averageSalary;
      return acc1;
    },
    {}
  );
  return averageSalByCountry;
  //   const employeesByCountry = employeeData.reduce((acc, employee) => {
  //     const country = employee.location;
  //     // console.log(acc[country]);
  //     if (!acc[country]) {
  //       acc[country] = [];
  //       //  console.log("sande");
  //     }
  //     acc[country].push(employee);
  //     return acc;
  //   }, {});

  //   //  console.log(employeesByCountry);
  //   // Calculate the average salary for each country
  //   //console.log(Object.keys(employeesByCountry));

  //   const averageSalariesByCountry = Object.keys(employeesByCountry).reduce(
  //     (acc, country) => {
  //       //  console.log(employeesByCountry[country].length);
  //       const totalSalary = employeesByCountry[country].reduce(
  //         (acc, employee) => {
  //           // Remove '$' and convert salary to a number
  //           const salary = parseFloat(employee.salary.replace("$", ""));
  //           acc += salary;
  //           return acc;
  //         },
  //         0
  //       );

  //       const averageSalary = totalSalary / employeesByCountry[country].length;

  //       acc[country] = averageSalary;
  //       return acc;
  //     },
  //     {}
  //   );
  //   return averageSalariesByCountry;
}
console.log(averageSalBasedOnCountry(employeeData));
