var animal = 'dog'

function myAnimal() {
  return animal
  
}

function yourAnimal() {
  var animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2 
  return n + two

  // Feel free to move things around!
  
  
}

var funkyFunction = function() {
  return function() {
    return "Funky!" 
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var myFunction= funkyFunction()
var theFunk = myFunction();
var theFunk = funkyFunction()()
// theFunk();


// var myCHild = parent()
// myChild()