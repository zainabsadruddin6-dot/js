//students list
var students = [
  "zainab",
  "madiha",
  "moiz",
  "adyan",
  "rumaisa",
  "ali",
  "sara",
  "sana"
];
document.write(`<p><b>Total number of students:</b> ${students.length}</p>`);
document.write("<h4>Students:</h4>");
students.forEach(function(name, index) {
  var serialNo = index + 1;
  document.write(`<p>${serialNo}. ${name}</p>`);
});