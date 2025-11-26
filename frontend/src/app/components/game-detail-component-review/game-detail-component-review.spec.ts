import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailComponentReview } from './game-detail-component-review';

describe('GameDetailComponentReview', () => {
  let component: GameDetailComponentReview;
  let fixture: ComponentFixture<GameDetailComponentReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameDetailComponentReview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameDetailComponentReview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
