let divisor = 2;
let number = 600851475143;
while (number > 1) {
    if (number % divisor === 0) {
        number /= divisor;
    } else {
        divisor++;
    }
}
let result = divisor;

$(document).ready(function () {
    $(".btn-runcode").click(function () {
        $('#myTab a[href="#answer"]').tab('show');
        $("#answ").text(`${result}`);
    });
});

/* Result: 6857 */
