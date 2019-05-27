 const result = Array.from({ length: 1000 }, (x, y) => ++y)
        .filter(number => number % 5 === 0 || number % 3 === 0)
        .reduce((sum, number) => sum + number, 0);



$(document).ready(function () {
    $(".btn-runcode").click(function () {
        $('#myTab a[href="#answer"]').tab('show');
        $("#answ").text(`${result}`);
    });
});

/* Result : 234168 */