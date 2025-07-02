// let score = prompt(" enter ur score");

// if(score >= 80 && score <= 100 ){
//     console.log(" your grade is A");
// } else if(score >= 70 && score <= 79){
//     console.log(" your grade is B");
// } else if(score >= 60 && score <= 69){
//     console.log(" your grade is C");
// } else if(score >= 50 && score <= 59) {
//     console.log(" your grade is D");
// } else if(score <= 49){
//     console.log(" your grade is F");
// }

// let n = prompt(" enter n");
// for(let i =1;i<=n;++i){
//     console.log(i," ");
// }


// let num = prompt(" enter n");
// let n=0;
// for(let i =1;i<=num;++i){
//     n+=i;
//     console.log(n);
// }




// let str = "mzakria";
// for(let i of str){
//     console.log(i);
// }


// let student ={
//     fullName : "mzakria",
//     rollNo : 117,
//     semester : 3,
//     gpa   : 3.5,
//     isPass : true,
// };
// for(let key in student){
//     console.log("key",key,"value",student[key]);
//     console.log(typeof student[key]);
// }

// for(let i=0; i<=100;i++){
//     if(i%2==0){
//         console.log(i," is evenNum");
//     }else{
//         console.log(i," is oddNum");
//     }
// }


// number guessing game
// let gameNum=Math.ceil(Math.random()*10);
// let userNum;
// let guesses;
// let userChoice = confirm(" do you want to play number guessing game?");
// if(userChoice){
// userNum= prompt("enter ur guess");
// for( guesses=1;guesses<=3;guesses++){

    

// if(gameNum==userNum){
//     alert("oohOO! u guess right",gameNum);
//     break;
// }else if( gameNum>userNum){
//     alert("ur guess is smaller. try again");
//     userNum= prompt("enter ur guess");
// }else if( gameNum<userNum){
//     alert("ur guess is greater. try again");
//     userNum= prompt("enter ur guess");
// }


// }
// if(guesses==3){ 
//     alert("sorry only three guesses allowed.");

// }
// let tryAgainOrNot=confirm("do you want to play again ?");
// if(tryAgainOrNot){
//     location.reload();
// }
// }else{
//     alert("ok may be next time ");
// }




//practice for taking user name and store in string with @ from starting and length with end

// let fullName = prompt("enter ur fullname");
//  let length=fullName.length;
//  let userName="@"+fullName+fullName.length;

//  console.log(userName);

// reversed string practice

// let str = "zakria";

// for(let i=5;i>=0;i--){
//     console.log(str[i]);
// }

// checking numbers of vowels and consonant

// let vowels=0 ,consonant=0;
// let str=prompt("enter any string");
// let range=str.length;

// for(let i=0;i<=range;i++){
//     if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//         vowels++;
//         console.log(str[i]);
//     }else{
//         consonant++;
//         console.log(str[i]);
//     }
// }

// console.log(`there are ${vowels} no of vowels.and ${consonant} no of consonant.`);


// code for palindrome

// let str=prompt("enter any type of string");
// let reversedStr= str.split("").reverse().join("");

// console.log(reversedStr);
// if(reversedStr===str){
//     console.log(`the word ${str} is palindrome`);
// }else{
//     console.log(`the word ${str} is not a palindrome`);
// }



// find prime number

// let num=prompt("enter any positive num");
// let isPrime=true;

// if(num>2){

// for(let i=2;i*i<=num;i++){
//     if(num%i==0){
//         isPrime=false;
//         break;
//     }
//     isPrime=true;
// }

// }else{
//     isPrime=false;
// }


// if(isPrime==true){
//     console.log(`${num} is a prime number`);
// }else{
//     console.log(`${num} is not a prime number`);
// }


// find the largest character in String HINT : by matching there ascii value

// let str=prompt("enter the string");
// let largest=str[0];
// let range = str.length;
// for(let i=0;i<=range;i++){
//     if(str[i]>largest){
//         largest= str[i];
//     }
// }
// console.log(`the largest character was ${largest}`);

// let marks=[85,97,44,37,76,60];
// let sum=0;
// let length=marks.length;
// // for(let i=0;i<length;i++){

// //     sum += marks[i];
// // }

// console.log(sum);
// let avg=sum/length;
// console.log(`the average marks of studends is ${avg}`);

// by for of loop

// let marks=[85,97,44,37,76,60];
// let sum=0;
// let length=marks.length;
// for(let i of marks){
//     sum += i;
// }

// console.log(sum);
// let avg=sum/length;
// console.log(`the average marks of studends is ${avg}`);

// take 10% off on arry and then print discounted arry

// let price=[250,645,300,900,50];
// let newPrices = [];
// for(let i of price){
//    let dp=i*0.1; // dp mean discount price
//    let np=i-dp;  //np mean new price
// //    console.log(np);

//     newPrices.push(np);

// }
// console.log(newPrices);






// let company=["bloomberg","microsoft","uber","google","IBM","netflix"];

//  company.push("Amazon");
//  console.log(company);

// code for maximum in arry

// let arr=[3,4,2,7,1,19,8,15,0];

// let max=arr[0];

// for(let i=0;i<=arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }
// console.log(max);

// print key and value of obj by for in loop
// let student={
//     name : "zakria",
//     age : 20,
//     grade : "A",
//     city : "malakand"

// };

// for(let i in student){
//     console.log(`${i}  = ${student[i]}`);
// }


// print reverse arrray

// let arr=[1,2,3,4,5];
// console.log(arr.reverse());

// print reverse array by loops

// let arr=[1,2,3,4,5];
// let newArr=[];

// for(let i=arr.length -1;i>=0;i--){
//    newArr.push(arr[i]);
    
// }
// console.log(newArr);

// calculating total price of items
// let cart =[ 
//   {name: "book",price:200},
//   {name: "pen",price:20},
//   {name: "bag",price:1200},
// ]; 

// let totalPrice =0;
// for(let i in cart){
//     totalPrice = totalPrice + cart[i].price;
// }
// console.log("the totalprice was",totalPrice);



//task was filter expensive product. product that price is more than 1000

// let cart=[
//     {name :" shoes", price : 3000},
//     {name :" sunglasses", price : 600},
//     {name :" watch", price : 1500},
//     {name :" T-shirt", price : 800},
//     {name :" perfume", price : 2000},
// ];
// for( let i in cart){
//     if(cart[i].price>=1000){
//         console.log(`${cart[i].name} = ${cart[i].price}`,"\n");
//     }
// }


// the task was give 20% discount to every item

// let cart=[
//     {name :" phone", price : 30000},
//     {name :" charger", price : 1600},
//     {name :" watch", price : 1500}
// ];

// for(let i in cart){
//    let discount=cart[i].price *.2;
//     let pAD=cart[i].price - discount; // pAD mean price after discount
// //    cart[i].discountPrice = pAD; // this for add  discountPrice in array as a object item
//    cart[i].price = pAD; // this for to replace that price by discountPrice
// }
// console.log(cart);

// code for print items that less than 1000
// let cart = [
//   { name: "Mouse", price: 800 },
//   { name: "Keyboard", price: 1200 },
//   { name: "USB", price: 300 },
//   { name: "Monitor", price: 7000 }
// ];

// for(let i in cart){
//     if(cart[i].price<1000){
//         console.log(`${cart[i].name} = ${cart[i].price}`);

        
//     }
// }

// write code for printing keys and values of objects
// let users = [
//   { name: "Ali", age: 25, city: "Lahore" },
//   { name: "Sara", age: 30, city: "Karachi" },
//   { name: "Ahmed", age: 22, city: "Peshawar" }
// ];

// for(let i in users){
//     console.log(users[i]);
// }

//   OR

// let users = [
//   { name: "Ali", age: 25, city: "Lahore" },
//   { name: "Sara", age: 30, city: "Karachi" },
//   { name: "Ahmed", age: 22, city: "Peshawar" }
// ];

// for(let i in users){
//    console.log("name :",users[i].name);
//    console.log("age :",users[i].age);
//    console.log("city :",users[i].city);
// }



// function for counting vowels in str
//  function countVowel(str){
//     let vowels=0;

//     for(let i=0;i<=str.length;i++){
//         if( str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//             vowels++;
//         }
//     }
//     return vowels;
// };
// countVowel("zakria");


// const arr=[1,2,3,4,5];

// arr.forEach((i)=> console.log(i*i));


// const arr=[97,87,92,95,78,99];

// const newArr = arr.filter((val)=> {
//     return val >= 90;
// })

// console.log(newArr);

// // code for print  of n number in array
// let n,num=1;
// let arr=[];
// n=prompt("enter the value of n");

// for(let i=0;i<=n-1;i++){
//     arr[i]=num;
//     num++;
// }
// console.log(arr);
// // code for print sum of n number in array
// let sum=arr.reduce((prev,cur)=> {
//  return prev+cur;
// })
// console.log("sum of n number in array is",sum);

// // code for print product of n number in array
// let product=arr.reduce((prev,cur)=> {
//  return prev*cur;
// })

// console.log("product of n number in array is",product);


// code for remove duplicate numbers
// let arr=[1,5,2,3,1,4,2,3,4,5];

//  for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             arr.splice(j,1);
            
//         }
//     }
//  }

//  console.log(arr);

//code for flat nested arrays
// const arr = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr.flat(3));


//code for find 2nd largest num in array

// let arr=[1,2,7,9,3,4,8,6];

// let max=arr[0],max2=arr[1];

// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }

// for(let i=0;i<arr.length;i++){
//     if(max !=arr[i]&& max2<arr[i]){
//         max2=arr[i];
//     }
// }

// console.log(max2);

// array mapping method

// let array=[1,3,4,5,7,2,3];

// const map1=array.map((val)=> val * val);
// console.log(array);
// console.log(map1);

