import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoFormComponent } from './card-info-form.component';

describe('CardInfoFormComponent', () => {
  let component: CardInfoFormComponent;
  let fixture: ComponentFixture<CardInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
