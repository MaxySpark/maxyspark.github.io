import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/data/data';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss']
})
export class BackendComponent implements OnInit {
  aboutApi = About;
  constructor() { }

  ngOnInit(): void {
  }

}
