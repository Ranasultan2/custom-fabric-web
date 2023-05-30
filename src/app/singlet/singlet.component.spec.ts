import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletComponent } from './singlet.component';

describe('SingletComponent', () => {
  let component: SingletComponent;
  let fixture: ComponentFixture<SingletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
