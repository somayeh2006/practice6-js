//practice1

let score =[10.75,15.25,14.75,11.5,13,9.75,8.5];
let scores = score.filter((s) => s >10);
let score2 = score.reduce((total =0 , v) => {
  total +=v;
  return total;
}
);

let score3 = Math.round(score2);
let score4 = score3 / scores.length;
console.log(score4);


//practice2

let Exam = [{quiz: 1, answer: 1 }, {quiz: 2, answer: 0}, {quiz: 3, answer:1}, {quiz:4, answer: 1}, {quiz:5, answer:0}];
let count =0;
let total =0;
let result = Exam.map((value) => {
  if (value.answer === 1){
    total +=5;
  return count++ , total;
  }
});
let result2= Exam.every((s) => s.answer ===1);


console.log(result);
console.log(result2);
console.log( total);