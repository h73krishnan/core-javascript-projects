const sumNum1 = Math.ceil(Math.random() * 10);
const sumNum2 = Math.ceil(Math.random() * 10);
document.getElementById('question').innerHTML = `What is ${sumNum1} plus ${sumNum2}?`;
const sumCorrect = sumNum1 + sumNum2;

document.querySelector("form").addEventListener("submit", btnFunction);

count = JSON.parse(localStorage.getItem("count"));
document.getElementById("count").innerHTML = `Count: ${count}`;
if (!count){
    count = 0;
}

function btnFunction() {
    event.preventDefault();
    
    let enteredNumber = document.getElementById("testId").value; 
    console.log("sumCorrect", sumCorrect);
    console.log("value", enteredNumber);
    console.log("here");
    if(enteredNumber == sumCorrect) {
        count++;
        countRecord();
    }
    else {
        count--;
        countRecord();
    }
    location.reload();
}

function countRecord() {
    localStorage.setItem("count", JSON.stringify(count));
}

console.log("count", count);

