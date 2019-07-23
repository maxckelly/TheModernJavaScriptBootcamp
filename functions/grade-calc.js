// Challenge Area

// This challenge will take into effect two argument 1. Students score 2. Total possible score
// e.g. 15/20 which then prints a message saying: "You got a C {75%}!"
// Following groups: A 90 - 100 B 80 - 89 C 70 - 79 D 60 - 69 F 0 - 59

const scores = function (studentScore, total) {

    if (typeof studentScore !== "number" || typeof total !== "number") {
      throw Error("Please provide numbers only");
    }

    const percent = (studentScore / total) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent <= 89 && percent >= 80) {
        letterGrade = 'B';
    } else if (percent <= 79 && percent >= 70) {
        letterGrade = 'C';
    } else if (percent <= 69 && percent >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    } 

    return `You got a ${letterGrade}, ${percent}%`
}

try {
    const finalScores = scores(true);
    console.log(finalScores);
} catch (e) {
    console.log(e.message)
}
