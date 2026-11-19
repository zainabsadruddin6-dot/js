document.write("<br><br>PATTERNS");

for(var f = 1; f <= 5; f++){
    let row = "";
    
    for(var g = 1; g <= f; g++) {
        row += "* "; 
    }
    
    document.write("<br>", row);
}
document.write("<br><br>PATTERNS<br>")
for (var i = 1; i <= 5; i++) {
    let row = "";

    for (var a = 1; a <= i; a++) {
        row += a;
    }
     document.write(row,"<br>");
}

document.write("<br><br>PATTERNS");

for(var f = 5; f >= 1; f--){
    let row = "";
    
    for(var g = 1; g <= f; g++) {
        row += "* ";
    }
    
    document.write("<br>", row);
}
document.write("<br><br>PATTERNS")
for(var a=1; a<=5; a++){
     let row = "";
    
    for(var e=1; e<=a;e++)
        row += a;
    { document.write( "<br>",row );

    }
     
    
}
document.write("<BR><BR> NEGATIVE NUMBERS <BR>")
for(var i = -1; i >= -10; i--){
    document.write(" <br>", i, "<br>")
};
document.write("WHILE LOOP SUM OF NUMBER FROM 1 TO 20")
var c=1;
 while(c<=20){
    document.write("<br>",c ,"<br>")
     c++;
 }
 document.write("<BR>DO WHILE LOOP DOWNWARDS COUNTING <BR><br>")
var a=10;
do{
    document.write( a, "<br>");
a--;

}while(a>=1);

         
          
 
 