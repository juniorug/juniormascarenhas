import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactPhraseAreaComponent } from './impact-phrase-area.component';

describe('ImpactPhraseAreaComponent', () => {
  let component: ImpactPhraseAreaComponent;
  let fixture: ComponentFixture<ImpactPhraseAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactPhraseAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactPhraseAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
