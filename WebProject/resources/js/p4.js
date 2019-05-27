let largestPalindrome = 0;  //tracker
let n = 3;
//get starting and ending numbers of n-digit numbers
let lowest = "1";
while (n > 1) {
    lowest += "0";
    n--;
}
let largest = parseInt(lowest + "0") - 1;
lowest = parseInt(lowest);

//start with largest number since likely to get to largest palindrome first
for (let i = largest; i >= lowest; i--) {
    for (let j = largest - 1; j >= lowest; j--) {
        let number = i * j;
        //check if number is greater before checking if palindrome for efficiency
        if (number > largestPalindrome) {
            //check if number is also a palindrome
            if (number == number.toString().split("").reverse().join("")) {
                largestPalindrome = number;
            }
        }
        else if (number < largestPalindrome) break;
    }
}

let result = largestPalindrome;

$(document).ready(function () {
    $(".btn-runcode").click(function () {
        $('#myTab a[href="#answer"]').tab('show');
        $("#answ").text(`${result}`);
    });
});
/* Result : 906609 */