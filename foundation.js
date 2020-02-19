let name = 'Tochukwu';
console.log(name);
let person = {
    name : "Theodore",
    age : 29
};
person.age = 25
person['name'] = 'Davidson';

let selectedColors = ['red', 'blue'];
console.log(selectedColors)
console.log(person)

function greet(name,lastname){
    console.log('Hello' +'', name, '', lastname);
}
greet('Theodore','idoko');

function square(number){
     return number*number;
}
console.log(square(4));

let x = 10;
let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
console.log(x ** y);

//increment
console.log(++x);
console.log(x++);
console.log(x);

let point = 200;
let type = point > 100 ? 'Gold': 'Silver';
console.log(type) 

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor)

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b)

let hour = 11;
if (hour >= 6 && hour < 12){
    console.log("good morning!'");
} else if (hour >= 12 && hour < 18){
    console.log('good afternoon!');
} else if (hour >= 18 && hour < 24){
    console.log('good evening!');
} else console.log('good night!')

let role = 'moderator';
switch (role){
    case 'guest':
        console.log('Guest User');
        break;
    
        case 'moderator':
            console.log('Moderator User');
            break;
            
            default:
                console.log('Unknown User');

}

for (let i = 0; i < 5; i++){
if (i % 2 !== 0) console.log(i)
}

let i = 0;
while (i <= 5){
    if (i % 2 !== 0) console.log(i);
    i++;
}

const profile = {
    name : 'Mosh',
    age : 29
};
 for (let key in profile)
 console.log(key, profile[key]);

 const colors = ['red', 'blue','yellow'];
 //for (let index in colors)
 //console.log(index, colors[index])

 for (let color of colors)
 console.log(color);

 // from the above, for ..in loop is often used to iterate the properties of an object
 // for ...of loop is used to iterate over the items in an array

 let number = max(1, 2);
console.log(number)
 function max(a, b){
     //if (a > b)return a;
     //else return b;
     return (a > b) ? a : b;
 }

 let picture = isLandscape(15, 10);
 
 console.log(picture)

 function isLandscape(width, height){
     return (width > height);
 }

 // Divisible by 3 => fizz
 // Divisible by 5 => Buzz
 // Divisible by 3 and 5 => fizzBuzz
 // Divisible by numbers not divisible 3 and 5 => the number
 // not a number => 'not a number'

 const output = fizzBuzz(30);
 console.log(output);
 
 function fizzBuzz(input){
     if (typeof input !== 'number'){
         return 'Not a number'
     }else if ((input % 3 ===0) && (input % 5 === 0)) {
        return 'fizzBuzz'

    }
    else if (input % 3=== 0){
         return 'fizz'
     }else if (input % 5===0){
         return 'buzz'
     } else {
         return input
     }
 }

 // Speed limit = 70
 // less than 70 = ok
 //5 -> 1 point
 // Math.floor(1.3)
 // 12 points -> suspended

 checkSpeed(200);

 function checkSpeed(speed){
 const speedLimit = 70;
 const kmPerPoint = 5;
 if (speed < speedLimit + kmPerPoint) 
     console.log ('0k')
 else { const point = Math.floor((speed - speedLimit) / kmPerPoint);
 if (point >= 12)
     console.log ('license suspended')
  else console.log ('point', point)
 }}

 showNumber(10)
 
 function showNumber(limit){
     for (let i = 0; i <= limit; i++){
     //if (i % 2===0)
     //console.log (i, 'even')
        //else console.log(i,'odd')
        const message = (i % 2 === 0) ? 'even': 'odd';
        console.log(i, message);
     }
 }
 // list of falsy values
 // false
 // undefined
 // NAN
 // 0
 // ""
 // null
 // falsy
 const array = [ 0, '', undefined, 1, 2, 3,  'boy']
 console.log(countTruthy(array));
 function countTruthy(array){
  let count = 0;
  for (let value of array)
      if (value)
      count++;
      return count;
  
 }
 const movie= {
     name : "Ana",
     director : 'Theo',
     releaseYear : 2025,
     producer : "Philip"
 };
    showMovieProperties(movie)  
    function showMovieProperties(movie){
     for (let prop in movie)
     if (typeof movie[prop] === 'string')
     console.log(prop, movie[prop]);
    }
 
    //sum multiples of limit
    console.log(sum(10));
    function sum(limit){
        let sum = 0;
        for (let i = 0; i <= limit; i++)
           if  (i % 3 === 0 || i % 5 === 0)
           sum +=i;
           return sum;
        
    }

    const marks = [80,80,100];
    // 1-59= f
    // 60-69 = d
    // 70 - 79 = c
    // 80 - 89 = b
    // 90 - 100 = A
    console.log(calculateGrade(marks));
    function calculateGrade(marks){
        const average = calculateAverage(marks)
       // let sum = 0;
        //for (let mark of marks)
        //sum += mark;
        //let average = sum / marks.length;
        if (average < 60) return 'F';
        if (average < 70) return 'D';
        if (average < 80) return 'C';
        if (average < 90) return 'B';
        return 'A';

    }
    function calculateAverage(array){
    let sum = 0;
        for (let value of array)
        sum += value;
        return  sum / array.length;
    }

    displayStars(5);
    function displayStars(rows){
        for (let row = 1; row <= rows; row++){
        let parttern = '';  
        for (let i = 0; i < row; i++ )//nested loop this i is a loop inside row
        parttern += '*';
        console.log(parttern);  
    }
}

// show prime numbers: numbers that can only be divided by itself and one
showPrime(20);
function showPrime(limit){
    for (let number = 2; number <= limit; number++) {
        isPrime = true;
        for (let factor = 2; factor < number; factor++){
            if(number % factor === 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(number);
    }
   
}

// To make the work cleaner we can decide to call two different functions
showPrimes (20);
function showPrimes(limit){
    for (let number = 2; number <= limit; number++)
    if (isPrimes(number)) console.log(number)
}
function isPrimes(number){
    for (let factor = 2; factor < number; factor++)
        if(number % factor === 0)
        return false;
        return true;
    
}
// object oriented style of programming
// draw function, because it is within an object is called a 'draw method'
const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1,
    },
    isVisible : true,
    draw : function(){
        console.log("draw");
    }
};
// factory function is a method of creating objects so that it can be edited and used severally at other 
// instances from one place. so instead of having the above this below is createcircl1 function that 
//can be used severally at different instances
function createcircle(radius){
    return{
    radius,
    draw (){
        console.log('draw');
    }
}
}
 // example
 const circle1 = createcircle(2); // so instead of writing the above code, i will simply call the creatcircle function
 console.log(circle1);

 const circle2 = createcircle(4);
 console.log(circle2);

 // Another way of creating an object is what is called CONSTRUCTOR FUNCTION
 // instead of camel notation, it uses paschal notation: OneTwoThreeFour
  
 function Circle(radius){
     this.radius = radius;
     this.draw = function (){
         console.log('draw')
     }
 }
 // to call the above constructor, i will simply use the key word 'new'
 const circlei = new Circle(3); // the new circle returns the 'this'
 console.log(circlei)

 // objects are dynamic, you can add or delete more properties
  const cicle = {
      radius : 1
  };
 cicle.color = 'red'
 cicle.draw = function(){}
 delete cicle.color;
console.log(cicle)

Circle.call({}, 1)

// Values vs References
//function, objects and arrays are references while others are values

let z = 10;
let k = z;
 z = 20;
 console.log(z)
 console.log(k)


 let w = {value :10}
 let v = w;
 v.value = 20;
 console.log(w);
 console.log(v);
 
 const cecle = {
     radius : 1,
     draw (){
         console.log('draw');
     }
 };
 // different ways of enumerating properties of an object
 for (let key in cecle)
     console.log(key, cecle[key]);
 
     for (let key of Object.keys (cecle))
     console.log(key)

     for (let entry of Object.entries(cecle))
     console.log(entry)
     // to check if a given property exits in a given object use 'in'
     if('radius' in cecle)console.log('yes')
     // so the easiest way to enumerate the properties of an object is the 'for in loop' , you can also use
     // the 'for of loop' with Object.key or Object.entries
     

     // cloning of the properties of an object into another obect
      
     const another = {};
     for (let key in cecle)
     another[key]= cecle[key]
     console.log(another)

     // there is a more modern way of cloning
     const anoda = Object.assign({},cecle);
     console.log(anoda)
        // it must not be an empty object
        const ano = Object.assign({
            color : "pink", cecle
        });
        console.log(ano)

        // There is still yet the simplest way 'the spreed operator'
         const anotherC = {...cecle};
         console.log(anotherC)
         // Math.floor, random, min, max
         // types of string: object and primitive
         // for String.trim, includes, indexOf, replace, startWith, endWith, toUpperCase, toLowerCase, split

         // Temperate literals

         const message = 
         'This is a \n \'fine\'boy';
         console.log(message)

         const messag = 
         `This is a 
         'fine' boy`;
        
         console.log(messag)
         // benefits of using temperate literals. with temperate literal, you can add anything

         const firstname = 'Theodore';
         const email =
         `Hi ${firstname},
         You are welcome to our company
         yours faithfully
         Thanks`
         console.log(email)
         
         // DATE

         const now = new Date ();
         const date1 = new Date ('Oct 1 2019 6:52');
         const date2 = new Date (2019, 9, 1, 6);
         console.log(now)
         console.log(date1)
         date1.setMonth(11);
         console.log(date1)
         // toDateString, toTimeString, toISOString, getDate, getFullYear, setMonth, setFullYear

         let address={
            street : "No 2 Zainab street",
            city : 'Gbagada Lagos',
            zipCode : 112233
        };
         
         
         function showAddress(adddress){
             for (let key in address);
                console.log(address);
         };//(key, address[key ])
         showAddress(address);

         //factory function

         let addres = createAddress('a','b','c');
          console.log(addres)
         function createAddress(street, city, zipCode){
             return {
             street,
             city,
             zipCode
             
             };
         }
         // Constructor function
         let addre = new CreateAddress('a', 'b', 'c');
         let addre1 = new CreateAddress('a', 'b', 'c')
         console.log(areEqual(addre, addre1))
         console.log(areSame(addre, addre1))
         console.log(addre)
         function CreateAddress(street, city, zipCode){
             this.street = street;
             this.city = city;
             this.zipCode = zipCode;
         };
         // Object Equality
         // to check whether the referencing of the two objects are the same

         function  areEqual(addre, addre1){
             
             return addre.street === addre1.street &&
             addre.city === addre1.city && 
             addre.zipCode === addre1.zipCode;
             
             
         }
         

         function areSame(addre, addre1){
             return addre === addre1

        }
        
        let blog = {
            title : 'a',
            body : 'b',
            author : 'c',
            comment : [
                {author : 'a', body : 'b'},
                {author : 'b', body : 'c'}
            ],
            view : 10,
            isLive : true
        };
        console.log(blog)
    
        let post = new Post('a', 'b', 'c');
        console.log(post)
        function  Post(title, body, author){
            this.title = title;
            this.body = body;
            this.author = author;
            this.view = 0;
            this.islive = false;
            this.comment = []
        }
        let priceRanges = [
            
            { label : '$', Tooltip : 'inexpensive', minPerPerson : 0, maxPerPerson : 10 },
            { label : '$$', Tooltip : 'moderate', minPerPerson : 10, maxPerPerson : 20 },
            { label : '$$$', Tooltip : 'expensive', minPerPerson : 20, maxPerPerson : 30 },
        ];

        // ARRAYS
        // adding numbers to an array
        const numbers = [3,4,2]
        //end
        numbers.push(5,6);
        console.log(numbers);
        //beginning
        numbers.unshift(1,2);
        console.log(numbers);
        //middle
        numbers.splice(2, 0, 'a','b')
        console.log(numbers);

        // finding elements in an array (primitives)
        // because c doesnt exist, you get -1
        console.log(numbers.indexOf(c)); 
        console.log(numbers.indexOf(2));
        console.log(numbers.lastIndexOf(2));
        // to check if an element is in an array(the true means that '2' is an element of that array)
        console.log(numbers.indexOf(2)!== -1);
        // but then there is a new method of checking the above
        console.log(numbers.includes(2));

        // finding elements in an array (reference : object, array, function)
        const course = [
            { id : 1, name : 'a'},
            { id : 2, name : '2'},
        ] ;
        console.log(course.includes({id: 1, name : 'a'}))
         // the reason for the above false is because, you dont check references(.includes) the same way you check primitive
         const courses = course.find(function(courses){// you can also find the index by using 'findIndex'
         // arrow function course.find(course =>courses.name ==='a')    remember to remove the curly braces
         return courses.name ==='a';
         });
         console.log(courses)

         // removing elements from an array
         const num = [1, 2, 3, 4,5,6]
         // last
         const last = num.pop()
         console.log(last)
         console.log(num)

         const first = num.shift()
         console.log(first)
         console.log(num)

         num.splice(2, 1);
        console.log(num)

        // emptying an array

        let numb = [1, 2, 4, 5];
        //numb = [];
        //numb.length = 0;// it is always advisable to use this while emptying an array
         numb.splice(0,numb.length)
        console.log(numb)

        //combining and slicing array
        const fest= [1, 2, 3, 4]
        const second = [5,6,7,8]
            const combine= fest.concat(second)
            console.log(combine)

        const sliced1 = combine.slice(2,4);
        console.log(sliced1)

        // usage of spread(...) it spreads the element in an array and returns it and it's more flexible
         const one=[1,2,3,4];
         const two=[5,6,7,8];
         const combined= [...one,'a',...two,'b']
         console.log(combined)

         const nombers = [1,2,3];
         for (let number of nombers)
         console.log(number)

         nombers.forEach(function(number){//((number)=>console.log(number));
         console.log(number)
         })
            
         //join
         const nomba=[1,2,3];
         const join=nomba.join(",");
         console.log(join)

         //split
         const massage='This is a message';
         const part= massage.split(" ");
         console.log(part);

         const joined = part.join('-')
         console.log(joined);

        //sort
        const nuber=[2,5,3,4,1]
         nuber.sort();
         console.log(nuber);

         //reverse
         nuber.reverse();
         console.log(nuber);


         // sorting references
         const corse=[
             {id : 1, name : 'nodejs'},
             {id : 2, name : 'Javascript'},
         ];

         corse.sort(function(a,b){
             const nameA= a.name.toLowerCase();
             const nameB = b.name.toLowerCase();
             if(nameA < nameB) return -1;
             if(nameA > nameB) return 1;
        //if(a.name < b.name) return -1;
        //if(a.name > b.name) return 1;
        return 0;
         });

         console.log(corse);
         
         //checking positives with the key word 'every'
        const nom = [1, 2, 3, -4];
        const allPositive = nom.every(function(value){
            return value >= 0;
        });

        
        console.log(allPositive);

        //checking if some numbers are positive with the key word 'some'
        const nam = [1, -2, 3, 4];
        const somePositive = nam.some(value=> value >= 0
         );

         console.log(somePositive)


         //filter positives
         const namb = [1, 2, -3, -4, 5];
         const filterNegative = namb.filter(value=> value >= 0 //arrow function
         );

         console.log(filterNegative)

         // maping an object or a reference
         const namba =[1, 2, 3,-4, -5]
         const filtNegative = namba.filter(v=>v >= 0);

         const mapFilt = filtNegative.map(v=>({goods : v})
         );
         console.log(mapFilt)

         //chaining ; a shorter and cleaner code for the above
         const nama = [1, 2, 3, -4, -5]
         const chain = nama
         .filter(n=> n >=0)
         .map(n=> ({good: n}));

         console.log(chain)

        //sum
         const namai = [ 1, 2, -1, 4]
         let suma = 0;
         for(let n of namai)
         suma += n;
         console.log(suma);

        //sum using 'reduce'
        const namaie = [1, 2, -1, 4];
        const add = namaie.reduce((accumulator,currentvalue)=> accumulator + currentvalue);

        console.log(add)

        const ex = arrayFromRange(-5, 5);
        console.log(ex);

        function arrayFromRange(min, max){
            const outpu = [];
            for(let i = min; i <= max; i++)
            outpu.push(i);
            return outpu;
        };

        // if element is included in an array
        const numa = [1,2,3,4]
        console.log(include(numa,5))

        function include(array, searchelement){
            for(let element of array)
            if(element===searchelement)
            return true;
            return false;
        };

        const nummer = [1,2,3,4,5];
        const outputu = except(nummer, [1,2])
        console.log(outputu)

        function except(array, excluded){
            const outputu= [];
            for (let element of array)
            if (!excluded.includes(element))
            outputu.push(element)
            return outputu;

        }

        const namber = [1, 2, 3, 4];
        const outp = move(namber, 1, 1);

        console.log(outp);

        function move(array, index, offset) {
          const position = index + offset;
          if (position >= array.length || position < 0){
          console.error ('Invalid offset.');
          return;
        
        }

          const outp = [...array];
          const element = outp.splice(index, 1)[0];
          outp.splice(position, 0, element);
          return outp;
      }

      const nambe = [1,2,3,4,1];
      const counte = countOccurences(nambe, -1);
      console.log(counte);

      function countOccurences(array, searchElement){
        //let counte = 0;
        //for(let element of array)
        //if(element === searchElement)
        // count++;
        //return count;

        return array.reduce((accumulator, current)=>{
          const occurent = (current === searchElement)? 1 :0;
          return accumulator + occurent;
        }, 0);
      }

      const nambers = [1,2,3,4];
      const maxi = getMax([1, 2, 3, 7,]);
      console.log(maxi);

      function getMax(array){
        if(array.length === 0) return undefined;
         //let maxi = array[0];
         //for(let i = 1; i < array.length; i++)
            //if(array[i] > maxi)
            //maxi = array[i];

     // return maxi;


     return array.reduce((a, b) => (b > a) ? b : a);
      }

      const movies = [
          {title: 'a', year: 2018, rating: 4.5},
          {title: 'b', year: 2018, rating: 4.7},
          {title: 'c', year: 2018, rating: 3},
          {title: 'd', year: 2017, rating: 4.5},
      ];

      //All the movies in 2018 with rating > 4
      // Sort them by their rating
      //Descending order
      //Pick their title

      const titles = movies
        .filter(m=> m.year === 2018 && m.rating >= 4)
        .sort((a,b)=> a.rating - b.rating)
        .reverse()
        .map(m => m.title)

        console.log(titles)

        // argument operator
        function summ(){
          let total = 0;
          for (let value of arguments)
            total += value;
          return total;
        }

        console.log(summ(1,2,3,4,5,10));

         // ...Rest Operator
        function summm(...args){
          return args.reduce((a,b)=> a + b);
        }
        console.log(summm(1,2,3,4,5,10));

        // sum of prices and discounts
        function summe(discount, ...prices){
          const total = prices.reduce((a,b)=> a + b)
          return total * (1- discount);
        }

        console.log(summe(0.1, 20, 30))

        //Default Values
        function interest(principal, rate=3.5, years = 5){
          return principal * rate/100 * years;
        }
        console.log(interest(10000))


    
       try{
        const nummst = [1,2,3,4];
        const counta = countOccurences(null, 1);
        console.log(count);
       }
        catch(e){
            console.log(e.message)
        }

        function countOccurences(array, searchElement){
            if (!Array.isArray(array))
                throw new Error ('Invalid array.');
            return array.reduce((accumulator, current)=>{
            const occurrence = (current === searchElement)? 1 :0
                return accumulator + occurrence;
            }, 0)
        }
        
       

        const myFullname = {
            firstname : 'Theodore',
            lastName : 'Idoko',
            fullName(){
              return  `${myFullname.firstname} ${myFullname.lastName}`
            }

        }
        console.log(myFullname.fullName());

        //Getters and Setters
        // getters are used to access the properties of an object
        // setters are used to change or mutate the properties from the outside
        const perso = {
        firstname : 'Theodore',
            lastName : 'Idoko',
           get fullName(){
              return  `${perso.firstname} ${perso.lastName}`
            },
            set fullName(value){
                const parts = value.split(' ');
                this.firstname = parts[0];
                this.lastName = parts[1];
            }
        };
        //so with the set key word we can change the name from the outside
        perso.fullName = 'Tochukwu Idoko';
        console.log(perso);
        // with the get key word we can access the original obect
        console.log(perso.fullName)

        // error handling, sometimes we need to throw an exception
        const pers = {
            firstname : 'Theodore',
            lastName : 'Idoko',
                set fullName(value){
                    if(typeof value !== 'string') // throw error
                    throw new Error('Value is not a string.');
                    const parts = value.split(' ');
                    if(parts.length !== 2)
                    throw new Error('Enter the first and last name');
                    this.firstname = parts[0];
                    this.lastName = parts[1];
                }
            };
            
            try{
                pers.fullName = null;
            }
            catch(e) {
               alert(e);
            }
            console.log(pers);

            console.log(toSum([1,2,3,4]))

            //the rest(...) is use to spread the above function so that it can be summed
            //the 'if' is so that both an array and other things can be calculated
            function toSum(...rest){
                if(rest.length === 1 && Array.isArray(rest[0]))
                rest=[...rest[0]];
                return rest.reduce((a,b)=> a+b);
            }

           const kircle3 = {
            radius : 1,
                get area(){
                    return Math.PI * this.radius * this.radius;
                 }
          };
        console.log(kircle3.area)




        //OBJECT ORIENTED PROGRAMMING (OOP)


            //factory function
            function createCircle(radius){
                return{
                radius,
                draw (){
                    console.log('draw');
                }
                };

            }

            const circle4 = createcircle(1);
            console.log(circle4);

            // constructor function
            function Circle5(radius){
                this.radius = radius;
                this.draw = function(){
                    console.log('draw');
                }
            }
            const circle6 = new Circle5(2);

            console.log(circle6);

            //adding or deleting properties in an object
            circle6.location = {x : 1};
            circle6['loction']= {y : 2};
            // to delete
            delete circle6.loction;
            console.log(circle6)

            //enumerating members in an object
            for (let key in circle6){
                //to display only properties and not methods
                if(typeof circle[key] !== 'function')
                console.log(key, circle[key]);
            }

            // another way to get the keys in a circle
            const keys = Object.keys(circle);
            console.log(keys);

            // to check if a property is in an object

            if ('radius' in circle6)
            console.log('Circle has a radius.');



            //exercise stopwatch

             function Stopwatch(){
                 let starTime, endTime, running, duration = 0;
                 
                 this.start =function(){
                     if (running)
                     throw new Error('Stopwatch has already started')

                     running = true;

                     startTime = new Date();

                 };

                 this.stop = function(){
                     if (!running)
                        throw new Error ('Stopwatch is not started.')
                    
                        running = false;

                        endTime = new Date();

                        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
                        duration += seconds;

                 };

                 this.reset = function(){
                     startTime = null;
                     endTime = null;
                     running = false;
                     duration = 0;

                 };

                 Object.defineProperty(this, 'duration', {
                     get : function(){return duration;}

                 });
             }
             const stpwatch = new Stopwatch();
             console.log(stpwatch.start)
             console.log(stpwatch.stop)
             
             
        

             // PROTOTYPES
             
function Circ(radius){
    //instance members
    this.radius = radius;
} 

// prototype members
// the draw method is hidden inside the prototype of Circ 
//inside of the Circ itself. this helps to save memory through inheritance
Circ.prototype.draw = function(){
    console.log('draw');
}
            
  const c7 = new Circ(7);
  const c8 = new Circ(8);


  console.log(c7);
  console.log(c7.draw);


    // ITERATING INSTANCES AND PROTOTYPES
  function Cirk(radius){
      // Instance members
      this.radius = radius;

      this.move = function(){
          console.log('move');
      }
  }
  const c9 = new Cirk(9);

  // prototype members
  Cirk.prototype.draw = function(){
      console.log('draw');
  }
  // Object .keys returns only instance members
  console.log(Object.keys(c9));

  //for in loop returnss(intance and prototype members)
  for (let key in c9)console.log(key);



  // PROTOTYPICAL INHERITANCE
  function Shape(){
  }

    Shape.prototype.duplicate = function(){
        console.log('duplicate');
    }


    function Sircle(radius){
        this.radius = radius;
    }
     //Sircle inherited duplicate from shape.prototype
    Sircle.prototype = Object.create(Shape.prototype);
    //in other to make the sircle still retain its sircle 
    // constructor property you do this below
    Sircle.prototype.constructor = Sircle;
    
    Sircle.prototype.draw =function(){
        console.log('draw');
    }

    const sh = new Shape();
    const s = new Sircle(2);

    //duplicate is now in s which is Sircle prototype
    console.log(s.duplicate)


    // CALLING THE SUPPER CONSTRUCTOR
    function Shap(color){
        this.color = color;
    }
  
      Shap.prototype.duplicate = function(){
          console.log('duplicate');
      }
  
  
      function Sircl(radius, color){

          Shap.call(this,color);

          this.radius = radius;
      }
       //Sircle inherited duplicate from shape.prototype
      Sircl.prototype = Object.create(Shap.prototype);
      //in other to make the sircle still retain its sircle 
      // constructor property you do this below
      Sircl.prototype.constructor = Sircl;
      
      Sircl.prototype.draw =function(){
          console.log('draw');
      }
  
      const shA = new Shap();
      const sI = new Sircl(2, 'red');
      console.log (sI);
  
      //duplicate is now in s which is Sircle prototype
      console.log(sI.duplicate)
      

      // Square constructor using the shap 
      function Square(size){
          this.size = size;
          
      }
      Square.prototype = Object.create(Shape.prototype);
      Square.prototype.constructor = Square;
       
      const squar = new Square(8);
      console.log(squar);
      console.log(squar.duplicate);

      // INTERMEDIATE INHERITANCE
      function Shapes(color){
        this.color = color;
    }
  
      Shapes.prototype.duplicate = function(){
          console.log('duplicate');
      }
      

      // instead calling the shapes property in both sircles
      // and shapes i decided to introduces intermediate inheritance
      //which is the extend function
      function extend(Child, Parent){
      Child.prototype = Object.create(Parent.prototype);
      Child.prototype.constructor = Child;
      }
      


      function Sircles(radius, color){

          Shapes.call(this,color);

          this.radius = radius;
      }
      
      extend(Sircles,Shapes)

      Sircles.prototype.draw =function(){
          console.log('draw');
      }
  
      const shAt = new Shapes();
      const sIt = new Sircles(2, 'blue');
      console.log (sIt);
       console.log(sIt.duplicate)
      

      // Square constructor using the shap 
      function Squares(size,color){
          this.size = size;
          //But it is not a must i will add the color property
          Shapes.call(this,color)
          
      }
      extend(Squares,Shapes);


      const squares = new Squares(4,'white');
      console.log(squares);
      console.log(squares.duplicate);

      // METHOD OVERRIDING
      function extension(Child, Parent){
          Child.prototype =Object.create(Parent.prototype);
          Child. prototype.constructor = Child;
      }

      function Shaping(){
      }
      Shaping.prototype.duplicate = function(){
          console.log('duplicate');
      }

      function Circling(){
      }

      extension(Circling,Shaping);
      
      // because this duplicate function isnt suitable for
      // the circle i am trying to create i will override it
      Circling.prototype.duplicate = function(){
          console.log('duplicate circle')
      }

      const circling = new Circling;
      console.log(circling.duplicate);


      // polimorphism meaning different forms of an inheritance
      function Squaring(){
      }
      extension(Squaring,Shaping);

      Squaring.prototype.duplicate = function(){
          console.log('duplicate square');
      }

      const shaps = [
          new Circling(),
          new Squaring()
      ];

      for (let shape of shaps)
     shape.duplicate();

     //MIXING
     const canEat = {
         eat : function(){
             this.hunger--;
             console.log('eating');
         }
     };  

     const canWalk = {
         walk: function(){
             console.log('walking');
         }
     };

     const someone = Object.assign({}, canEat, canWalk);
     console.log (someone);

     // USE CONSTRUCTOR

     const canAte = {
         eat : function(){
             console.log('eat')
         }
     };

     const canWalked = {
         walk : function(){
             console.log('walk');
         }
     };

     const canSwim = {
         swim: function(){
             console.log('swim')
         }
     }

     function Person(){
     }

      Object.assign(Person.prototype, canAte, canWalked);

      const persone = new Person();
      console.log(persone);
      console.log(persone.eat)

      // with constructor and meat we can call canAte, canWalked, canSwim

      function Goldfish(){
      }
      
      Object.assign(Goldfish.prototype, canAte, canSwim);

      const fish = new Goldfish();
      console.log(fish);
      console.log(fish.swim)



      //AN EXERCISE on INHERITANCE

      function HtmlElement(){
          this.click = function(){
              console.log('clicked');
          }
      }

      HtmlElement.prototype.focus = function(){
          console.log('focused');
      }

       function HtmlSelectElement(items = []){
           this.items = items;

           this.addItem = function(item){
               this.items.push(item);
           }
           this.removeItem = function(item){
            this.items.splice(this.items.indexOf(item),1 );
        }
       }

       HtmlSelectElement.prototype = new HtmlElement();
       const selement = new HtmlSelectElement();
       console.log(selement);
       console.log(selement.click);
       console.log(selement.focus);


       // AN EXERCISE ON POLYMOPHISM


       function HtmlElements(){
        this.click = function(){
            console.log('clicked');
        }
    }

    HtmlElements.prototype.focus = function(){
        console.log('focused');
    }

     function HtmlSelectElements(items = []){
         this.items = items;

         this.addItem = function(item){
             this.items.push(item);
         }
         this.removeItem = function(item){
          this.items.splice(this.items.indexOf(item),1 );
      }
          this.render = function(){
              return `
            <select>${this.items.map(item =>`
            <option>${item}</option>`).join(' ')}
            </select> `
          }
     }

     HtmlSelectElements.prototype = new HtmlElements();
     const selements = new HtmlSelectElements();


     function HtmlImageElement(src){
         this.src = src;

         this.render = function(){
             return `<img src="${this.src}" />`
         }
     }

     HtmlImageElement.prototype = new HtmlElements();
     HtmlImageElement.prototype.constructor = HtmlImageElement();

      const htmlimage = new HtmlImageElement()
      console.log(htmlimage);
      console.log(htmlimage.click)


      //ES6 CLASSES

      // REMEMBER THAT CLASS DECLARATION OR CLASS EXPRESSION ARE NOT HOISTED
      class SemiCircle{
          constructor(radius){
              this.radius = radius;
              this.move = function(){}
          }
          draw(){
              console.log('draw');
          }
      }

      const semicircle = new SemiCircle(3)
      console.log(semicircle)



      //INSTANCE AND STATIC METHOD


     // class Cecle {
        //  constructor (radius){
       //       this.radius = radius;
         // }
          //Instance Method
        //  draw(){
        //  }
          //Static Method
         //static parse(str){
           //   const radius = JSON.parse(str).radius;
            //  return new Cecle(radius)
         // }
     // }

     // const secle = Cecle.parse('{"radius" : 1}');
     //console.log(secle);
      //static method is used to create utility functions 
      //that are not tyed to a particular object

      // ABSTRACTION IN ES6
      const _radius = Symbol();
      const _draw = Symbol();

      class Secle{
          constructor(radius){
              this[_radius] = radius;
          }
          [_draw](){
          }
      }

      const sec = new Secle(2);
      console.log(sec);
      console.log(sec.radius)

      //ABSTRACTION USING WEAKMAP

      const _radiu = new WeakMap();
      const _move = new WeakMap();

      class Semi{
          constructor(radiu){
            _radiu.set(this, radiu);
            _move.set(this, function(){
                console.log('move', this);
            });
          }
          draw(){
              console.log(_radiu.get(this));
          }
      }
const semi = new Semi(4);
console.log(semi);
console.log(semi.radiu);
console.log(semi.draw);


      //GETTERS AND SETTERS IN ES6
      const _radi = new WeakMap();

      class SemiSec{
          constructor(radi){
              _radiu.set(this,radi);
          }

          get radi(){
              return _radi.get(this);
          }

          set radi(value){
              if (value <= 0) throw new Error ('invalid radius')
              _radi.set (this,value);
          }
      }
const semisec = new SemiSec(8)
console.log(semisec);
//with the setter you can set the radius from outside
semisec.radi = 10;
console.log(semisec.radi)

//INHERITANCE IN ES6


class Shpe {
    //if the shape needs a color, otherswise only the move method
    constructor(color){
        this.color = color
    }

    move(){
        console.log('move');
    }
}
//With the extends key word we don't have to reset the constructor
class Crcle extends Shpe{
    //you can add additional property like the radius if you like
    constructor(color,radius){
        // You must use the super key word to call the constructor property
        super(color);
        this.radius = radius;
    }
    draw(){
        console.log('draw');
    }
}

const crcle = new Crcle('black', 1 );
console.log(crcle);


//OVERRIDING IN ES6

class Shp {
    move(){
        console.log('move');
    }
}

class Crcl extends Shp {
    // it displays the move in the Crcl rather than the shape
    // but if you want both that of the shape and circle
    //super.move();
    move(){
        console.log('circle move')
    }
}

const crcl = new Crcl();
console.log(crcl.move);


// STACK EXERCISE
const _items = new WeakMap();

class Stack {

    constructor(){
        _items.set(this, []);
    }

    push(obj){
        _items.get(this).push(obj);
    }

    pop(){
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error ('Stack is empty.');
            return items.pop();
    }
    peek(){
        const items = _items.get(this);

        if (items.lenght === 0)
            throw new Error ('Stack is empty.');

            return items[items.length]
    }
    get count(){
        return _items.get(this).length;
    }
}


// CLASSES


class Circle {
    constructor(radius) {
        this.radius = radius; 
    }

    // These methods will be added to the prototype. 
    draw() {
    }

    // This will be available on the Circle class (Circle.parse())
    static parse(str) {
    }
}

// Using symbols to implement private properties and methods
const _size = Symbol();
const _draw = Symbol();

class Square {
    constructor(size) {
        // "Kind of" private property 
        this[_size] = size; 
    }

    // "Kind of" private method 
    [_draw]() {
    }

    // By "kind of" I mean: these properties and methods are essentally
    // part of the object and are accessible from the outside. But accessing
    // them is hard and awkward. 
}

// using WeakMaps to implement private properties and methods
const _width = new WeakMap();

class Rectangle {
    constructor(width) {
        _width.set(this, width);
    }

    draw() {
        console.log('Rectangle with width' + _width.get(this));
    }
}


const _radius = new WeakMap();
const _move = new WeakMap();

class Circl {
    constructor (radius) {
        _radius.set(this, radius);
        // if ordinary function instead of arrow function is used
        // below, it won't work
        _move.set(this, () =>{
            console.log('move', this);
        });
    }
    draw() {
        _move.get(this)();
        console.log('draw')
    }
}

const c = new Circl();


// Getters and Setters m
const _rad = new WeakMap();

class Circ {
    constructor(rad) {
        _rad.set(this, rad);
    }
    get rad(){
        return _rad.get(this);
    }

    set rad(value) {
        if (value <= 0) throw new Error('invalid radius')
        _rad.set(this, value);
    }
}


const ci = new Circ
// WeakMaps give us better protection than symbols. There is no way 
// to access private members implemented using WeakMaps from the 
// outside of an object. 

// Inheritance 
class Triangle extends Shape {
    constructor(color) {
        // To call the base constructor 
        super(color);
    }

    draw() {
        // Call the base method 
        super.draw();

        // Do some other stuff here
    }
}

const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(obj) {
    _items.get(this).push(obj);
  }

  pop() {
    const items = _items.get(this);

    if (items.length === 0)
      throw new Error('Stack is empty.');

    return items.pop();
  }

  peek() {
    const items = _items.get(this);

    if (items.length === 0)
      throw new Error('Stack is empty.');

    return items[items.length - 1];      
  }

  get count() {
    return _items.get(this).length;
  }
}