// Runs mission control timer
function runTimer(outputElem){
    var currTime = 50;

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
    console.log(currTime)
    if (currTime > 0) {
        outputElem.innerHTML = currTime.toString();
    } else {
        outputElem.innerHTML = "Blastoff!";
    }
}

// Calculate pi using random rolls
function dicePi(n, outputElem){
    var pi = 0;
    var inSets = 0;
    var outSets = 0;

    // Do the actual rolling and calculations for pi
    function rollForPi(inSets, outSets, pi){
        var roll1 = Math.random();
        var roll2 = Math.random();

        if (roll1 ** 2 + roll2 ** 2 < 1) {
            inSets++;
            pi = 4 * inSets / (inSets + outSets);
            return inSets, outSets, pi;
        }

        outSets++;
        pi = 4 * inSets / (inSets + outSets);
        return inSets, outSets, pi;
    }

    for (let i = 0; i < n; i++) {
        setTimeout(function(){inSets, outSets, pi = rollForPi(inSets, outSets, pi); outputElem.innerHTML = pi.toString();}, i);
    }
}
        

// For later assignments
function startButtonClick(){}
function stopButtonClick(){}
