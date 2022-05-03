
const MaxOfTwo = (param1,param2) => {
    if(param1>param2){
        console.log(param1);
    }
    else if(param2<param1){
        console.log(param2);
    }
    else{
        console.log('Numbers are equal');
    }
}

// Write an if/else statement for the following requirements:
// If student gets 90 or higher: console log  A
// If students get 80 or above: console log B
// If students get 70 or above: console log C
// If students get 55 or above: console log D
// Any grade lower than 55 is F

const grades = (param) => {
    if(param>=90){
        console.log('A');
    }
    else if(param>=80){
        console.log('B');
    }
        else if(param>=70){
        console.log('C');
    }
        else if(param>=55){
        console.log('D');
    }
    else{
        console.log('F');
    }
}

grades(90);

// 3. Write a JavaScript program that displays “Good Morning” if time is between 5AM-11:59 | “Good Afternoon” if time is between 12 - 16 | otherwise “Hey there”

const clock = (what_time) => {
    if(what_time>=5 && what_time<=11){
        console.log("Good Morning");
    }
    else if(what_time>=12 && what_time<=16){
        console.log("Good Afternoon");
    }
    else{
        console.log("Hey there");
    }
}

//<h1 class= "solution"></h1>
//solution.textContent = answer;