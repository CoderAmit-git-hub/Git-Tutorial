let str = "Hello World";// String
let int = 35;// Integer
let flt = 77.99;// Float
let bol = true + false; // Boolean
let obj = { fName:"Amit", lName:"Hashan", aGe:23 }; // Object 
let ary = ['Mizanur','Mymemsingh','Freelancer']; // Array

let fruit = "Mango,Tomato,Potato,Banana";
let veget = "Mulla sak";

console.log(fruit.length);
console.log(veget.indexOf('ak'));
console.log(fruit.slice(1,4));
console.log(fruit.replace('go',123));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt('1'));
console.log(fruit[3]);
console.log(fruit.split('')); // Split by charecter
console.log(fruit.split(',')); // Split by comma

// Array

let fish = ['Pangkas','Telapia','Gulsa','Pabda','Sing']; // One way array
let foll = new Array('Amm','Jamm','Kathal','Lichu','Amraa'); // Another way array

console.log(fish);

fish[2] = 'Onno mas';

console.log(fish.length);

for( let i = 0; i < fish.length; i++ ){
	console.log(fish[i]);
}

console.log('To string : ',fish.toString());

var dim = "Dim onk sussadu khabar";
var dimSplit = dim.split(' ');
console.log(dimSplit[2]);

var kela = ['desi Kela','bidesi Kela','Sobri Kela','Bechi Kela'];
console.log(kela);
var kelaT = new Array('Amm','Kela','Jam','Kela Two');
console.log(kelaT);
kelaT[2] = "Onno fol";

console.log(kelaT);

for( var j = 0; j < kelaT.length; j++ ){
	console.log(kelaT[j]);
}

let fname = ['Amit','Hemal','Mukul','Sriti','Mim'];
fname.toString(); // array k string e convert kora
console.log(fname.join(' ')); // array er man gulu sting e convert korar por kisu die jokto kora

let room = ['Leptop','Mobile','Brush'];
console.log(room.pop()); // array er prothom value ta delete kora
console.log(room);
room.push('Headphone'); // er kaj array er modde natun array er man jokto kora

let col = ['Sreepur','Bhawal','Anondo Muhon'];
let concet = room.concat(col); // er kaj holo array er sathe natun array jok kora
let rever = concet.reverse(); // er kaj value gulu sob Ultay fele

let shortNum = new Array(5,2,6,3,3,55,2,4,7,8,0,1,9);
console.log(shortNum.sort(function(a,b){return a-b})); // Sort by Accending
console.log(shortNum.sort(function(a,b){return b-a})); // Sort by Decending

let eptArray = new Array();
for( let num = 0; num <= 10; num ++ ){
	eptArray.push(num);
}

console.log(eptArray);


/*
	Object for JavaScript
*/
let color = {
	lal: 'red',
	nil: 'blue',
	holod: 'yellow',
	number : 51,
	allColor: function(){
		return this.lal + '\n' + this.nil + '\n' + this.holod;
	}
};

console.log(color.number);

let student = {
	name : 'Mohammad',
	uname : 'amin',
	cell : 2323,
	locat : 'Modina',
	stFun : function(){
		return "Keshorgonj Degree College, Fullbaria, Mymensingh";
	},
	st_arry : ['Hemal','Mukul','Minhaj','Dipa']
}

console.log(student['st_arry'][0].length);
console.log(student);

function Teacher( name,uname,cell,locat ){
	this.name  = name;
	this.uname = uname;
	this.cell  = cell;
	this.locat = locat;

	this.display = function(){
		console.log(this.name);
		console.log(this.uname);
		console.log(this.cell);
		console.log(this.locat);
	}
}

let stu_one   = new Teacher('Amit','amit',555,'Myemnsingh');
let stu_two   = new Teacher('Amit','amit',555,'Myemnsingh');
let stu_three = new Teacher('Amit','amit',555,'Myemnsingh');

stu_three.display();


/*
	JavaScript Window
*/
// Confirm
function conFirm(){
	let con = confirm("Are you sure ?");
	let con_yes = 'Yes';
	let con_no = 'No';

	if( con === true ){
		console.log(con_yes);
	}else{
		console.log(con_no);
	}
}

function winBlur(){
	let myWindow = window.open("", "", "width=600, height=500"); // Opens a new window
	myWindow.document.write("<p>A new window!</p>"); // Some text in the new window
	 // Assures that the new window does NOT get focus
}


/*
	Conditional, Control Flows( if , else )
	&& = AND
	|| = OR
*/
// let age = prompt("What is your age ?");
// if( age >= 18 && age<=35 ){
// 	status = "Target demo";
// }else{
// 	status = "Target other site";
// }
// console.log(status);

/*
	Switch Statement
*/

// let boyos = 23
// switch(boyos){
// 	case 5:
// 		varText = 5;
// 		break;
// 	case 23:
// 		varText = 30;
// 		break;
// }

// console.log(varText);

// console.log(Math.SQRT2);

// for( let num = 0; num <= 10; num+=2 ){
// 	console.log(num);
// }
// let num = 0;

// while( num < 20 ){

// 	let numT = num += 4;

// 	console.log(numT);
// }

// var nubmer = 3;
// console.log(nubmer % 10);

// function demo(){
// 	console.log("hi");
// }

// demo();


// var fName = "Mizanur Rahman";
// function callName(){
// 	return "Hello " + fName;
// }

// console.log(callName());

// function intProm(){
// 	var pRom = prompt("What is your name ?");
// 	var finRul = "Hi " + pRom;

// 	console.log(finRul);
// }

// intProm();


// var age = 20;
// if( age = 20 ){
// 	var intProm = prompt("What is your age ?");
// 	var finProm = "Hello " + intProm ;

// 	console.log(finProm);
// }else{
// 	console.log("Age is incorrect!");
// }

// function result(amit){

// 	var finalNam = "Hello " + amit;
// 	console.log(finalNam);
// }

// var nam = prompt("What is your name");
// result(nam);

// var person = prompt("Please enter your name", "Harry Potter");

// if (person != null) {
//   document.getElementById("old").innerHTML =
//   "Hello " + person + "! How are you today?";
// }

