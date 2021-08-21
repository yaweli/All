// import { throws } from "assert";
// import { reduceEachLeadingCommentRange } from "typescript";

// Type script collection practice
// Warning - do not EDIT the *.js files //
//////////////////////////////////////////

console.log("started...");


// Interface , new types structures
// object’s shape using an interface
interface User {
    name: string;
    id: number;
    tel?:number;   // optional
  }
  
class Customer {
    // automatic set this.x=x ...
    constructor(public x:number, public y:number){} 
  }
  
let cust1=new Customer(100,200)
  

// property get and set 
class Cars {
  constructor(public _x:number, public _y:number){} 

  set x(newvalue) {    // setter
    this._x=newvalue
  }
  get x() {            // getter
    return this._x
  }
}
let car1=new Cars(100,200)
car1.x=400                      // "set" will run
console.log(car1.x)             // "get" will run


class UserAccount {
  name: string;
  id: number;
  tel:number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    this.tel=0;
  }
}
  
// export class to be visiable as module to other files
// export class UserAccount { ...  }
// To use it other place: 
// import { UserAccount } from "./useraccount"
// where file = useraccount.tsx



  // new value types
  // 
  type WindowStates = "open" | "closed" | "minimized"

  var i : WindowStates 

  i="open"
  i="closed"

  console.log('typeof == '+typeof i)

  let vvv : string = "abcd"
  console.log('vvv == '+vvv);

  const b:number [] = []; 
  b.push(11)
  b.push(12)
  console.log(b);

// 
type Person = [ number,string,string? ]

const myperson :Person = [33333,"eli"]
console.log(myperson);


// generics

class NewClass<external_type> {
  constructor ( public aaa: external_type) {}
}

const aa = new NewClass<number>(222); 
console.log("aa :")
console.log(aa)
const bb = new NewClass<string>("xxxxx"); 
console.log("bb :")
console.log(bb)
const cc = new NewClass<Person>([4444,"eli","ggg"]); 
console.log("cc :")
console.log(cc)

let x : NewClass<number>

let y : NewClass<string> 

console.log("y :")
// console.log(typeof y)

// let yy = "abc" ! as HTMLInputElement
// yy.value

console.log("string type == "+typeof "23")
console.log("string case to number type == "+typeof +"23")


enum Colors  {red, blue, green}
console.log("colors = "+Colors.blue)

let mes1 ;  // mes1 is type 'any'
mes1="abcd" //         vvvvvvvvv  
let ifendswith = (mes1 as string).endsWith("c")

function log(mes2:any) {
    console.log(mes2)
}
let log1 = function(mes3:any) {
  console.log(mes3)
}
let log2 = (mes4:any) => {    // arrow function (lambda expresion)
  console.log(mes4)
}
let log3 = () => console.log("hello");
let log4 = (mes5:any) => console.log(mes5);
//let log5 = mes6:any => console.log(mes6:any);

log3()
log4("message")
// log5("mes1111")

// in line anotation
let drawPoint = ( point : {x:number, y:number}) => {
  console.log("x="+point.x+" y="+point.y)
}
drawPoint({x:200,y:300}) ;

// *** interface ***
interface Point { x:number ,y:number}
let drawPoint1 = ( point : Point) => {
  console.log("x="+point.x+" y="+point.y)
}
drawPoint1({x:200,y:300}) ;


const user: User = new UserAccount("Murphy", 1);
console.log(user);
console.log('user='+user);
console.log('user.name='+user.name);
console.log("ended...");
