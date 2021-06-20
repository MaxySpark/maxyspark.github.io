import { Component, Input, OnInit } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'app-json-wrapper',
  templateUrl: './json-wrapper.component.html',
  styleUrls: ['./json-wrapper.component.scss']
})
export class JsonWrapperComponent implements OnInit {
  @Input() value: any = {};

  theme = 'vs-dark';

  codeModel: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: '',
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: false,
    },
  };

  constructor() { }

  ngOnInit(): void {
    this.codeModel.value = JSON.stringify(this.value, null, 2);
  }

}
