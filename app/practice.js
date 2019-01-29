//magic 8 ball for vegans
//collection of answers


function askingAQuestion() {
  const questionAsked = document.getElementById('question').value;
 
console.log(questionAsked);

  const answers = [
    'Nope',
    'For sure!',
    'Not in  a million years',
    'YES',
    'Really? Do you need to ask'
  ];

  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

  const result = [];
  result.push(randomAnswer);
  console.log(result);

  return result;
}

function init() {
  const resultToScreen = document.querySelector('#screenId');

  resultToScreen.innerText = askingAQuestion;
}
