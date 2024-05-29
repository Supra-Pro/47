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
        question: "Tom ____ (to read) a newspaper now.",
        options: [{a: "has read", b: "read", c: "reads", d: "is reading"}],
        answer: "is reading",
        score: 0,
        status: ""
      },
      {
        id: 2,
        question: "The Romans ____ (to come) to Britain in 54 BC",
        options: [{a: "comed", b: "came", c: "were coming", d: "had come"}],
        answer: "came",
        score: 0,
        status: ""
      },
      {
        id: 3,
        question: "Bill ______ (to visit) his parents tomorrow. He has got an appointment with them.",
        options: [{a: "visits", b: "will visit", c: "is visiting", d: "will have visited"}],
        answer: "is visiting",
        score: 0,
        status: ""
      },
      {
        id: 4,
        question: "Tom, look! The mail ________ (to deliver)",
        options: [{a: "is delivered", b: "delivers", c: "delivered", d: "is delivering"}],
        answer: "is delivered",
        score: 0,
        status: ""
      },
      {
        id: 5,
        question: "My brother is only 6, but he ________ already play the piano",
        options: [{a: "has to", b: "must", c: "can", d: "may"}],
        answer: "can",
        score: 0,
        status: ""
      },
      {
        id: 6,
        question: "At first you have to ________ (to complete a form) the application form",
        options: [{a: "fill in", b: "come on", c: "take off", d: "try on"}],
        answer: "fill in",
        score: 0,
        status: ""
      },
      {
        id: 7,
        question: "Choose two forms of the verb 'to be' according to the order: Past Simple - Past Participle",
        options: [{a: "was - was", b: "was/were - been", c: "been - been", d: "been - was"}],
        answer: "was/were - been",
        score: 0,
        status: ""
      },
      {
        id: 8,
        question: "Your brother is so rude. I don't like _______.",
        options: [{a: "he", b: "his", c: "it", d: "him"}],
        answer: "him",
        score: 0,
        status: ""
      },
      {
        id: 9,
        question: "You should be very careful. Snowboarding is a _______ hobby.",
        options: [{a: "boring", b: "awful", c: "dangerous", d: "scary"}],
        answer: "dangerous",
        score: 0,
        status: ""
      },
      {
        id: 10,
        question: "The train was moving _______.",
        options: [{a: "slowly", b: "slow", c: "slowful", d: "slow"}],
        answer: "slowly",
        score: 0,
        status: ""
      },
      {
        id: 11,
        question: "Mike is a person _______ always does his best.",
        options: [{a: "who", b: "whose", c: "whom", d: "which"}],
        answer: "who",
        score: 0,
        status: ""
      },
      {
        id: 12,
        question: "Bob has some trouble _______ his car.",
        options: [{a: "of", b: "at", c: "to", d: "with"}],
        answer: "with",
        score: 0,
        status: ""
      },
      {
        id: 13,
        question: "I'll wait for you _______ the car. It's raining heavily.",
        options: [{a: "into", b: "in", c: "onto", d: "at"}],
        answer: "in",
        score: 0,
        status: ""
      },
      {
        id: 14,
        question: "Otabek is very proud _______ his little daughter.",
        options: [{a: "for", b: "about", c: "of", d: "with"}],
        answer: "of",
        score: 0,
        status: ""
      },
      {
        id: 15,
        question: "I see two _______ on the table.",
        options: [{a: "boxes", b: "boxies", c: "boxs", d: "box"}],
        answer: "boxes",
        score: 0,
        status: ""
      },
      {
        id: 16,
        question: "There is _______ coffee on the shelf.",
        options: [{a: "a few", b: "some", c: "any", d: "many"}],
        answer: "some",
        score: 0,
        status: ""
      },
      {
        id: 17,
        question: "If you _______ (to study) hard, you ______ (to pass) the exam",
        options: [{a: "will study/pass", b: "study/pass", c: "will study/will pass", d: "study/will pass"}],
        answer: "study/will pass",
        score: 0,
        status: ""
      },
      {
        id: 18,
        question: "Tom said: 'I work every day'.",
        options: [{a: "Tom said he worked every day", b: "Tom said he had worked every day", c: "Tom said he was working every day", d: "Tom said he would work every day"}],
        answer: "Tom said he worked every day",
        score: 0,
        status: ""
      },
      {
        id: 19,
        question: "Use a prefix to make a word negative: competent",
        options: [{a: "imcompetent", b: "discompetent", c: "uncompetent", d: "incompetent"}],
        answer: "incompetent",
        score: 0,
        status: ""
      },
      {
        id: 20,
        question: "Use a prefix to make a word negative: fair",
        options: [{a: "infair", b: "disfair", c: "unfair", d: "misfair"}],
        answer: "unfair",
        score: 0,
        status: ""
      },
      {
        id: 21,
        question: "Use a suffix to form an adjective from a given word: guilt",
        options: [{a: "guiltful", b: "guilty", c: "guiltive", d: "guiltous"}],
        answer: "guilty",
        score: 0,
        status: ""
      },
      {
        id: 22,
        question: "Use a suffix to form a noun from a given word: recover",
        options: [{a: "recoverment", b: "recoverness", c: "recovery", d: "recoverence"}],
        answer: "recovery",
        score: 0,
        status: ""
      },
      {
        id: 23,
        question: "Form a compound adjective from two words: slow + move",
        options: [{a: "slowing-move", b: "slow-moving", c: "moving-slow", d: "move-slowly"}],
        answer: "slow-moving",
        score: 0,
        status: ""
      },
      {
        id: 24,
        question: "The meeting is scheduled __ Friday evening",
        options: [{a: "onto", b: "on", c: "at", d: "in"}],
        answer: "on",
        score: 0,
        status: ""
      },
      {
        id: 25,
        question: "It's always uneasy to find an interesting book ____ hundreds of others in the bookstore",
        options: [{a: "with", b: "about", c: "off", d: "among"}],
        answer: "among",
        score: 0,
        status: ""
      },
      {
        id: 26,
        question: "What's the distinction ______ hardware and software?",
        options: [{a: "on", b: "between", c: "in", d: "for"}],
        answer: "between",
        score: 0,
        status: ""
      },
      {
        id: 27,
        question: "She always stands out for what she believes ______.",
        options: [{a: "at", b: "to", c: "in", d: "for"}],
        answer: "in",
        score: 0,
        status: ""
      },
      {
        id: 28,
        question: "They haven't replied ______ my plea yet",
        options: [{a: "at", b: "over", c: "on", d: "to"}],
        answer: "to",
        score: 0,
        status: ""
      },
      {
        id: 29,
        question: "We could phone Jill later, ______ we have to hurry up.",
        options: [{a: "seeing that", b: "despite", c: "whereas", d: "although"}],
        answer: "seeing that",
        score: 0,
        status: ""
      },
      {
        id: 30,
        question: " ______ the accident the flight was delayed.",
        options: [{a: "Since", b: "Owing to", c: "So that", d: "Whereas"}],
        answer: "Owing to",
        score: 0,
        status: ""
      },
      // ... other questions go here
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
      resultElement.innerHTML = `
      <a href="/certificate" style="color: green" class="btn">Get Your Certificate</a> 
      <h1 class='res-header'>Total Score: &nbsp;${scr}/${this.totalque}</h1>`;
      for (let j = 0; j < this.totalque; j++) {
        const res = this.quiz.JS[j].score === 0 ? `<span class="wrong">${this.quiz.JS[j].score}</span><i class="fa fa-remove c-wrong"></i>` : `<span class="correct">${this.quiz.JS[j].score}</span><i class="fa fa-check c-correct"></i>`;
        resultElement.innerHTML += `
          <div class="result-question"><span>Q ${this.quiz.JS[j].id}</span> &nbsp;${this.quiz.JS[j].question}</div>
          <div><b>Correct answer:</b> &nbsp;${this.quiz.JS[j].answer}</div>
          <div class="last-row"><b>Score:</b> &nbsp;${res}</div> `;
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