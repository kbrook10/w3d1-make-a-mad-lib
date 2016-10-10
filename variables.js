// Intentionally made global by leaving off var before variable
log = console.log.bind(console);

var defaultName = 'Johnny Quest';

function sayHello(name) {
  if (name === undefined) {
    console.log('Hello, ' + defaultName + '!');
  }
  else {
    console.log('Hello, ' + name + '!');
  }
}
//sayHello();
//sayHello('Cyrus');
/*sayHello('Caius');
sayHello('Carys');*/

// global.console.log('Hello');
var transportationName = 'Prius';
var transportationType = 'Car';
var $cost = 'TooMuch';
var _green = true;
var transportationNumber1 = true;
var snake_case_variable_is_okay = true; //This is python or ruby developers
var camelCaseIsBest = true; //This is the format to use...

//Ways to make variables
var thisIsAVariable = true; //This variable has a scope of global
let thisBeTrue = true;
const thisNeverChange = true;

function testVariables () {
  var thisIsNotAvailableOutside = true; //This variable has a scope of local
  console.log(thisIsAVariable);
}

// console.log(thisIsNotAvailableOutside);

if (true === true){
  let thisIsNotAvailableOutside = true;
}

// log(thisIsNotAvailableOutside);

const thisCannotChange = true;
// thisCannotChange = false;

var firstName = 'Keith';
firstNae = 'Brooks';

var lastName;
// console.log(lastName); //<-- output at this point in the code

var thisIsUndefined; //This variable is undefined
var thisIsNull = null; //Null means empty
var thisIsBoolean = false; //Always binary true/ false
var thisIsNumber = 12.34; //This is a number
var thisIsString = '12.34'; //The quotes make this a string
var thisIsExpression = ((1+1) * 100 / 4 -8);
// var thisIsInput = inputs.first_name;

// Write five variables about movie, song or TV Show
var movieTitle = 'Gladiator';
var movieDirector = null;
var movieYear = 2002;
var movieGenre = 'drama';
var movieIsMovie = true;

// console.log (movieTitle, movieDirector, movieYear, movieGenre, movieIsMovie);
var verb = 'ran';
var sentence = 'Flying by the tower, I ' + verb + ' to ' +
'safety.';
console.log(sentence);

var verb = 1;
var sentence = 12 + verb + 12;
console.log(sentence);

var verb = 'ran';
var sentence = `Flying by the tower, I ${verb} to
safety.`;
console.log(sentence);

var on = 0;
var ternary = (on ? 'The light is on.' : 'The light is off.');
console.log(ternary);
