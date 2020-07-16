var num1 = "";
var num2 = "";
var operatorChosen = false;
var result = 0;
var operator = '';
$(".number").on("click",function(){
    var digit = $(this).val();

    if (operatorChosen === false) {
        num1 += digit;
        $("#first-number").text(num1)
    } else {
        num2 += digit;
        $("#second-number").text(num2)
    }
});
$(".operator").on("click",function(){
    operatorChosen = true;
    operator = $(this).val();
    var sign = $(this).text();
    $("#operator").text(sign);

});
$(".equal").on("click",function(){
console.log(operator);

switch (operator) {
    case "plus":
        result = parseInt(num1) + parseInt(num2)
        break;
    case "minus":
        result = num1 - num2
        break;
    case "times":
        result = parseInt(num1) * parseInt(num2)
        break;
    case "divide":
        result = num1 / num2
        break;
    case "power":
        result = Math.pow(num1,num2)
        break;
    default:
        break;
}
$("#result").text(result)
});
$(".clear").on("click",function(){
 num1 = "";
 num2 = "";
 operatorChosen = false;
 $("#result").text("")
 $("#first-number").text("")
 $("#second-number").text("")
 $("#operator").text("");


});
