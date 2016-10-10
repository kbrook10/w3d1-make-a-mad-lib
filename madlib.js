var number1 = 5;
var occupation1 = 'Nurse';
var occupation2 = 'Engineer';
var place1 = 'Dubai';
var person1 = 'Johnny Quest';
var place2 = 'Tennessee';
var occupation3 = 'Chef';
var bodyPart1 = 'toe';
var adjective1 = 'clever';
var noun1 = 'people';
var bodyPart2 = 'head';
var celebrity = 'Sidney Poitier';
var verbWithIng = 'attacking';
var adverb = 'actively';
var verbWithS = 'bombs';
var number2 = 10;
var isThatAll = false;
var farewell = (isThatAll?'That is all I got!': 'What should we discuss next?' );
var noun2 = 'system';
var adjective2 = 'important';

var madlib = `${number1} years after the end of Rush Hour 2, James Carter is no longer a ${occupation1}, but a ${occupation2} on the streets of ${place1}. Lee is now the bodyguard for his friend ${person1}. Lee is still upset with Carter about an incident in ${place2} when Carter accidentally shot Lee\`s girlfriend, ${occupation3} Isabella Molina, in the ${bodyPart1}.  During the ${number2}th World Criminal Court discussions, as ${person1} addresses the importance to fight the Triad, he announces that he knows the ${adjective1} of the Triad leadership known as the Shy Shen ${noun2}. Suddenly, ${person1} takes a ${noun1} in the ${bodyPart2}, disrupting the ${adjective2} conference. Lee pursues the assassin and corners him, discovering that the assassin is his brother, ${celebrity}. When Lee hesitates to shoot ${celebrity}, Carter shows up ${verbWithIng} towards the two and ${adverb} ${verbWithS} Lee over, allowing ${celebrity} to escape.

    ${farewell}`;

    if (isThatAll === true){
      console.log(madlib + ' ' + celebrity + ' ' + verbWithIng.substring(0,6) + 's again!');
    }   else{
        console.log(madlib + ' ' + person1 + ' is a great topic!');
    }
