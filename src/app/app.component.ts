import { Component, ViewChild } from '@angular/core';
import { StoryManagerService } from "./story-manager.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "story-maker";
  story: object[];
  @ViewChild("input") input;
  @ViewChild("right") right;

  constructor(private storyManagerService: StoryManagerService) {}

  ngOnInit(): void {
    this.story = this.storyManagerService.getStory();
  }

  addSection(question: string): void {
    this.storyManagerService.addSection(question);
    this.input.nativeElement.value = null;
    setTimeout(this.scrollToBottom.bind(this), 0);
  }

  scrollToBottom(): void {
    const rightSection = this.right.nativeElement;
    rightSection.scrollTop = rightSection.scrollHeight - rightSection.clientHeight;
  }
}
