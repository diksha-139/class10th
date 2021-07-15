var a = prompt("Enter 1st number")

var b = prompt("Enter 2nd number")

var button;
function setup() {

  createCanvas(400, 400);

button = createButton("Click here to swap the numbers ")
button.mousePressed(swap)
}



function draw() {

  background(255);

 
  text("x= "+ mouseX+ " , y = " + mouseY ,mouseX,mouseY)
  
}


function swap(){
[a,b]  = [b, a]

console.log("new value of a after swapping = "+a);
console.log("new value of b after swapping = "+b);
console.log("hello Kanvi")
}
