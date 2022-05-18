import { readFile, writeFile } from "fs";

let counterButton = document.getElementById("jamie_like_button");
let counterDisplay = document.getElementById("jamie_like_counter");
let count = 0;
readFile("../data/jamie_like_count.txt", function(err, data) {
    if(err){
        return console.error(err);
    }
    count = data;
});

updateDisplay();

counterButton.addEventListener('click', () =>{
    updateCount();
    updateDisplay();
});

function updateCount(){
    readFile("../data/jamie_like_count.txt", function (err, data) {
        if(err){
            return console.error(err);
        }
        count = data;
    });
    count++;
    
    writeFile("../data/jamie_like_count.txt", count, function(err, data){
        if(err){
            return console.error(err);
        }
    });
}

function updateDisplay(){
    counterDisplay.innerHTML = count;
}