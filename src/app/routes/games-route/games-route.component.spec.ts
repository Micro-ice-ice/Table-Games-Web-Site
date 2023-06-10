import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesRouteComponent } from './games-route.component';

describe('GamesRouteComponent', () => {
  let component: GamesRouteComponent;
  let fixture: ComponentFixture<GamesRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesRouteComponent]
    });
    fixture = TestBed.createComponent(GamesRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
