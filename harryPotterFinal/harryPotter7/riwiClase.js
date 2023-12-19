let userList = ["josa","maria","andres","david","juan"]

//Sort help us to sort list  alphabetical
let sortList = userList.sort()
console.log(sortList)

//Every returns true if all elements have the same condition
let comprovation = userList.every((element) => element.includes("a"))
console.log(comprovation)

//Some returns true if one condition is true almost once
let someMethod = userList.some(element => element.includes("j"))
console.log(someMethod)

//Flat go to an array breaking inside arrays
let listInList = [1,2,3,4,[5,6,7,[8,9]]]
let brokenList = listInList.flat(2)
console.log(brokenList)

//Make varibles from array
let userPlace = ["bogota","Colombia"]
let [city,country] = userPlace
console.log(city, country)