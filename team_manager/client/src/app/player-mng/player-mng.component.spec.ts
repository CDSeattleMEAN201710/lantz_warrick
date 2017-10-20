import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMngComponent } from './player-mng.component';

describe('PlayerMngComponent', () => {
  let component: PlayerMngComponent;
  let fixture: ComponentFixture<PlayerMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
