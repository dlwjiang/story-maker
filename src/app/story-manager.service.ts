import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class StoryManagerService {
  story = [
    {
      question: "A couple are watching T.V. together",
      answer: "No"
    },
    {
      question: "They are making dinner together",
      answer: "Yes"
    },
    {
      question: "Someone knocks on the door",
      answer: "No"
    },
    {
      question: "The lights flicker",
      answer: "Yes"
    },
    {
      question: "They ignore it and continue cooking",
      answer: "Yes"
    },
    {
      question: "As they eat their meal the lights flicker again",
      answer: "Yes"
    },
    {
      question: "and suddenly go out",
      answer: "Yes"
    },
    {
      question: "they go into the basement to figure out what's going on",
      answer: "Yes"
    },
    {
      question: "but can't gets the lights to come back on",
      answer: "No"
    },
    {
      question: "they reset the fuse and the lights come back on",
      answer: "Yes"
    },
    {
      question: "when they come back upstairs all their food is eaten clean off their plates",
      answer: "Yes"
    },
    {
      question: "Shocked they run out of the house and call 911",
      answer: "Yes"
    },
    {
      question: "the police show up and can't find anyone",
      answer: "No"
    },
    {
      question: "the police show up, investigate the house, but never come back out",
      answer: "Yes"
    },
    {
      question: "the couple decide to go in",
      answer: "Yes"
    },
    {
      question: "as they investigate the house the lights flicker again",
      answer: "No"
    },
    {
      question: "as they investigate they hear a sound from upstairs",
      answer: "Yes"
    },
    {
      question: "going up they see the poliemen eating the dinner that had previously disappeared",
      answer: "Yes"
    },
    {
      question: "they stand up surprised and shout 'What are you doing in our home!'",
      answer: "Yes"
    },
    {
      question: "suddenly they disapepar",
      answer: "No"
    },
    {
      question: "they chase the couple out of the house and lock the door",
      answer: "Yes"
    },
    {
      question: "the couple call the police again but are arrested for breaking and entering",
      answer: "Yes"
    },
    {
      question: "when they are released after a few weeks they break into their own house and cut the lights",
      answer: "Yes"
    },
    {
      question: "and that's the end of the story",
      answer: "No"
    },
    {
      question: "while the policemen try to get the lights to come back on the couple sneak upstairs and start making dinner in the dark",
      answer: "Yes"
    },
    {
      question: "the lights come back on",
      answer: "No"
    },
    {
      question: "the lights never come back on",
      answer: "Yes"
    },
    {
      question: "and that's the end of the story",
      answer: "Yes"
    }
  ]

  constructor() {}

  getStory() {
    return this.story;
  }

  addSection(question: string) {
    this.story.push({
      question: question,
      answer: this.determineYesNo(question)
    });
  }

  determineYesNo(question: string): string {
    const story = this.story;
    //No consecutive "No"s allowed.
    if (story.length && story[story.length - 1].answer === 'No') {
      return "Yes";
    }
    //Long sentences get a "Yes"
    else if (question.length > 60) {
      return "Yes";
    }
    else {
      return Math.random() <= 0.5 ? "Yes" : "No";
    }
  }

  clearStory(): void {
    //maintain orignal reference
    this.story.splice(0, this.story.length);
  }
}
