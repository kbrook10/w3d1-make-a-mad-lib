// Creating variables
var firstName = 'Keith';
var lastName = 'Brooks';
var emailAddress = 'kbrook10@gmail.com';
var grewUpCity = false;
var collegeYears = 5;
var highSchoolGradYear = 2004;
var numberOfPets = 2;
var numberOfChildren = 0;
var favoriteMusicGenre = 'R&B';
var favoriteMovie = 'Gladiator';

//Using the Object Literal
var whoAmI ={
    firstName: 'Keith',
    lastName: 'Brooks',
    emailAddress: 'kbrook10@gmail.com',
    grewUpCity: false,
    collegeYears: 5,
    highSchoolGradYear: 2004,
    numberOfPets: 2,
    numberOfChildren: 0,
    favoriteMusicGenre: 'R&B',
    favoriteMovie: 'Gladiator'
};
//Introduction questions
console.log('Who am I, you ask? ' + whoAmI.firstName + ' ' + whoAmI.lastName);
//Contact info. questions
console.log('What is my email? '+ whoAmI['emailAddress']);
//Education questions
console.log('How many years was I in college? ' + whoAmI['collegeYears'] + '.  When did I graduate high school? ' + whoAmI.highSchoolGradYear);
//Family questions
console.log('I currently have ' + whoAmI.numberOfPets + ' pets and ' + whoAmI.numberOfChildren + ' children.');
//Entertainment questions
console.log('Typically, I enjoy listening to ' + whoAmI.favoriteMusicGenre + ' ,and my favorite movie is ' + whoAmI.favoriteMovie);

var highSchoolGradYear = new Date();
highSchoolGradYear.setFullYear(2016);
console.log(highSchoolGradYear);
