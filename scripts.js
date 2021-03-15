// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.addEventListener("load", () => {
    const takeOffButton = document.getElementById("takeoff");
    const shuttleStatus = document.getElementById("flightStatus");
    const backColor = document.getElementById("shuttleBackground");
    const spaceHeight = document.getElementById("spaceShuttleHeight");

    const landButton = document.getElementById("landing");

    const abortMission = document.getElementById("missionAbort");

    takeOffButton.addEventListener("click", function () {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            shuttleStatus.innerHTML = "Shuttle in flight.";
            backColor.style.backgroundColor = 'blue';
            spaceHeight.innerHTML = '10,000';
        }
    })

    landButton.addEventListener("click", () => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        shuttleStatus.innerHTML = "The shuttle has landed";
        backColor.style.backgroundColor = 'green';
        spaceHeight.innerHTML = '0';
    })

    abortMission.addEventListener("click", function () {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            shuttleStatus.innerHTML = "Mission aborted.";
            backColor.style.backgroundColor = 'green';
            spaceHeight.innerHTML = '0';
        }
    })


})
