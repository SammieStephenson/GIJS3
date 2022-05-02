var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"

function theExercise(theTask) {
    function Exercise() {
        return (`Today's exercise: ${theTask}`);
    }
    alert(Exercise())
}



function todaysExercise(a, b) {
    return a || b
}
if (todaysExercise(a)) {
    console.log("Today's exercise: running");
} else {
    console.log("Todays exercise: swimming")
}


// prints "Each person gets 4.00 slices of pizza"

// prints "Each person gets 2.67 slices of pizza"

function cutPizzaSlices(numberOfSlices) {
    function people(numberOfPeople) {
        let slices = numberOfSlices / numberOfPeople;
        return `Each person gets ${(slices * 100) / 100} slices of Pizza.`
    }
    return people;
}
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
console.log(sharePizza(3));
