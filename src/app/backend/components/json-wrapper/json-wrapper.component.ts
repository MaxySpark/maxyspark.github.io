import { Component, Input, OnInit } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { v4 } from 'uuid';

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
    uri: `${v4()}.json`,
    value: '',
  };

  options = {
    contextmenu: true,
    wordWrap: 'on',
    minimap: {
      enabled: false,
    },
  };

  constructor() { }

  ngOnInit(): void {
    this.codeModel.value = JSON.stringify(this.value, null, 2);
  }

}
