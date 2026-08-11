const max = prompt("enter the max number");


const random = Math.floor(Math.random() * max) + 1;

let  guess = prompt("guess the number");

while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    }

    if(guess == random) {
        document.write("you are right! congrats!! random no. was",random);
        break;
    } else if(guess < random) {
        guess = prompt("hint: your guess was to small. please try again");
    
    } else {
        guess = prompt("hint: your guess was to large. please try again");
    }
}
    
    
    
    
    
    
