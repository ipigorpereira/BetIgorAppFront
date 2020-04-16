import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosBetfairComponent } from './jogos-betfair.component';

describe('JogosBetfairComponent', () => {
  let component: JogosBetfairComponent;
  let fixture: ComponentFixture<JogosBetfairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogosBetfairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosBetfairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
