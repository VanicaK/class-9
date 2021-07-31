

var a = prompt('Enter the first variable: ');
var b = prompt("Enter the second variable: ");

function setup() {
  createCanvas(500,500);
  var b2 = createButton("click here to Swap");
  b2.position(200,200);
  b2.mousePressed(swap);
}


function draw() {
  background("grey");
}


function swap(){
console.log("Before Swapping A="+a);
console.log("Before Swapping B="+b);
/*a1=a;
a=b;
b=a1;*/
[a,b]=[b,a];
console.log("After Swapping A="+a);
console.log("After Swapping B="+b);
}