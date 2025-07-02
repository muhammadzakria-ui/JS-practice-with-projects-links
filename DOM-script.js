// let h1=document.querySelector("h1");

// console.dir(h1.innerText);
// h1.innerText= h1.innerText + " from apnaCollege";
 
// make changing in elements
// let divs=document.querySelectorAll(".mydiv");
// console.dir(divs);

// by using there index oenone

// divs[0].innerText= "the unique value was 1";
// divs[1].innerText= "the unique value was 2";
// divs[2].innerText= "the unique value was 3";

// by using the loop
// let idn=1;
// for(let div of divs){
//     div.innerText = `the unique value was ${idn}`;
//     idn++;
// }

// task was  create a btn and give it text and background color

// let btn=document.createElement("button");
//   btn.innerHTML="click me!";
//   btn.style.backgroundColor="red";
//   btn.style.color="white";
//   let b=document.querySelector("body");
//   b.prepend(btn);

// let p=document.createElement("p");
// p.innerHTML="<i>hello this is my first paragraph</i>";

// document.querySelector("body").prepend(p);
// let para=document.getElementsByClassName("p1").classList.add("p2");
// para.classList.add("p2");

// let para= document.querySelector("p");
//   para.classList.add("p2");


// function changeTitle() {
//     document.getElementById("title").innerText = "Title Changed!";
//   }

// the task was create new li inside ul by clicking button

// function addItem(){
//   let ul = document.getElementById("myList");
//   let count = ul.children.length + 1;
//   let li= document.createElement("li");
//      li.innerHTML=`Item ${count}`;
//      ul.appendChild(li);
// }

// Hide/show a paragraph when a button is clicked.

// function togglePara(){
//   let p=  document.getElementById("para");
//      if (p.style.display === "none") {
//     p.style.display = "block"; // show it
//   } else {
//     p.style.display = "none";  // hide it
//   }
// }

// When the user types a color name, the background color of a div changes.

// function changeColor(){
//  let inputC = document.querySelector("input");
//    let div =  document.getElementById("box");
//    div.style.backgroundColor = inputC.value.trim();
// }

// When you click any list item, it gets removed from the list.
// let listItems = document.querySelectorAll("#myList li");

// listItems.forEach(function(li){
//   li.addEventListener("click", function() {
//   li.remove();
// });

// });

// When the user types in a text area, display the character count live.
// let textInput=document.getElementById("textInput");
// let char=document.getElementById('charCount');

// textInput.addEventListener("input",function () {
    
//     char.textContent = textInput.value.length ;
// });

// task was change image by clicking button

//  let count = 1;
// function changeImage() {
//   count++;
//   document.getElementById("myImage").src = `image${count}.jpg`;
// }

// on dark mode  when click on button

// let bodyMode = document.querySelector("body");
// function toggleDarkMode(){
//     let mode =  bodyMode.style.backgroundColor;
//     if(mode === "white" || mode === ""){
//         bodyMode.style.backgroundColor = "black";
        
//     }else if(mode === "black" ){
//         bodyMode.style.backgroundColor = "white";
    
//     }
// }


// CLASSES and OBJECTS
 

// let DATA = "personal data";
// class User {
//     constructor(name,email){
//       this.name = name;
//       this.email = email;
//     }
//     viewData(){
//         console.log("this is " ,DATA); 
//     }
// }

// let student1 = new User("ali","abc@gmail.com");
// let student2 = new User("khan","khan420@gmail.com");
// let student3 = new User("amir","amir@gmail.com");
// let student4 = new User("kami","kami@gmail.com");

// class person{
//     constructor(name,age){
//               this.name = name;
//               this.age  = age;
//     }

//    greet (){
       
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//    } 
//    isAdult(){
//     return this.age >= 18;
//    }
// }

// let student1 = new person("Ali",16);
// let student2 = new person("zakria",19);
// console.log(`${student1.name} is adult: ${student1.isAdult()}`);  // Ali is adult: false
// console.log(`${student2.name} is adult: ${student2.isAdult()}`);  // Amir is adult: true

// class car{
//     constructor(brand,model,year){
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     getDetails(){
//         console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
//     }
// }

// let car1 = new car("Ford","Mustang",1964);
// let car2 = new car("Toyota", "Corolla", 2020);

// class Rectangle{
//     constructor(width,height){
//         this.width = width;
//         this.height = height;
//     }
//     getArea(){
//         return this.width*this.height;
//     }
//     getPerimeter(){
//         return 2*(this.width+this.height);
//     }
// }

// let Rectangle1 = new Rectangle(6,8);
// let Rectangle2 = new Rectangle(4,8);

// class Book{
//     constructor(title,author,pages){
//         this.title  = title;
//         this.author = author;
//         this.pages  = pages;

//     }
//     shortInfo(){
//         console.log(`Book:with the title ${this.title} by ${this.author}, Pages: ${this.pages}`);
//     }
// }

// let book1 = new Book("To Kill a Mockingbird","Harper Lee",281 );
// let book2 = new Book("1984","George Orwell", 328 );


// class Student{
//     constructor(name,marks){
//         this.name = name;
//         this.marks = marks;
//     }
//     getGrade(){
//         if(this.marks>=80){
//             return "grade A";
//         }else if(this.marks>=60){
//             return "grade B";
//         }else{
//             return "grade C";
//         }
//     }
// }


// let student1 = new Student("kamran",95);
// let student2 = new Student("Ali",45);
// let student3 = new Student("hamza",85);
// let student4 = new Student("nawab",75);
// let student5 = new Student("john",65);

// class Circle{
//     constructor(radius){
//          this.radius = radius;
//     }

//     getArea(){
//         return 3.14*this.radius*this.radius;
//     }
//     getCircumference(){
//         return 2*3.14*this.radius;
//     }
// }

// let Circle1 = new Circle(5);
// let Circle2 = new Circle(3);
// let Circle3 = new Circle(7);


// tasks about inheritance in classes


// class animal{
//     constructor(name){
//         this.name = name;
//     }
//     makeSound(){
//          console.log("some generic animal sound");
//     }
// }

// class Dog extends animal{
//      makeSound(){
//         console.log("Woof woof!!");
//      }
// }

// let dog = new Dog("jacky");


// class Vehicle{
//     constructor(brand){
//              this.brand = brand;
//     }

//     start(){
//         console.log("starting the vehicle");
//     }
// }

// class Car extends Vehicle{
//     start(){
//         console.log(`${this.brand} is ready to drive`);
//     }
// }

// class Bike extends Vehicle{
//     start(){
//         console.log(`${this.brand} is ready to ride`);
//     }
// }

// let car = new Car("mercedes");
// let bike = new Bike("Honda");


// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age  = age;        
//     }
//     introduce(){
//         console.log(`My name is ${this.name} and I am ${this.age} years old`);
//     }
// }

// class Student extends Person{
//     constructor(name,age,grade){
//          super(name,age);
//             this.grade = grade;
//     }

//     introduce(){
//         console.log(`I'm ${this.name}, ${this.age} years old, and I'm in grade ${this.grade}`);
//     }
// }

// let student1 = new Student("zakria",18,"12th");
// let student2 = new Student("Omar",17,"11th");
// let student3 = new Student("Kamran",16,"10th");


// class Person{
//     constructor(name,age){
//              this.name = name;
//              this.age = age;
//     }
//     introduce(){
//         console.log(`My name is ${this.name} and I am ${this.age} years old`);
//     }
// }

// class Student extends Person{
//     constructor(name,age,grade){
//         super(name,age);
//         this.grade = grade;
//     }
//     introduce(){
//         console.log(`I'm ${this.name}, ${this.age} years old, and I'm in grade ${this.grade}`);
//     }
// }

// class CollegeStudent extends Student{
//     constructor(name,age,grade,major){
//         super(name,age,grade);
//         this.major = major;
//     }
//    introduce(){
//          super.introduce();
//         console.log(`My major is ${this.major}`);
//     }
// }



// let student1 = new Person("zakria",17);
// let student2 = new Student("zakria",17,"11th");
// let student3 = new CollegeStudent("zakria",17,"11th","computerScience");

// practice on ERROR Handling 

// function divide(a,b){
       
//     try{
//         if(b == 0){
//            throw new Error("cannot be divided by zero");
//         }
//         console.log("Result :",a/b);
//     }catch(err){
//         console.log("Error :",err.message);
//     }

// }

// divide(5,0);


// function getElement(arr,index){
//      try{
//         if(index >= arr.length || index < 0){
//             throw new Error("Index out of range");
//         }
//         console.log("Element:", arr[index]);
//      }catch(err){
//          console.log("Error :",err.message);
//      }

// }

// getElement([10,20,30],2);
// getElement([10,20,30],1);
// getElement([10,20,30],0);

// console.log("example of error array");
// // error array
// getElement([1,2,3,4,5],7);
// getElement([1,2,3,4,5],5);
// getElement([1,2,3,4,5],-2);


// function setAge(age){
//     try{
//         if(typeof age !== "number"){
//             throw new Error("Age must be a number");
//         }
//         if(age < 0){
//             throw new Error("Age cannot be negative");
//         }
//         console.log("age :",age);
//     }catch(err){
//         console.log("Error :",err.message);
        
//     }

// }

// setAge(10);
// setAge(20);
// console.log( 'for error message');
// setAge("twenty");
// setAge(-20);
  

// try {
//   let num = 5;
//   console.log(num.toUpperCase()); // Error: toUpperCase not for numbers
// } catch (err) {
//   console.log("Caught error:", err.message);
// } finally {
//   console.log("This runs no matter what");
// }


// callback examples 


// function greeting() {
//  sayHi();
 
// }
// function sayHi() {
  
//  console.log( "Hi!");
// }

// Invoke the `greeting` function
// greeting();

//  callback func for count number of loops


// function loopFiveTimes(countLoop) {
//   for (let i = 1; i <= 5; i++) {
//     countLoop(i);
    
//   }
// }

// loopFiveTimes(function countLoop(num) {
//   console.log("Loop number: " + num);
// });


// Using callback with setTimeout (built-in async)

// function showMessage(){
//     console.log("This message appears after 2 seconds.");
// }

// setTimeout(showMessage,2000);

//  example no 1  of callback func

// function greetUser(name,callback){
//     console.log("Hi",name);
//     callback();
// }
// function Thanks(){
// console.log("Thanks for visiting!")
// }
// greetUser("zakria",Thanks);

// example 2 of callback func

// let calculate = (a,b,callback)=>{
// callback(a,b);
// }

// function add(x,y){
//     console.log(x + y); 
// }

// calculate(5,6,add);
                    //   OR

// let calculate = (a, b, callback) => {
//   return callback(a, b);
// }

// function add(x, y) {
//   return x + y;
// }

// let result = calculate(5, 6, add);
// console.log(result); // Output: 11

// example 3 Goal: Create a function that waits 3 seconds before saying "Time’s up!" using setTimeout.

// let func = ()=>{
//     console.log( "Hello world!");
// }
// func();

// setTimeout(function(){

//   console.log("Time’s up!");
// },3000);

//    OR

// function timer(callback){
//     setTimeout(callback,3000);

// }

// timer(function(){
// console.log("Time's up!");
// });

// OR
// setTimeout(function(){
// console.log("Time's up!");
// },3000);


// let numbers = [1, 2, 3, 4, 5, 6];

// let filterOdd = (num)=>{
//         return num%2!==0;
// }

// const filtered = numbers.filter(filterOdd);
// console.log(filtered);

// OR
// const filtered = numbers.filter(num => num % 2 !== 0);
// console.log(filtered); // [1, 3, 5]

// task 6

// let array = [10,20,30,40];

// array.forEach(element => {
//      console.log("Item is: " + element);
    
// });

// or
// function myForEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]); // call the function on each item
//   }
// }

// Usage:
// myForEach([10, 20, 30, 40], function(item) {
//   console.log("Item is: " + item);
// });

// promise examples
// no : 1

// let promise = new Promise(function(resolve,reject){
//     let success = false;
//     if(success){
//              resolve("The work was done.");
//     }else{
//              reject("The request was rejected.");
//     }
// });



// promise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// example no : 2

// let promise = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("The DATA is printing in 2 sec.");
//     },2000);
// });

// promise.then((data)=>{
//     console.log(data);
// });

// example 3 for error detection

// let promise = new Promise((resolve,reject)=>{
//         let errorHappened=true;
//         if(errorHappened){
//             reject("Something wrong in ur code.");
//         }else{
//             resolve("The task was completed!");
//         }
// });


// promise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// task 1 :Create a Promise that resolves with the message "Hello, Promises!" after 1 second.
// Then use .then() to display the message.

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      resolve("Hello, Promises!");
//     },1000);
    
// });


// promise.then((res)=>{
//    console.log(res);
// });

// Task 2: Conditional Resolve or Reject
// Create a Promise that checks a variable let isSunny = false;

// If isSunny is true, resolve with "Let's go outside!"

// If false, reject with "Better stay indoors."
// Handle both with .then() and .catch().

// let promise = new Promise((resolve,reject)=>{
//          let isSunny = false;
//          if(isSunny){
//             resolve("Let's go outside!");
//          }else{
//             reject("Better stay indoors.");
//          }
// });

// promise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// Task 3: Simulate a Login
// Create a function login(username, password) that returns a Promise.

// If username === "admin" and password === "1234", resolve with "Login Successful".

// Otherwise, reject with "Invalid Credentials".

// let login = (username,password)=>{
  
//       return new Promise((resolve,reject)=>{
//                  if(username === "admin" && password === "1234" ){
//                     resolve("Login Successful");
//                  }else{
//                      reject("Invalid Credentials");
//                  }
//          });
// }
 
// let promise = login("admin","1234");

// promise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

//  Task 4: Promise Chain
// Create a Promise that resolves with the number 5.
// Then chain .then() to:

// Multiply it by 2

// Add 10

// Log the final result

// let num = 5;
// let proChain = (num,num2)=>{
//     return new Promise((resolve,reject)=>{
//         if(num===5){
//            num=num*num2;
//         }else if(num===10){
//             num=num+num2;
//         }
//        resolve(num);
// });

// }

// proChain(5,2).then((res)=>{
//   let fNum = console.log(res);
    //    res=res*
//   proChain(res,10).then((res)=>{
//        console.log(res);
//   });

// });
                   // OR

// let promise = new Promise((resolve, reject) => {
//     resolve(5);  // Start with 5
// });

// promise
//     .then((num) => {
//         return num * 2;       // Multiply by 2 => 10
//     })
//     .then((num) => {
//         return num + 10;      // Add 10 => 20
//     })
//     .then((finalResult) => {
//         console.log(finalResult);  // Should print 20
//     });

// let  countDown = (seconds)=>{
//            console.log("count down started....");
           
        
//    return new Promise((resolve,reject)=>{
     
//        setTimeout(()=>{   
//             resolve("Done!");

//          },seconds*1000);
                
//                });
// }

// countDown(5).then((res)=>{
//     console.log(res);
// });

// 🧠 Task 1: Temperature Converter
// Start with a Promise that resolves with a Celsius value, e.g., 30.

// In the first .then(), convert it to Fahrenheit:
// (𝐶×9/5)+32
// In the next .then(), check if the Fahrenheit is above 100.

// If yes, return: "Too hot!"

// If no, return: "Temperature is fine."

// Log the final result.


//  function temConverter(c){
//        let  fahrenheit=(c*9/5)+32;
//          return new Promise((resolve,reject)=>{
//              if(fahrenheit>100){
//                 resolve("Too hot!");
//                   }else{
//                    resolve("Temperature is fine.")
//                    }
//      });
//            }


//         temConverter(37).then((res)=>{
//                console.log(res);
//         });
            //    BY promises chaining

//    Promise.resolve(37) // Step 1: Start with Celsius value
//   .then((celsius) => {
//     return (celsius * 9/5) + 32; // Step 2: Convert to Fahrenheit
//   })
//   .then((fahrenheit) => {
//     if (fahrenheit > 100) {
//       return "Too hot!";         // Step 3: Condition check
//     } else {
//       return "Temperature is fine.";
//     }
//   })
//   .then((result) => {
//     console.log(result);         // Step 4: Log the final result
//   });

// 🧠 Task 2: String Processing Chain
// Start a Promise that resolves with the string: "hello world".

// In the first .then(), convert the string to uppercase.

// In the second .then(), reverse the string.

// In the third .then(), log the result.

// 💡 Bonus: Use split, reverse, and join to reverse the string.


    //  let str = "hello world";

    //  Promise.resolve(str)
    //   .then((str)=>{
    // let  strUpper = str.toUpperCase();
    //     return strUpper;
    //   }).then((strUpper)=>{
    //     strReverse = strUpper.split("").reverse().join("");
    //     return strReverse;
    //   }).then((strReverse)=>{
    //     console.log(strReverse);
    //   });

// 🧠 Task 3: Math Chain
// Start with 10.
// Multiply by 3 →
// Subtract 5 →
// Divide by 5 →
// Add 7 →
// Log the final answer in .then().
// 🧠 All steps should be done using chained .then() calls, no nesting.

// Promise.resolve(10)
//  .then((resolve)=>{
//   let  Multi= resolve *3;
//    return Multi;
//  }).then((Multi)=>{
//     let sub = Multi-5;
//    return sub;
//  }).then((sub)=>{
//     let div = sub/5;
//     return div;
//  }).then((div)=>{
//     let add = div+7;
//     return add;
//  }).then((add)=>{
//     let res = add;
//       console.log(res);
//  });

// OR

 
// Promise.resolve(10)
//  .then((num)=>{
//    return num*3;

//  }).then((sub)=>{
//    return sub-5;

//  }).then((div)=>{
//     return div/5;

//  }).then((add)=>{
//     return add+7;

//  }).then((res)=>{
//       console.log(res);
//  });
  

// 🧠 Task 4: Age Checker
// Start a Promise that resolves with an age value, like 17.

// In .then(), check if age is 18 or older.

// If yes, return: "Eligible to vote".

// If not, return: "Not eligible".

// Log the final decision.


// Promise.resolve(17)
//  .then((age)=>{
//     if(age>=18){
//         return "Eligible to vote";
//     }else{
//         return "Not eligible";
//     }
//  }).then((res)=>{
//     console.log(res);
//  });
   

// bonus task 🧠 Scenario:
// You have a student score. Use Promise chaining to:
// Start with a score (e.g., 78).
// If the score is between:
// 90–100 → return "Grade A"
// 80–89 → return "Grade B"
// 70–79 → return "Grade C"
// Below 70 → return "Fail"
// In the next .then(), take the grade and:
// If it’s "Fail" → return "You need improvement!"
// Otherwise → return "Great job!"
// Log both messages in the end.


// let stdScore = 78;

// let stdScore = prompt("enter the student");

// Promise.resolve(stdScore)
//   .then((stdScore)=>{
//         if(stdScore >= 90 && stdScore <=100){
//             return "Grade A";
//         }else if(stdScore >= 80 && stdScore < 90){
//             return "Grade B";
//         }else if(stdScore >= 70 && stdScore < 80){
//             return "Grade C";
//         }else {
//             return "Fail";
//         }

//   }).then((grade)=>{
//         if(grade === "Fail"){
//             console.log("Grade: ",grade);
//             console.log("Feedback:You need improvement!");
//         }else{
//              console.log("Grade: ",grade);
//              console.log("Feedback: Great job!");
//         }
//   });


// task to print data 2 after 3sec of data 1


// function getData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data",data);
//             resolve("A kind of data");
//         },3000);
            
//     });
// }


// getData(1).then((res)=>{
//      console.log(res);
//      getData(2).then((res)=>{
//            console.log(res);
//      });
// });


//    NOW TASK OF ASYNC Await func

// Goal 1: Show a message after 2 seconds using async/await.

//  function waitTwoSec(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("message after 2sec");
//         },2000);
//     });
// }


// async function showMessage(){
//     let message = await waitTwoSec();
//     console.log(message);
// }

// showMessage();

// Goal 2: Create a function that adds two numbers asynchronously.

//    function asyncAdd(a,b){
//          return new Promise((resolve)=>{
//             setTimeout(()=>{
//                 resolve(a+b);
//             },1000);
//          });
//    }

//    async function showRes() {
//     let result = await asyncAdd(5,6);
//     console.log(result);
//    }
//  showRes();

// 🧠 Task 3: Multiple Awaits
// Objective:
// Create three asynchronous functions: step1(), step2(), and step3().
//  Each should return a message after a 2-second delay.
// Then, create an async function called runSteps() that:
// Waits for each step one by one using await
// Logs each step's message in order


// function multiAwaits(num){
//     return new Promise((resolve)=>{
//            setTimeout(()=>{
//             console.log(`Step ${num}Done!`);
//             resolve("success");
//            },2000);
//     });
// }


// async function showMessage(){
//      await multiAwaits(1);
//       await multiAwaits(2);
//        await multiAwaits(3);
// }

// showMessage();


// 🧠 Task 4: Handle an Error
// Objective:
// Create an asynchronous function that rejects after 2 seconds with an error message. 
// Then use async/await and try...catch to handle that error.

// function failAfterDelay(){
//     return new Promise((_,reject)=>{
//         setTimeout(()=>{
//            reject(" Something went wrong");
//         },2000);
               
//     });
// }

// async function handleError() {
//     try {
//       let result =  await failAfterDelay();
//       console.log(result);
//     } catch (error) {
//         console.log("Caught Error:", error);
//     }
// } 

// handleError();
    
// 🧠 Task 5: Retry an Async Task on Failure
// Objective:
// You’ll simulate a task that randomly fails, and then retry it up to 3 times using async/await.


// let attempts = 0;

// function unstableTask(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(Math.random() < 0.5){
//                  resolve("Success!");
//             }else{
//                  reject("Failed!");
//             }
//         },2000);
//     });
// }

// async function runWithRetries() {
    
//     for(let i=1;i<=3;i++){
        
//         try {
//              let Result = await unstableTask();
//             console.log(`Attempt ${i}:${Result}`);
//             break;
            
//         } catch (error) {
//             console.log(`Attempt ${i}:${error}`);
//             attempts++;
//         }
//         if(attempts===3){
//             console.log("All attempts failed!");
//         }else{
//              console.log("Retrying...");
//         }
//     }
// }

// runWithRetries();



// API's tasks


// const URL = "https://dogapi.dog/api/v2/facts?limit=10";
// let btn = document.querySelector("#btn");
// let para = document.querySelector("#para");



// const getFacts = async () =>{
// let response = await fetch(URL);
// console.log(response);
// let data = await response.json();
// let data1 = data.data[0].attributes.body;
// // console.log(data.data[0].attributes.body);
// para.innerHTML=data1;
// };

// btn.addEventListener("click",getFacts);
