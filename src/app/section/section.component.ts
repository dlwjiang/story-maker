import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "story-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.less"]
})
export class SectionComponent implements OnInit {
  @Input() section: object;

  constructor() {}

  ngOnInit() {}
}
