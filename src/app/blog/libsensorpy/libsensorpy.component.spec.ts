import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibsensorpyComponent } from './libsensorpy.component';

describe('LibsensorpyComponent', () => {
  let component: LibsensorpyComponent;
  let fixture: ComponentFixture<LibsensorpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibsensorpyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibsensorpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
