import { Component, OnInit } from '@angular/core';

export interface NavButton {
  name: string;
  link?: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navButtons: NavButton[] = [
    {
      name: '🏠 Home'
    },
    {
      name: '💁🏽‍♂️ About'
    },
    {
      name: '💪🏽 Skills'
    },
    {
      name: '🧑🏽‍💻 Work Experience'
    },
    {
      name: '📠 Contact'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
