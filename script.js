/*
ARITHEMETIC OPERATORS
ADDITION
SUBTRACTION
\
DIVISION
MULTIPLICATION
MODULUS

ASSIGNMENT OPERATORS
=
+
+= add and assign 
-= subtract and assign
*

COMPARISON OPERATORS
used to compare two values either true or false
== equal to
=== strictly equal to !=Not equal to
!=== Not strictly equal to 
>
<
>=
<=3

4.LOGICAL OPERATOR
-&& MEANING AND
-! MEANING NOT
|| MEANING OR

5.INCREMENT OPERATOR

6.STRING OPERATORS
The plus sign + can also be used with /

CONDITIONAL STATEMENT
If statement 
if (condition){
code to execute
}
two conditions
if (condition){
else{code to execute}
}
More than two conditions
else if (condition){
code to execute
}

*/



/*
let age = 144;
if (age >=18){
    console.log("You are an adult");
}
else if (age >10 & age <=17){
    console.log("you are a child");
}
else if (age >10 && age <= 17){
    console.log("You are a teenager");
}
*/


/*
let username = "Rodah";
let password = "1234";

if (username === "Rodah" && password === "1234") {
    console.log("Login successful");
} else {
    console.log("Login failed");
}
    */



const student = {
    name: "Rodah OgbonOlorun",
    id: "15ms2009",
    programme: "Web Development"
};

const courses = [
    {
        name: "web development",
        score: 80
    },
    {
        name: "javascript",
        score: 72
    },
    {
        name: "Responsive design",
        score: 88
    }
];

function checkResult(score) {
    if (score>=50){
        return "PASS";
    }else {
        return "FAIL";
    }
}



