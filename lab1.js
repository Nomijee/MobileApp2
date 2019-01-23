function addition(value) {
    console.log("Value is: " + value);
}
var firstVal = 42;
var secondVal = 1;
var sumOfVals = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);
var flag = true;
console.log("Value Assisgned  to flag is " + flag);
function str_len(value) { var num = value.length; return num; }
function str_len_nospaces(value) { var num = value.replace(/\s+/, "").length; return num; }
console.log("String length with spaces and all is: " + str_len("test 1"));
console.log("String length with spaces not included in the count: " + str_len_nospaces("test 1"));
var num;
if (spaces) {
    num = value.replace(/\s+/, "").length;
}
else {
    num = value.length;
}
return num;
console.log("Function combined: String length with spaces and all is: " + str_len_both("test 1", false));
console.log("Function combined: String length with spaces not included in the count: " + str_len_both("test 1", true));
console.log("Function combined: String length with spaces and all is, not setting spaces parameter so will default to false: " + str_len_both("test 1"));
