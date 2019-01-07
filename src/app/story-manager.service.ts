import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class StoryManagerService {
  story = [
    {
      question: "Does this story have a beginning?",
      answer: "No"
    },
    {
      question: "Does this story have an end?",
      answer: "Yes"
    },
    {
      question: "Does this story have a beginning?",
      answer: "No"
    },
    {
      question: "Does this story have an end?",
      answer: "Yes"
    },
    {
      question: "Does this story have a beginning?",
      answer: "No"
    },
    {
      question: "Does this story have an end?",
      answer: "Yes"
    },
    {
      question: "Does this story have a beginning?",
      answer: "No"
    },
    {
      question: "Does this story have an end?",
      answer: "Yes"
    },
    {
      question: "Does this story have a beginning?",
      answer: "No"
    },
    {
      question: "Does this story have an end?",
      answer: "Yes"
    },
    {
      question: "Does this story have a beginning?",
      answer: "No"
    },
    {
      question: "Does this story have an end?",
      answer: "Yes"
    },
    {
      question: "Does this story have a beginning?",
      answer: "No"
    },
    {
      question: "Does this story have an end?",
      answer: "Yes"
    },
    {
      question: "Does this story have a beginning?",
      answer: "No"
    },
    {
      question: "Does this story have an end?",
      answer: "Yes"
    },
    {
      question: "Does this story have a beginning?",
      answer: "No"
    },
    {
      question: "Does this story have an end?",
      answer: "Yes"
    },
    {
      question: "Does this story have a beginning?",
      answer: "No"
    },
    {
      question: "Does this story have an end?",
      answer: "Yes"
    }
  ];

  constructor() {}

  getStory() {
    return this.story;
  }

  addSection(question: string) {
    this.story.push({
      question: question,
      answer: Math.random() <= 0.8 ? "Yes" : "No"
    });
  }

  clearStory(): void {
    //maintain orignal reference
    this.story.splice(0, this.story.length);
  }
}
