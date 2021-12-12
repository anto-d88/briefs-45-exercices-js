function checkAge(age){

return (age > 18) || "Did parents allow you?";
}

alert(checkAge(prompt("How old are you?")));

function checkAge2(age){

return (age > 18) ? true : "Did parents allow you?";
}

alert(checkAge2(prompt("How old are you?")));
