// Runs mission control timer
function runTimer(outputElem){
    var currTime = 50;

    // Iterate through the times
    displayTime(currTime, outputElem);
    setTimeout(function(){currTime -= 5; displayTime(currTime, outputElem);}, 5000);
    setTimeout(function(){currTime -= 5; displayTime(currTime, outputElem);}, 10000);
    setTimeout(function(){currTime -= 5; displayTime(currTime, outputElem);}, 15000);
    setTimeout(function(){currTime -= 5; displayTime(currTime, outputElem);}, 20000);
    setTimeout(function(){currTime -= 5; displayTime(currTime, outputElem);}, 25000);
    setTimeout(function(){currTime -= 5; displayTime(currTime, outputElem);}, 30000);
    setTimeout(function(){currTime -= 5; displayTime(currTime, outputElem);}, 35000);
    setTimeout(function(){currTime -= 5; displayTime(currTime, outputElem);}, 40000);
    setTimeout(function(){currTime -= 5; displayTime(currTime, outputElem);}, 45000);
    setTimeout(function(){currTime -= 5; displayTime(currTime, outputElem);}, 50000);
}

// Display function for mission control timer
function displayTime(currTime, outputElem){
    // console.log(currTime)

    // Determine whether to display time or blastoff
    if (currTime < 0) {
        outputElem.innerHTML = currTime.toString();
    } else {
        outputElem.innerHTML = "Blastoff!";
    }
}

// Calculate pi using random numbers
function randomPi(outputElem){
    var pi = 0.0;
    var inSets = 0;
    var outSets = 0;

    // Do the actual rolling and calculations for pi
    function rollForPi(){
        // Roll 2 dice
        var roll1 = Math.random();
        var roll2 = Math.random();

        // Check whether rolls are points within a circle of radius 1 around origin
        if (roll1 ** 2 + roll2 ** 2 < 1) {
            // If so, add 1 to the number of sets inside the area
            inSets++;
            pi = 4 * inSets / (inSets + outSets);
        // Otherwise add 1 to the number of sets outside the area
        } else {
            outSets++;
            pi = 4 * inSets / (inSets + outSets);
        }
    }

    // Adjust official variables and display the result for pi
    setInterval(function(){rollForPi(inSets, outSets, pi); outputElem.innerHTML = pi.toString();}, 0);
}


// For later assignments
function startButtonClick(){
    var startButton = document.getElementById('start-button');
    var stopButton = document.getElementById('stop-button');

    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopButtonClick(){
    var startButton = document.getElementById('start-button');
    var stopButton = document.getElementById('stop-button');

    startButton.disabled = false;
    stopButton.disabled = true;
}
