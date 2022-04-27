var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"


function todaysExercise(a, b) {
    return a || b
}
if (todaysExercise(a)) {
    console.log("Today's exercise: running");
} else {
    console.log("Todays exercise: swimming")
}

var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"