function Promeni(a)
{
    document.getElementById("prvi").src=a.src;
    var b=a.src.lastIndexOf("/")+1;
    var c=a.src.lastIndexOf(".");
    var pos=a.src.substring(b,c);
    document.getElementById("ime").innerHTML=pos;
}