function addition(value: string) 
{ console.log("Value is: " + value); 
}
let firstVal: number = 42;
 let secondVal: number = 1; 
 let sumOfVals: string = (firstVal + secondVal).toLocaleString();
addition(sumOfVals); 

let flag:boolean = true;
console.log("Value Assisgned  to flag is "+flag)
function str_len(value: string): number{ let num: number = value.length; return num; }
function str_len_nospaces(value: string): number{ let num: number = value.replace(/\s+/, "").length; return num; }
console.log("String length with spaces and all is: "+str_len("test 1")); console.log("String length with spaces not included in the count: " +str_len_nospaces("test 1"));

let num: number; if(spaces){ num = value.replace(/\s+/, "").length; }else{ num = value.length; } return num;

console.log("Function combined: String length with spaces and all is: "+str_len_both("test 1",false)); console.log("Function combined: String length with spaces not included in the count: "+str_len_both("test 1", true)); console.log("Function combined: String length with spaces and all is, not setting spaces parameter so will default to false: "+str_len_both("test 1"));
}