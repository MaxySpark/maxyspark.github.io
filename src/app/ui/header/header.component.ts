import { Component, OnInit } from '@angular/core';

export interface NavButton {
  icon: string;
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
      icon: '🏠',
      name: '🏠 Home'
    },
    {
      icon: '💁🏽‍♂️',
      name: '💁🏽‍♂️ About'
    },
    {
      icon: '💪🏽',
      name: '💪🏽 Skills'
    },
    {
      icon: '🧑🏽‍💻',
      name: '🧑🏽‍💻 Work Experience'
    },
    {
      icon: '📠',
      name: '📠 Contact'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
