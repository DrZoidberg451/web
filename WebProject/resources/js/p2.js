// Define the first two values i.e, 0 and 1 as previous and current values
let previous = 0;
let current = 1;
// Initialize result to 0
let result = 0;
// Run a loop that doesn't terminate by itself
for (let i = 0; ; i++) {
    // Find the next value in the Fibonacci series
    const next = previous + current;
    // If it exceeds 4 million, break the loop
    if (next > 4000000) {
        break;
    }
    // If it's an even number, add it to the sum
    if (next % 2 === 0) {
        result += next;
    }
    // Get ready for next iteration by moving one step to the right
    previous = current;
    current = next;
}

$(document).ready(function () {
    $(".btn-runcode").click(function () {
        $('#myTab a[href="#answer"]').tab('show');
        $("#answ").text(`${result}`);
    });
});

/* Result : 4613732 */