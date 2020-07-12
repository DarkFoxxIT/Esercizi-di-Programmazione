/*
* The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"].
* The second one is "answers" array and contains student's answers.
* The two arrays are not empty and are the same length. 
* Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).
* If the score < 0, return 0.
*/


function checkExam(array1, array2) {
 // good luck
  let score = 0;
  
  for(let answer = 0; answer< array1.length; answer++) { 
      
      if(array1[answer] === array2[answer]){score += 4;}
      else if(array2[answer] === ""){score += 0;}
      else {score -= 1}
  }
  if(score < 0){score = 0;};
  return score;
};

//TEST

let correct_answers = ["a", "a", "b", "b"];
let students_answers = ["a", "c", "b", "d"];

checkExam(correct_answers, students_answers) // final score is 6

//Other solutions:

const checkExam = (array1, array2) => {
  let result = array2.reduce(
    (score, answer, i) => {
      if(answer == array1[i]) return score += 4;
      else if(answer == 0) return score += 0;
      else return score - 1;
    }
  , 0);
  return result < 0 ? 0 : result;
}

