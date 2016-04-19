
var makestopwatch = function() {
    var elapsed = 0; 
    var stopwatch = function() { return elapsed; };
    var increment = function() { elapsed++; };
    setInterval(increment, 1000); 
    return stopwatch;
}

var stopwatch3 = makestopwatch();

var stopwatch4 = makestopwatch();

console.log(stopwatch3());
console.log(stopwatch4());
