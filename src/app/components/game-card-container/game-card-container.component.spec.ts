import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardContainerComponent } from './game-card-container.component';

describe('GameCardContainerComponent', () => {
  let component: GameCardContainerComponent;
  let fixture: ComponentFixture<GameCardContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameCardContainerComponent]
    });
    fixture = TestBed.createComponent(GameCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
