function emptyChecker()
{
var inputtedName = document.form1.name1.value;
var inputtedMail = document.form1.mail.value;
var inputteddetails = document.form1.details1.value;

if (inputtedName === "")
{
alert("Please enter a name.");
return;

}
if (inputtedMail === "")
{
alert("Please input a valid Email");
return false;
}
if (inputteddetails === "")
{
alert("Please input Details");
return false;
}

}

function passValue() {
    var firstname=document.getElementById("name1").value;
    localStorage.setItem("fsname",firstname);
    var mail1=document.getElementById("mail").value;
    localStorage.setItem("maildetails",mail1);
    var details12=document.getElementById("details1").value;
    localStorage.setItem("detailsout",details12);
    var Subjects1 = document.getElementById("subjects").value;
    localStorage.setItem("subjectsout",Subjects1);
    return false;

  }
