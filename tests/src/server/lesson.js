class Lesson {
  constructor(id, question, answers, trueanswer) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.trueanswer = trueanswer;
  }
}

const lesson1 = [
  new Lesson(1, 'abc', ['answer1', 'answer2', 'answer3', 'answer4'], 3),
  new Lesson(1, 'abc', ['answer1', 'answer2', 'answer3', 'answer4'], 3),
  new Lesson(1, 'abc', ['answer1', 'answer2', 'answer3', 'answer4'], 3),
];

export default lesson1;
