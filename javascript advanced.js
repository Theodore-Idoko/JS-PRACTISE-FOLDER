// lecture: Function constructor
var john = {
  name:'John',
  yearOfBirth:1990,
  job:'teacher'
};

var Person = function(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}
// Adding a function to its prototype
Person.prototype.calculateAge = function(){
  console.log(2016 - this.yearOfBirth);
};

//adding a lastname to Person
Person.prototype.lastName ='Smith';

var jude = new Person ('Jude', 1990, 'teacher');
var jane = new Person ('jane', 1969, 'designer');
jane.calculateAge();
jude.calculateAge();
console.log(jude.lastName)

//Lecture: Object.create
var personProto = {
  calculateAge: function(){
    console.log(2016-this.yearOfBirth);
  }
};
var james = Object.create(personProto);
james.name = 'james';
james.yearOfBirth = 1991;
james.job = 'programmer';
james.calculateAge()
var jack = Object.create(personProto,{
  name:{value: 'Jane'},
  yearOfBirth: {value : 1964},
  job: {value : 'designer'}
});

jack.calculateAge()

// Lectures: Primitives vs objects
//Primitives

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1= {
  name: 'John',
  age:26
}

var obj2 = obj1;
obj1.age= 30;

console.log(obj1.age);
console.log(obj2.age)

//Functions

var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b){
  a = 30;
  b.city = 'San Francisco'
}

change(age,obj);
console.log(age)
console.log(obj.city)


//Lecture : Passing functions as argumentsw

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
  var arrRes = [];
  for (value of arr){
    arrRes.push(fn(value));
  }
  return arrRes;
}

function calculateAge(el){
  return 2016 - el;
}
function isFullAge(el){
  return el >= 18;
}
var ages = arrayCalc(years,calculateAge);
console.log(ages)

var fullAge = arrayCalc(ages, isFullAge);
console.log(fullAge)

function maxHeartRate(el){
  if(el >= 18 && el <= 81){
    return Math.round(206.9 - (.67 * el));
  }else {
    return - 1
  }
}

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates)

//Lecture: Functions returning functions
function interviewQuestion(job){
  if(job === 'designer'){
    return function(name){
      console.log(name + ', can you please explain what UX design is?');
    }
  }else if (job === 'teacher'){
      return function(name){
        console.log('What subject do you teach, ' + name + '?');
      }
  }else {
        return function (name){
          console.log('Hello' + name + ', what do you do?' );
        } 
      }
    }
  
    var teacherQuestion = interviewQuestion('teacher');
    var designerQuestion = interviewQuestion('designer');
    teacherQuestion('john')
    designerQuestion('Mike')

    // Lecture: IIFE
    function game(){
      var score = Math.random() * 10;
      console.log(score >= 5)
    }

    game();
    
    (function (){
      var score = Math.random() * 10;
      console.log(score >= 5);
    })();

    console.log(score);

    (function(goodluck){
      var score = Math.random() * 10;
      console.log(score >= 5 - goodluck);
    })(5);

    //Lecture: Closures

    function retirement (retirementAge){
      var a = ' years left until retirement. ';
      return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
      }
    }

    var retirementUS = retirement(66)
    retirement(66)(1990);
    var retirementGermany = retirement(65);
    var retirementIceland = retirement(67);
    retirementGermany(1990);
    retirementUS(1990);


    function interviewQuestions(job){
      return function(name){
        if (job === 'designer'){
        console.log(name + ' , can you please explain what UX design is?');
      } else if (job === 'teacher'){
        console.log('What subject do you teach, ' + name + '?');
      } else{
        console.log('Hello' + name + ', what do you do?');
      }
    }
  }
interviewQuestions('teacher')('John')


//Lecture: bind, call and apply

var jade = {
  name : 'Jade',
  age : 26,
  job : 'teacher',
  presentation: function(style, timeOfDay){
    if (style === 'formal'){
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if (style === 'friendly'){
      console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'mn ' + this.age +' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

var emily = {
  name : 'Emily',
  age : 35,
  job : 'designer'
};
john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');
//john.presentation.apply(emily, ['friendly', 'afternoon']);
var johnFriendly = john.presentation.bind(join, 'friendly');
johnFriendly('morning');
johnFriendly('night');
var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');

var year = [1990, 1965, 1937, 2005, 1998];
function arrayCalcs(arr, fn){
  var arrRess = [];
  for (let value of arr){
    arrRess.push(fn(value));
  }
  return arrRess;
}


function calculateAges(el){
  return 2016-el;
}

function isFullAges(limit, el){
  return el >= limit;
}

var age = arrayCalcs(year, calculateAges);

var fullJapan = arrayCalcs(age, isFullAges.bind(this, 20));
console.log(age);
console.log(fullJapan)

/////CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one(choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number)(Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer.The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/*
(function(){
  function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++){
      console.log(i + ':' + this.answers[i]);
    }
  }
  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer. Try again:)')
    }
  }
  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                        ['Yes', 'No'],
                        0);
  var q2 = new Question('What is the name of this course\'s teacher?',
                       ['John', 'Michael', 'Jonas'],
                       2);
  var q3 = new Question('What does best describe coding?',
                      ['Boxing', 'Hard', 'Fun', 'Tedious'],
                      2);
  var questions = [q1, q2, q3];
  var n = Math.floor(Math.random() * questions.length);
  questions[n].displayQuestion();
  var answer = parseInt(prompt('Please select the correct answer.'));
  questions[n].checkAnswer(answer);
})();
*/

/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: i'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/

/*
(function(){
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct  = correct;
  }
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ':' + this.answers[i]);
    }
  }
  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;

    if (ans === this.correct) {
      console.log('Correct answer!');
      sc = callback(true);
    } else {
      console.log('Wrong answer. Try again :)');
      sc = callback(false);
    }
    this.displayScore(sc);
  }
  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('-------------------------------');
  }


  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                      ['Yes', 'No'],
                      0);
  var q2 = new Question('What is the name of this course\'s teache?',
                       ['John', 'Michael', 'Jonas'],
                       2);
  var q3 = new Question('What does best describe coding',
                       ['Boring', 'Hard', 'Fun', 'Tedious'],
                       2);

  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    }
  }
  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = prompt ('Please select the correct answer.');
    if(answer !== 'exit') {
      questons[n].checkAnswer(parseInt(answer), keepScore);

      nextQuestion();
    }
  }

  nextQuestion();
})();
*/

/* Immediately invoked function*/
// function statement
function greet(name) {
  console.log('Hello ' + name);   
}
greet('John');

// using a function expression
var greetFunc = function(name) {
  console.log('Hello ' + name);
};
greetFunc('John');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
  
  return 'Hello ' + name;
  
}('John');

console.log(greeting);

// IIFE
var firstname = 'John';

(function(name) {
  
  var greeting = 'Inside IIFE: Hello';
  console.log(greeting + ' ' + name);
  
}(firstname)); // IIFE



/* Closure*/
function greet(whattosay) {

  return function(name) {
      console.log(whattosay + ' ' + name);
  }

}

var sayHi = greet('Hi');
sayHi('Tony');


function buildFunctions() {
 
  var arr = [];
  
  for (var i = 0; i < 3; i++) {
      
      arr.push(
          function() {
              console.log(i);   
          }
      )
      
  }
  
  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function buildFunctions2() {

  var arr = [];
  
  for (var i = 0; i < 3; i++) {
      arr.push(
          (function(j) {
              return function() {
                  console.log(j);   
              }
          }(i))
      )
      
  }
  
  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();


/*closures and callbacks*/
function sayHiLater() {
 
  var greeting = 'Hi!';
  
  setTimeout(function() {
      
      console.log(greeting);
      
  }, 3000);
  
}

sayHiLater();

// jQuery uses function expressions and first-class functions!
//$("button").click(function() {
//    
//});

function tellMeWhenDone(callback) {

  var a = 1000; // some work
  var b = 2000; // some work
  
  callback(); // the 'callback', it runs the function I give it!
  
}

tellMeWhenDone(function() {
 
  console.log('I am done!');
  
});

tellMeWhenDone(function() {
 
  console.log('All done...');
  
});


/*call, bind and apply*/
var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {
      
      var fullname = this.firstname + ' ' + this.lastname;
      return fullname;
      
  }
}

var logName = function(lang1, lang2) {

  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-----------');
  
}

var logPersonName = logName.bind(person);
logPersonName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

(function(lang1, lang2) {

  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-----------');
  
}).apply(person, ['es', 'en']);

// function borrowing
var person2 = {
  firstname: 'Jane',
  lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {
  return a*b;   
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));


/*functional Programming*/


function mapForEach(arr, fn) {
    
  var newArr = [];
  for (var i=0; i < arr.length; i++) {
      newArr.push(
          fn(arr[i])   
      )
  };
  
  return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);


var arr2 = mapForEach(arr1, function(item) {
 return item * 2; 
});
console.log(arr2);


var arr3 = mapForEach(arr1, function(item) {
 return item > 2; 
});
console.log(arr3);


var checkPastLimit = function(limiter, item) {
  return item > limiter;   
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);





/*function mapForEach(arr, fn) {
    
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])   
        )
    };
    
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);


var arr2 = mapForEach(arr1, function(item) {
   return item * 2; 
});
console.log(arr2);


var arr3 = mapForEach(arr1, function(item) {
   return item > 2; 
});
console.log(arr3);


var checkPastLimit = function(limiter, item) {
    return item > limiter;   
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);


var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;   
    }.bind(this, limiter); 
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);


// underscore
var arr6 = _.map(arr1, function(item) { return item * 3 });
console.log(arr6);

var arr7 = _.filter([2,3,4,5,6,7], function(item) { return item % 2 === 0; });
console.log(arr7);
*/



// polyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;   
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);


// Use Strict
function logNewPerson() {
  "use strict";
  
  var person2;
  persom2 = {};
  console.log(persom2);
}

var person;
persom = {};
console.log(persom);
logNewPerson();



//ES 6

/*Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);
// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
// ES5
function driversLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence5(true);
// ES6
function driversLicence6(passedTest) {
    
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'John';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence6(true);
var i = 23;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
*/




/////////////////////////////////
// Lecture: Blocks and IIFEs

/*
// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
//console.log(a + b);
console.log(c);
// ES5
(function() {
    var c = 3;
})();
//console.log(c);
*/




/////////////////////////////////
// Lecture: Strings

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}
// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
*/




/////////////////////////////////
// Lecture: Arrow functions

/*
const years = [1990, 1965, 1982, 1937];
// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);
// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/




/////////////////////////////////
// Lecture: Arrow functions 2

/*
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
       
       var self = this; document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();
// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();
function Person(name) {
    this.name = name;
}
// ES5
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
       return this.name + ' is friends with ' + el; 
    }.bind(this));
    
    console.log(arr);
}
var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
// ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}
new Person('Mike').myFriends6(friends);
*/




/////////////////////////////////
// Lecture: Destructuring

/*
// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];
// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);
const obj = {
    firstName: 'John',
    lastName: 'Smith'
};
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);
function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}
const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/




/////////////////////////////////
// Lecture: Arrays

/*
const boxes = document.querySelectorAll('.box');
//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});
//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
//ES5
for(var i = 0; i < boxesArr5.length; i++) {
    
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }
    
    boxesArr5[i].textContent = 'I changed to blue!';
    
}
//ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}
//ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);
//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/




/////////////////////////////////
// Lecture: Spread operator
/*

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);
//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);
//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');
*/




/////////////////////////////////
// Lecture: Rest parameters


//ES5
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}
//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);
//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log( (2016 - cur) >= 18));
}
isFullAge6(1990, 1999, 1965, 2016, 1987);
//ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}
//isFullAge5(16, 1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);
//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log( (2016 - cur) >= limit));
}
isFullAge6(16, 1990, 1999, 1965, 2016, 1987);





/////////////////////////////////
// Lecture: Default parameters


// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');





/////////////////////////////////
// Lecture: Maps

/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');
console.log(question.get('question'));
//console.log(question.size);
if(question.has(4)) {
    //question.delete(4);
    //console.log('Answer 4 is here')
}
//question.clear();
//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));
for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}
const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/




/////////////////////////////////
// Lecture: Classes

/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}
var john5 = new Person5('John', 1990, 'teacher');
//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting() {
        console.log('Hey there!');
    }
}
const john6 = new Person6('John', 1990, 'teacher');
Person6.greeting();
*/




/////////////////////////////////
// Lecture: Classes and subclasses


//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}
var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
}
Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}
var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}
class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}
const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();





/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/


class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }
    
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {
    
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    return [sum, sum / arr.length];
    
}


function reportParks(p) {
    
    console.log('-----PARKS REPORT-----');
    
    // Density
    p.forEach(el => el.treeDensity());
    
    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    
    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
    
}


function reportStreets(s) {
    
    console.log('-----STREETS REPORT-----');
    
    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);