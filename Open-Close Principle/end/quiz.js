class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoice() {
    console.log('1. True');
    console.log('2. false');
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }
  printQuestionChoice() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoice() {
    console.log('Answer: _______________________');
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoice() {
    console.log('Min: _______________________');
    console.log('Max: _______________________');
  }
}

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoice();
  });
}

const questions = [
  new BooleanQuestion('This video is useful'),
  new MultipleChoiceQuestion('What is your favorite language?', [
    'CSS',
    'HTML',
    'PHP',
    'JAVA',
  ]),
  new TextQuestion('How do you do?'),
  new RangeQuestion('What is the speed limit in your city?'),
];

printQuiz(questions);
