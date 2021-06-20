import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlAccordionComponent } from './url-accordion.component';

describe('UrlAccordionComponent', () => {
  let component: UrlAccordionComponent;
  let fixture: ComponentFixture<UrlAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
