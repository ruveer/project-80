function searching()
{
var s=document.getElementById("s1").value;
var found=0;
var j;
for(j=0; j<names_of_people.length; j++)
{
    if(s=names_of_people[j]){
        found=found+1;
    }
}
document.getElementById("p2").innerHTML="name_found "+found+" time/s";
console.log("name_found "+found+" time/s");
}