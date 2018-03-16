document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";

function myFunction() {
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Click me");
    x.appendChild(t);
    document.body.appendChild(x);

    var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

}