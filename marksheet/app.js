var studentName = prompt("Enter Your Name");

var eng = parseFloat(prompt("Enter Your English Marks"));
var urdu = parseFloat(prompt("Enter Your Urdu Marks"));
var math = parseFloat(prompt("Enter Your Mathematics Marks"));
var science  = parseFloat(prompt("Enter Your Science Marks"));
var computer = parseFloat(prompt("Enter Your Computer Marks"));

var obtainedMarks = eng + urdu + math + science + computer;
var totalMarks = 500; 
var percentage = (obtainedMarks / totalMarks) * 100;

var grade;
if (percentage <= 100 && percentage >= 80) {
    grade = "A+";
} else if (percentage <= 79 && percentage >= 70) {
    grade = "A";
} else if (percentage <= 69 && percentage >= 60) {
    grade = "B";
} else if (percentage <= 59 && percentage >= 50) {
    grade = "C";
} else {
    grade = "Fail";
}

var table = `
    <table>
        <tr>
            <th colspan="2">Student Marksheet</th>
        </tr>
        <tr>
            <td><strong>Student Name</strong></td>
            <td>${studentName}</td>
        </tr>
        <tr>
            <td><strong>English Marks</strong></td>
            <td>${eng}</td>
        </tr>
        <tr>
            <td><strong>Urdu Marks</strong></td>
            <td>${urdu}</td>
        </tr>
        <tr>
            <td><strong>Mathematics Marks</strong></td>
            <td>${math}</td>
        </tr>
        <tr>
            <td><strong>Science Marks</strong></td>
            <td>${science}</td>
        </tr>
        <tr>
            <td><strong>Computer Marks</strong></td>
            <td>${computer}</td>
        </tr>
        <tr>
            <td><strong>Total Obtained Marks</strong></td>
            <td>${obtainedMarks} / ${totalMarks}</td>
        </tr>
        <tr>
            <td><strong>Percentage</strong></td>
            <td>${percentage.toFixed(2)}%</td>
        </tr>
        <tr>
            <td><strong>Grade</strong></td>
            <td>${grade}</td>
        </tr>
    </table>
`;

document.getElementById('marksheet').innerHTML = table;