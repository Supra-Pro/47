import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quiz = {
    JS: [
      {
        id: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        options: [{a: "&lt;script&gt;", b: "&lt;javascript&gt;", c: "&lt;scripting&gt;", d: "&lt;js&gt;"}],
        answer: "&lt;script&gt;",
        score: 0,
        status: ""
      },
      {
        id: 2,
        question: "Where is the correct place to insert a JavaScript?",
        options: [{a: "The &lt;head&gt; section", b: "The &lt;body&gt; section", c: "Both the &lt;head&gt; section and the &lt;body&gt; section are correct"}],
        answer: "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
        score: 0,
        status: ""
      },
      // ... include all other questions
    ]
  };

  score = 0;
  qno = 1;
  currentque = 0;
  totalque = this.quiz.JS.length;
  selectedopt: string | undefined;

  ngOnInit(): void {
    this.displayQuiz(0);
  }

  displayQuiz(cque: number): void {
    this.currentque = cque;
    if (this.currentque >= this.totalque) {
      this.calculateScore();
      return;
    }
  }

  calculateScore(): void {
    for (let i = 0; i < this.totalque; i++) {
      this.score += this.quiz.JS[i].score;
    }
    this.showResult(this.score);
  }

  showResult(scr: number): void {
    const resultElement = document.getElementById('result');
    if (resultElement) {
      resultElement.classList.add('result');
      resultElement.innerHTML = `<h1 class='res-header'>Total Score: &nbsp;${scr}/${this.totalque}</h1>`;
      for (let j = 0; j < this.totalque; j++) {
        const res = this.quiz.JS[j].score === 0 ? `<span class="wrong">${this.quiz.JS[j].score}</span><i class="fa fa-remove c-wrong"></i>` : `<span class="correct">${this.quiz.JS[j].score}</span><i class="fa fa-check c-correct"></i>`;
        resultElement.innerHTML += `
          <div class="result-question"><span>Q ${this.quiz.JS[j].id}</span> &nbsp;${this.quiz.JS[j].question}</div>
          <div><b>Correct answer:</b> &nbsp;${this.quiz.JS[j].answer}</div>
          <div class="last-row"><b>Score:</b> &nbsp;${res}</div>`;
      }
    }
  }

  checkAnswer(option: string): void {
    const answer = this.quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    if (option === answer) {
      if (this.quiz.JS[this.currentque].score === 0) {
        this.quiz.JS[this.currentque].score = 1;
        this.quiz.JS[this.currentque].status = "correct";
      }
    } else {
      this.quiz.JS[this.currentque].status = "wrong";
    }
  }

  changeQuestion(cque: number): void {
    this.currentque += cque;
    this.displayQuiz(this.currentque);
  }

  nextQuestion(event: Event): void {
    event.preventDefault();
    if (this.selectedopt) {
      this.checkAnswer(this.selectedopt);
    }
    this.changeQuestion(1);
  }

  previousQuestion(event: Event): void {
    event.preventDefault();
    if (this.selectedopt) {
      this.checkAnswer(this.selectedopt);
    }
    this.changeQuestion(-1);
  }

  selectOption(option: string): void {
    this.selectedopt = option;
  }
}