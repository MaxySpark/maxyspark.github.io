import { Component, Input, OnInit } from '@angular/core';
import { IApiStructure } from 'src/app/data/ApiStructure.interface';

@Component({
  selector: 'app-url-accordion',
  templateUrl: './url-accordion.component.html',
  styleUrls: ['./url-accordion.component.scss']
})
export class UrlAccordionComponent implements OnInit {
  @Input()
  api!: IApiStructure;

  showCode = false;
  showSpinner = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleCode() {
    if (this.showCode) {
      this.showCode = !this.showCode;
      return;
    }
    this.showSpinner = true;
    setTimeout(() => {
      this.showCode = !this.showCode;
      this.showSpinner = false;
    }, 3000);
  }

}
