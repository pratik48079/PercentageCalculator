let Name = window.prompt("Enter Your Name :")
document.write("Welcome "+ Name  + "<br><br>");
let a = parseInt(window.prompt("Enter Subject 1 Mark : "));
document.write(Name + " Your Subject 1 Mark is :" + a + "<br><br>");
let b = parseInt(window.prompt("Enter Subject 2 Mark : "));
document.write(Name +" Your Subject 2 Mark is :" + b + "<br><br>");
let c = parseInt(window.prompt("Enter Subject 3 Mark : "));
document.write(Name +" Your Subject 3 Mark is :" + c + "<br><br>");
let d = parseInt(window.prompt("Enter Subject 4 Mark : "));
document.write(Name +" Your Subject 4 Mark is :" + d + "<br><br>");

function percentage(n1 ,n2 ,n3 ,n4){
    let x = n1 + n2 + n3 + n4;
    let z = x / 400 * 100;
    document.write(Name +" Your Total Subject Marks is :" + x + "<br><br>") ;
    return z;
}
let total =percentage(a,b,c,d);
document.write(Name + " Your Percentage is :" +  total + "%"  + "<br><br>")

if(total >=35){
    document.write("Congratulations " + Name + " You Have Passed this exam😎🥳"  + "<br><br>");
}
if(total <=34){
    document.write("Better Luck Next Time " + Name + " 😢"  + "<br><br>");
}