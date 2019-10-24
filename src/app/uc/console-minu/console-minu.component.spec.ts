import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleMinuComponent } from './console-minu.component';

describe('ConsoleMinuComponent', () => {
  let component: ConsoleMinuComponent;
  let fixture: ComponentFixture<ConsoleMinuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleMinuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleMinuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
