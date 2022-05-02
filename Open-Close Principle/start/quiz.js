//* this is a close part, so we should never change the code inside
function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case 'boolean':
        console.log('1. True');
        console.log('2. false');
        break;
      case 'multipleChoice':
        question.options.forEach((option, index) => {
          console.log(`${index}. ${option}`);
        });
        break;
      case 'text':
        console.log('Answer: _______________________');
        break;
    }
  });
}

const questions = [
  {
    type: 'boolean',
    description: 'This video is useful',
  },
  {
    type: 'multipleChoice',
    description: 'What is your favorite language?',
    options: ['CSS', 'HTML', 'JS', 'Python'],
  },
  {
    type: 'text',
    description: 'How do you do',
  },
];

printQuiz(questions);

//! This code violate OCP, 'cause when we add more new question which a new type
//! we need to change the printQuiz
//? The Open/Close Principle is open for extension but closed for modification
