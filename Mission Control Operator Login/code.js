// Runs mission control timer
function runTimer(outputElem){
    var currTime = 60;

    // Check that name and badge number are valid
    if (validateName() && validateBadgeNum()){
        // Iterate through the times
        for (let i = 0; i <= currTime; i += 5) {
            setTimeout(function(){displayTime(currTime, outputElem); currTime -= 5}, i * 1000);
        }
    }
}

// Validate name
function validateName() {
    var firstNameInput = document.getElementById('first-name-input');
    var lastNameInput = document.getElementById('last-name-input');
    var nameValidWarning = document.getElementById('name-valid-warning');
    var nameDisplay = document.getElementById('name-display')

    nameValidWarning.innerHTML = "";
    nameDisplay.innerHTML = "";

    if (firstNameInput.value.length == 0 || lastNameInput.value.length == 0) {
        nameValidWarning.innerHTML = "Warning: must input both first and last name!";
        return false;
    }

    var fullName = firstNameInput.value + " " + lastNameInput.value;

    if (fullName.length < 20) {
        nameDisplay.innerHTML = fullName;
        return true;
    }

    nameValidWarning.innerHTML = "Warning: name cannot be 20 characters or longer!";
    return false;
}

// Validate badge number
function validateBadgeNum() {
    var badgeNumInput = document.getElementById('badge-number-input');
    var badgeValidWarning = document.getElementById('badge-valid-warning');
    var badgeDisplay = document.getElementById('badge-display');

    badgeValidWarning.innerHTML = "";
    badgeDisplay.innerHTML = "";

    if (badgeNumInput.value.length == 0) {
        badgeValidWarning.innerHTML = "Warning: must input badge number!";
        return false;
    }

    else if (badgeNumInput.value.length != 3) {
        badgeValidWarning.innerHTML = "Warning: badge number must be 3 digits!";
        return false;
    }

    else if (/^\d+$/.test(badgeNumInput.value)) {
        badgeDisplay.innerHTML = badgeNumInput.value;
        return true;
    }

    badgeValidWarning.innerHTML = "Warning: badge number must be only numbers!";
    return false
}

// Display function for mission control timer
function displayTime(currTime, outputElem){
    // console.log(currTime)

    // Determine whether to display time or blastoff
    if (currTime > 0) {
        outputElem.innerHTML = currTime.toString();
    } else {
        outputElem.innerHTML = 'Blastoff!';
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
