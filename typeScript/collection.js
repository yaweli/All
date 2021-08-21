// import { throws } from "assert";
// import { reduceEachLeadingCommentRange } from "typescript";
// sHORT GUIDE TO TYPE SCRIPT:
console.log("started...");
class Customer {
    // automatic set this.x=x ...
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let cust1 = new Customer(100, 200);
// property get and set 
class Cars {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    set x(newvalue) {
        this._x = newvalue;
    }
    get x() {
        return this._x;
    }
}
let car1 = new Cars(100, 200);
car1.x = 400; // "set" will run
console.log(car1.x); // "get" will run
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.tel = 0;
    }
}
var i;
i = "open";
i = "closed";
console.log('typeof == ' + typeof i);
let vvv = "abcd";
console.log('vvv == ' + vvv);
const b = [];
b.push(11);
b.push(12);
console.log(b);
const myperson = [33333, "eli"];
console.log(myperson);
// generics
class NewClass {
    constructor(aaa) {
        this.aaa = aaa;
    }
}
const aa = new NewClass(222);
console.log("aa :");
console.log(aa);
const bb = new NewClass("xxxxx");
console.log("bb :");
console.log(bb);
const cc = new NewClass([4444, "eli", "ggg"]);
console.log("cc :");
console.log(cc);
let x;
let y;
console.log("y :");
// console.log(typeof y)
// let yy = "abc" ! as HTMLInputElement
// yy.value
console.log("string type == " + typeof "23");
console.log("string case to number type == " + typeof +"23");
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["blue"] = 1] = "blue";
    Colors[Colors["green"] = 2] = "green";
})(Colors || (Colors = {}));
console.log("colors = " + Colors.blue);
let mes1; // mes1 is type 'any'
mes1 = "abcd"; //         vvvvvvvvv  
let ifendswith = mes1.endsWith("c");
function log(mes2) {
    console.log(mes2);
}
let log1 = function (mes3) {
    console.log(mes3);
};
let log2 = (mes4) => {
    console.log(mes4);
};
let log3 = () => console.log("hello");
let log4 = (mes5) => console.log(mes5);
//let log5 = mes6:any => console.log(mes6:any);
log3();
log4("message");
// log5("mes1111")
// in line anotation
let drawPoint = (point) => {
    console.log("x=" + point.x + " y=" + point.y);
};
drawPoint({ x: 200, y: 300 });
let drawPoint1 = (point) => {
    console.log("x=" + point.x + " y=" + point.y);
};
drawPoint1({ x: 200, y: 300 });
const user = new UserAccount("Murphy", 1);
console.log(user);
console.log('user=' + user);
console.log('user.name=' + user.name);
console.log("ended...");
