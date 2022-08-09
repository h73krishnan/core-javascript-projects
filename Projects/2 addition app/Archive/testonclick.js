let count = 0;
function btnFunction() {
    event.preventDefault();
    const sumNum1 = Math.ceil(Math.random() * 10);
    const sumNum2 = Math.ceil(Math.random() * 10);
    document.getElementById('question').innerHTML = `What is ${sumNum1} plus ${sumNum2}?`;
    const sumCorrect = sumNum1 + sumNum2;
    let enteredNumber = document.getElementById("testId").value; 
    console.log("sumCorrect", sumCorrect);
    console.log("value", enteredNumber);
    console.log("here");
    if(enteredNumber == sumCorrect) {
        count++;
    }
}

console.log("count", count);

