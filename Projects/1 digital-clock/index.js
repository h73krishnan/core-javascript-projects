function clockChange() {
    let dateNTime = new Date();
    console.log(dateNTime);
    let hoursInput = dateNTime.getHours();
    let minutesInput = dateNTime.getMinutes();
    let secondsInput = dateNTime.getSeconds();
    let dayOrNightInput = "am"

    if (hoursInput > 12){
        dayOrNight = "pm"
    }

    if (hoursInput < 10){
        hoursInput = "0" + hoursInput; 
    }

    if (minutesInput < 10){
        minutesInput = "0" + minutesInput;
    }

    if (secondsInput < 10){
        secondsInput = "0" + secondsInput; 
    }

    document.getElementById("hours").innerHTML = hoursInput;
    document.getElementById("minutes").innerHTML = minutesInput;
    document.getElementById("seconds").innerHTML = secondsInput;
    document.getElementsByClassName("dayOrNight").innerHTML = dayOrNightInput; 

    setTimeout(() => {
        clockChange();
    }, 1000);

}
clockChange();