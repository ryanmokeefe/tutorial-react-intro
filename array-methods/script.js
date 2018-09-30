console.log("hello world")

const wdiInstructors = [
    {
      name: {
        first: 'Andrew',
        last: 'Whitley'
      },
      cohort: 19
    },
    {
      name: {
        first: 'Perry',
        last: 'Fustero'
      },
      cohort: 19
    },
    {
      name: {
        first: 'Zakk',
        last: 'Fleischmann'
      },
      cohort: 19
    },
    {
      name: {
        first: 'Ali',
        last: 'Spittel'
      },
      cohort: 20
    },
    {
      name: {
        first: 'Mike',
        last: 'Nabil'
      },
      cohort: 20
    },
    {
      name: {
        first: 'Max Power',
        last: 'Oppenheimer'
      },
      cohort: 20
    },
    {
      name: {
        first: 'James',
        last: 'Reichard'
      },
      cohort: 20
    }
  ]

//   for (let i = 0; i < wdiInstructors.length; i++) {
//         let currentInstructor = wdiInstructors[i]
//         let instructorName = currentInstructor.name.first + " " + currentInstructor.name.last
//         let instructorGreeting = `${"Hi, my name is " + instructorName + " and I teach WDI " + currentInstructor.cohort}`

//         console.log(instructorGreeting)
//   }

// for (let i = 0; i < wdiInstructors.length; i++) {
//     let currentInstructor = wdiInstructors[i]
//     printInstructorGreeting(currentInstructor)
//   }
  
wdiInstructors.forEach(printInstructorGreeting)

  function printInstructorGreeting (currentInstructor) {
    let instructorName = currentInstructor.name.first + " " + currentInstructor.name.last;
    let instructorGreeting = `Hi, I'm ${instructorName}. I teach WDI ${currentInstructor.cohort}`
    console.log(instructorGreeting)
  }


//   let numbers = [1,3,6,7]
  
//   let newNumbers = numbers.forEach(triple)
  
//   function triple (num) {
//     return num * 3
//   }

let numbers = [1,3,6,7]

let newNumbers = numbers.map()

function triple (num) {
  return num * 3
}

//////

["bob", "cathy", "kim", "henry"].map(function(currentValue, index, array){
	console.log(currentValue, index)
})
VM266:2 

//////// MAP

function greetDevelopers(list) {
    // thank you for checking out my kata :)
    return list.map(function(listItem) {
    listItem.greeting = `Hi ${listItem.firstName}, what do you like the most about ${listItem.language}?`
    return listItem
  
    })
    
  }

  // SAME AS:

  function greetDevelopers(list) {
    return list.map(greetPerson)
    function greetPerson (person) {
      person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`;
      return person;
    }
  }
  
  var list1 = [
    {
      firstName: "Sofia",
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java"
    },
    {
      firstName: "Lukas",
      lastName: "X.",
      country: "Croatia",
      continent: "Europe",
      age: 35,
      language: "Python"
    },
    {
      firstName: "Madison",
      lastName: "U.",
      country: "United States",
      continent: "Americas",
      age: 32,
      language: "Ruby"
    }
  ];
  
  greetDevelopers(list1)

  //////// FILTER

  const wdiInstructors = [
    {
      name: {
        first: "Andrew",
        last: "Whitley"
      },
      cohort: 19
    },
    {
      name: {
        first: "Perry",
        last: "Fustero"
      },
      cohort: 19
    },
    {
      name: {
        first: "Zakk",
        last: "Fleischmann"
      },
      cohort: 19
    },
    {
      name: {
        first: "Ali",
        last: "Spittel"
      },
      cohort: 20
    },
    {
      name: {
        first: "Mike",
        last: "Nabil"
      },
      cohort: 20
    },
    {
      name: {
        first: "Max Power",
        last: "Oppenheimer"
      },
      cohort: 20
    },
    {
      name: {
        first: "James",
        last: "Reichard"
      },
      cohort: 20
    }
  ]
  
  function teachesWDI20 (instructor) {
    return instructor.cohort === 20
  }
  
  function nonFilter () {
    return true
  }
  
  let allInstructors = wdiInstructors.filter(nonFilter)
  let wdi20instructors = wdiInstructors.filter(teachesWDI20)
  console.log(wdi20instructors)
  console.log(allInstructors)


  ////// fubar:

  function countDevelopers(list) {
    function euroLocation(dev) {
      return dev.continent === "Europe" && dev.language === "Javascript"
      return
    }.length
    
    return list.filter(euroLocation)
    
  }
  
  // james's code
  
  function countDevelopers (list) {
    return list.filter(function (dev) {
      return dev.continent === 'Europe' && dev.language === 'JavaScript'
    }).length
  }

  //////////// REDUCE

  let numbers = [1, 2, 3, 4, 5]
  
  const sum = numbers.reduce(function (accumulator, currentValue) {
    console.log('Total:', accumulator, 'Current:', currentValue)
    return accumulator + currentValue
  }, 0)
  
  console.log(numbers, sum)

  /////////// my code (not right)

  let names = ['jack', 'jill', 'pete', 'jill', 'greg']

  let histo = name.reduce(function (accumulator, currentValue) {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }

  }, {})

  // James's code

  const names = ['djac', 'djil', 'fredward', 'palbert', 'fredward']
  
  let histogram = names.reduce(function (accumulator, currentValue) {
    if (accumulator[currentValue]) {
      accumulator[currentValue]++
    } else {
      accumulator[currentValue] = 1
    }
    return accumulator
  }, {})


////////// SORT ( sorts ALPHABETICALLY ) ( aka - mutator method )

let numbers = [-1, 2, 130, 44, 5]

let sortedNumbers = numbers.sort()


let sortedNums = numbers.slice().sort()
 function actuallySort(first, second) {
     first - second
 }


 // james's code:

 let numbers = [-1, 2, 111, 44, 5]
 console.log("before")
 console.log(numbers)
 
 let sortedNumbers = numbers.slice().sort(actuallySortNumbers)
 console.log("after")
 console.log(numbers)
 console.log(sortedNumbers)
 
 function actuallySortNumbers (first, second) {
   return first - second
 }


 ////// OBJECTS AND ITERATION:

 const wdiStudent = {
    name: "john doe",
    languages: ['javascript', 'html', 'css'],
    'favorite-language': "JavaScript"
}

// iterate key + value

for (attr in wdiStudent) {
    console.log(attr + " = " + wdiStudent[attr])
}

//// METHODS INSIDE OF OBJECTS

var user = {
    fullName: "john doe", 
    greet: function(){
        console.log(`Hello ${this.fullName}`)
    }

}
/// 
