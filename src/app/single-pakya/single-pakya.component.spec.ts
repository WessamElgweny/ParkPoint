import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePakyaComponent } from './single-pakya.component';

describe('SinglePakyaComponent', () => {
  let component: SinglePakyaComponent;
  let fixture: ComponentFixture<SinglePakyaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePakyaComponent]
    });
    fixture = TestBed.createComponent(SinglePakyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
