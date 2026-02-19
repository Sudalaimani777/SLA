// Traffic Light using switch :-
function trafficLight(signal) {
    let result;
    switch (signal.toLowerCase()) {
        case "red":
            result = "Stop";
            console.log(result);
            break;

        case "yellow":
            result = "Ready";
            console.log(result);
            break;

        case "green":
            result = "Gooo";
            console.log(result);
            break;

        default:
            result = "No Signal";
            console.log(result);
    }
}

trafficLight("RED");
trafficLight("YELLOW");
trafficLight("green");
trafficLight("orange");