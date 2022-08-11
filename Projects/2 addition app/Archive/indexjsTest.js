const sumNum1 = Math.ceil(Math.random() * 10);
const sumNum2 = Math.ceil(Math.random() * 10);

let sumCorrect = sumNum1 + sumNum2;
console.log("sumCorrect: " + sumCorrect);

document.getElementById('question').innerHTML = `What is ${sumNum1} plus ${sumNum2}?`;

let count = JSON.parse(localStorage.getItem('count'));
console.log(count);

document.getElementById("count").innerHTML = `Count=${count}`;

function submitFunction() {
    // event.preventDefault();
    let answerInput = document.getElementById("answer").value;
    console.log("answerInput", answerInput);
    console.log("sumCorrect", sumCorrect);
    if(answerInput == sumCorrect) {
        count++;
        countStore();
        console.log(count);
    }
    else {
        count--;
        countStore();
    }
}
// submit();
count = 2;
function countStore() {
    localStorage.setItem("count", JSON.stringify(count));
}
countStore();

