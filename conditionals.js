console.log(true == false);
console.log(true == true);

var amICool = true;

if (amICool) {
    console.log("this had better print!")
}

if (true == true) {
    console.log("This is true!");
} else if (true != true) {
    console.log("Should not see this!");
} else {
    console.log("How could we even get here?");
}

var val1 = 6;
var val2 = "6";

if (val1 == val2) {
    console.log("Say whaaaaat?  Don't do this shit!");
}

if (val1 === val2) {
    console.log("We should not see this.");
} else {
    console.log("What a relief... always use strict equality!");
}