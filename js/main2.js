document.write("<BR><BR> MARKSHEET ")
 var name= prompt("enter your name")
document.write("name of the student:  ",name,"<br>")
 var maths= parseFloat(prompt("enter marks of maths"))
 document.write(" marks of maths     :   ",maths ,"<br>")
 var english= parseFloat(prompt("enter marks of english"))
 document.write(" marks of english  :  ",english ,"<br>")
 var physics= parseFloat(prompt("enter marks of physics"))
 document.write(" marks of physics   :  ",physics ,"<br>")
 var computer= parseFloat(prompt("enter marks of computer"))
 document.write(" marks of computer   :  ",computer ,"<br>")
 var sindhi= parseFloat(prompt("enter marks of sindhi"))
 document.write(" marks of sindhi  :  ",sindhi ,"<br>")
 var pst=  parseFloat(prompt("enter marks of pst"))
 document.write(" marks of pst    :  ",pst ,"<br>")
 var chemistry=  parseFloat(prompt("enter marks of chemistry"))
 document.write(" marks of chemistry   :  ",chemistry ,"<br>")
 var obtained= maths+english+physics+computer+sindhi+pst+chemistry;
 document.write("obtained number : ",obtained,"<br>")
 var total =700;
 document.write("total number :  ",total,"<br>")
 var percentage =obtained/total*100;
 document.write("percentage",percentage.toFixed(2))
 if(percentage >= 40){
     document.write("<br>pass <br><br>");
 }

 else{
     document.write("<br>fail <BR>");
 }
 