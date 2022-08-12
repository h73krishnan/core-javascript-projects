const sumNum1 = Math.ceil(Math.random() * 10);
const sumNum2 = Math.ceil(Math.random() * 10);

document.getElementById('question').innerHTML = `What is ${sumNum1} plus ${sumNum2}?`;
const sumCorrect = sumNum1 + sumNum2;

// let count = `0`;

 count = JSON.parse(localStorage.getItem("count")) || '0';
document.getElementById("count").innerHTML = `Count: ${count}`;
console.log(count);
if (!count){
    count = 0;
}

document.querySelector("form").addEventListener("submit", btnFunction);

function btnFunction() {
    
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


