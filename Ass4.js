// Declare 3 variables in one statement
var firstName = "Ali", age = 15, city = "karachi";
document.writeln("var firstName = \"Ali\", age = 15, city = \"karachi\"<br><br>");

//5legal name
var legalNames = ["myName", "$price", "_value", "user1", "full_name"];
document.writeln(legalNames);

//5illegal name
var illegalNames = ["1name", "my-name", "var", "full name", "@age"];
document.writeln(illegalNames);

document.writeln(" Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>$</b>, and <b>_</b>.<br>");
document.writeln("For example: $my_1stVariable<br><br>");

document.writeln("Variable names must begin with a <b>letter</b>, <b>$</b> or <b>_</b>.<br>");
document.writeln("For example: $name, _name or name<br><br>");

document.writeln("Variable names are case <b>sensitive</b>.<br><br>");
document.writeln("Variable names should not be JS <b>keywords</b>.<br>");
document.writeln("For example:var, function, alert are not allowed.<br>");

