
var array =[];

$(function () {
    // set some global variables 

var random = Math.floor(Math.random()*102)+19;        // a random number that will generate your target pionts, between 19 and 120
var count = 0;  
var sum=0;
var wins =0;  
var loss = 0; 


 var x = Math.floor((Math.random()*12)+1);
 var y = Math.floor((Math.random()*12)+1);
 var z = Math.floor((Math.random()*12)+1);
 var f = Math.floor((Math.random()*12)+1);
 var randomnumber = [x,y,z,f];               // an array that generates 4 random numbers for the crystals between `1 and 12

$('.goal').text("Target Score: " + random);


$('.firstcrystal').on("click", function () {
var count =  randomnumber[0]; 

sum = 0;  // set initial sum to zero 
    array.push(count);     // var array is an empty array and a random number willl be pushed into the array when you click on the crystal
   console.log(array);             //open the console to see all the numbers being added up!
   array.forEach(number => {          // forEach number in the arrays the numbers will be added up (Using the arrow function).
          sum = sum + number ;       
   })
    restart();                   // the restart function is called and determines if you have won or lost. It then restarts the game. 
$('.totalpionts').text("Your Points: " + sum);
});


$('.secondcrystal').on("click", function () {            // this block of code is the same as above but for the second crystal
      count = randomnumber[1];
    array.push(count);
    console.log(array);
    sum = 0;  
    array.forEach( number => {
        sum = sum + number;
    });  
$('.totalpionts').text("Your Points: " + sum);
restart();
});


$('.thirdcrystal').on("click", function () {     //same as above but for the third crystal
      count = randomnumber[2];
    array.push(count);
    console.log(array);
    sum = 0; 
    array.forEach( number => {
        sum = sum  + number;
    });  
$('.totalpionts').text("Your Points: " + sum);
restart();
});

$('.fourthcrystal').on("click", function () {        //same as above but for the fourth crsytal
      count = randomnumber[3];
    array.push(count);
    console.log(array);
    sum = 0; 
    array.forEach( number => {
        sum = sum  + number;
    });  
$('.totalpionts').text("Your Points: " + sum);
restart();
});



//this below function will restart the entire program....if the conditions have been meet
function restart () {
if(sum===random) {       // if the amount you score equals the random number this happens.....
 
    array = [];    //resets to an empty array
    random = Math.floor(Math.random()*102)+19;   // gets a new random number between 12 and 120
    $('.goal').text("Target Score: " + random);
    count =0; 
    sum =0;

    x = Math.floor((Math.random()*12)+1);        // brand new numbers for  the crystals, between 1 and 12
    y = Math.floor((Math.random()*12)+1);
    z = Math.floor((Math.random()*12)+1);
    f = Math.floor((Math.random()*12)+1);
    randomnumber = [x,y,z,f];

    wins++;        // add the wins up
    $(".wins").text("Wins: " + wins);
    $('.totalpionts').text("Your Points: " + sum);
}

if(sum>random) {          //if you pick numbers that are greator than the random numbers you lose....
    
    array = [];    //resets to an empty array
    random = Math.floor(Math.random()*102)+19;   //  gets a new random number
    $('.goal').text("Target Score: " + random);
    count =0; 
    sum =0;

    x = Math.floor((Math.random()*12)+1);
    y = Math.floor((Math.random()*12)+1);
    z = Math.floor((Math.random()*12)+1);
    f = Math.floor((Math.random()*12)+1);
    randomnumber = [x,y,z,f];

    loss++;       // add the losses up
    $(".losses").text("Losses: " + loss);
    
     
$('.totalpionts').text("Your Points: " + sum);

}
}





});


    
