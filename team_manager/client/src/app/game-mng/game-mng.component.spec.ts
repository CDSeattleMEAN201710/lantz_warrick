import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMngComponent } from './game-mng.component';

describe('GameMngComponent', () => {
  let component: GameMngComponent;
  let fixture: ComponentFixture<GameMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
