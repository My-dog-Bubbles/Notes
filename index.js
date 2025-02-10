

// put in M3 repo
// 4 types of errors//

/* load time (syntax)
    -spelling mistake, in complete brackets*/

/* Runtime
    - when code does not run but syntax is correct
        - refacing things before the are created and zero division*/

/* Logic
    - the output is unexpected or does not give the logical response*/

/* User
    -User does something unexpected
        - entering a string when it needs a integers or number*/


// Debugging method and tools//

/* tracing: the examinatioin of individual statments in an executing program.
Displaing alert boxes at diff points to show results intermittly*/

/*console logging: log what the value is to the console*/

/* commenting out code: commenting out code to see what is not working*/

/* break mode and breakpoint: seporate code to pause it at point to see what the code is*/

/*
scope window: what variables are when you are paused
watch window: a specific function
call stack: hiarciy of all the functions that are connected */

// try and catch //

// try {
//     console.log(1/0)
// }   catch {
//     console.log("wrong bish")
//     console.error(error)
// }   finally{
//     //closes files
//     //close connections
//     // Release recourcses
//     console.log("This code always excecutes")
// }

// try {
//     const div = window.prompt("enter a dividend")
//     const divsor = window.prompt("Enter a divisor")
//     const result = div/divsor
//     console.log(result)
// }   catch (error){
//     console.error(error)
// }
// console.log("war is over !!")

// try {
//     const div = window.prompt("enter a dividend")
//     const divsor = window.prompt("Enter a divisor")

//     if (divsor == 0){
//         throw new Error("You can't divide by zero")
//     }
        
//     if (isNaN(div) || isNaN(divsor)){
//         throw new Error("Must be a number")
//     }
        
// } catch {
//     console.error(error)
// }

// try{
// alert(username)
// } catch(error){
//     console.error("Error:this veriable has not been decalred.")
// }

/* verify months text box entry is between 1 and 12 */
// function verifyMonths() {
//     try {
       
//     }  catch(error)   {
    
//     }
 
//  }
// 3**(1/2)


//If statements

// let age = 25;

// if (age >= 21){
//     console.log("You are a legal adult.")
// } else{
//     console.log("you are a minor")
// }

// let license = true;

// if (age >= 16){
//     if(license == true){
//         console.log("You are old enough to drive and have a license.")
//     } else {
//         console.log("You are old enough to drive and do not have your license have a license. ")
//     } 
    
// }  else{
//     console.log("you are NOT OLD ENOUGH TO DRIVE.")
// }

// age = 12

// if (age>=100) {
//     console.log("get off the stage you geezer")
// } else if(age>=13){
//     console.log("You are old enough to doom scroll")
// } else if(age<=0){
//     console.log("aint no way you younger than a baby")
// } else if(age == 0){
//     console.log("googooo no gaagaa")
// } else{
//     console.log("Your block from the rizz")
// }

// function = reusable section of code
// call the 
// function fun_name(){
//     console.log("happy 12 birthday you ugly bitch")
// }

// fun_name();

// function Happy_birthday(user, birthage){
//     console.log(`happy ${birthage} birthday you ugly bitch (${user})`)
// }

// Happy_birthday("marcus", 100);

// username = window.prompt('what is you name')

// function add(x, y){
    
//     let result = x+y
//     return result
// }
// let answer = add(username,"ssy")
// console.log(answer)

// function itsEven(num){
//     if(num%2===0){
//         return true
//     } else {
//         return false
//     }
// }

// function isEven(num){
//     return num%2===0 ? true : false; //ternary operator, simpified verssion of above
// }

// console.log(isEven(12))
// console.log(isEven(13))

// function isValEmail(email){
//     return email.includes("@") ? true : false;
// }

// console.log(isValEmail("happy@me"))
// console.log(isValEmail("happyme"))

// let myUsername = ""
// while(myUsername === ""){
//     console.log( `name not found `)
//     myUsername = window.prompt(`Enter your name: `)
// }
// console.log(`Hello ${myUsername}`)

// let myName
// do {
//     myName = window.prompt(`Enter your name: `)
// } while(myName === "" || myName === null)

// let loggedin = false;
// let myNewUn;
// let myPassWord;
// while(!loggedin){
//     myNewUn = window.prompt(`Enter your name: `)
//     myPassWord = window.prompt('Enter your password:')
//     if(myNewUn === "username" && myPassWord === 'password'){
//         loggedin = true;
//         console.log('GET OVER HERE')
//     } else{
//         console.log('not the right password or user')
//     }
// }

// for (let i = 0; i <= 2; i++){
//     console.log("Hello "+i)

// }

// for(let i = 1; i <= 20; i++){
//     if(i=13){
//         continue // skip based on condition you can use break if you want to get out of it entirely
//     } else {
//         console.log(i)
//     }
// }


// array
let fruit = ["apple","cheese","tomato"]
console.log(fruit[0])
fruit[3]= "coconut"
console.log(fruit)

fruit.push("banana") // ands and the end
fruit.pop(); //remove last
fruit.unshift("mango") // add element at the start
fruit.shift(); //remove from the beginning

let allFruits = fruit.length
console.log(fruit.length)
console.log(allFruits)

let index = fruit.indexOf("apple") // search matching index. 
let oindex = fruit.indexOf("star") //If it does not exist then it will give you -1

for(let i  = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

for(let i  = fruit.length -1; i >= 0; i++){
    console.log(fruit[i])
}

for(let i of fruit){
    console.log(fruit)
}

fruit.sort()
console.log(fruit)

fruit.reverse()
console.log(fruit)

const matrix = [[1,2,3],[4,5,6][7,8,9]] // you can have a mix of string, number, and variable
console.log(matrix)

for(let row of matrix){
    const rowString = row.join(" ") // .join add smthn between each array element
    console.log(rowString)
}

// Object = Dictionary
    // not the same as object oriented programming
let person = {
    // name value pair
    firstname:"angel", lastname:"bianca", age:14, email:"marcus"
}
console.log(person)
console.log(person.lastname)

// Bracketnotation
// console.log(person[lastname]) = error
console.log(person["lastname"]) // correct natation
console.log(person["age"]+10)

for(i in person){
    console.log(person[i]) //will 
    console.log(person.i) // will not work
    console.log([i]) // will not work
}

for(i in person){
    console.log(i+": "+person[i]) // i is the key and person[i] gets the value of the key
}