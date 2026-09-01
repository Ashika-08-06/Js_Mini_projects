let marks = Number(prompt("Enter your marks:"));

if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
}
else if (marks >= 90) {
    console.log("Grade: A+");
}
else if (marks >= 80) {
    console.log("Grade: A");
}
else if (marks >= 70) {
    console.log("Grade: B");
}
else if (marks >= 60) {
    console.log("Grade: C");
}
else if (marks >= 50) {
    console.log("Grade: D");
}
else {
    console.log("Grade: Fail");
}
