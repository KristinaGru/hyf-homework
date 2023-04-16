const danishString = 'Jeg har en blå bil';

const danishString2 = 'Blå grød med røde bær';

function countDanishLetters(danishSentence) {
  const letters = danishSentence.split('');
  const answer = { total: 0, 'æ': 0, 'ø': 0, 'å': 0 };
  for (const letter of letters) {
    if (letter === 'å') {
      answer.total += 1;
      answer['å'] += 1;
    } else if (letter === 'ø') {
      answer.total += 1;
      answer['ø'] += 1;
    } else if (letter === 'æ') {
      answer.total += 1;
      answer['æ'] += 1;
    }
  }
  for (const value in answer) {
    if (answer[value] === 0) {
      delete answer[value];
    }
  }
  return answer;
}

console.log(countDanishLetters(danishString));
console.log(countDanishLetters(danishString2));
