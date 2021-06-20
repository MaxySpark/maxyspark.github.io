import { Component, OnInit } from '@angular/core';
import { About, apis } from 'src/app/data/data';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss']
})
export class BackendComponent implements OnInit {
  apis = apis;
  constructor() { }

  ngOnInit(): void {
  }

}
