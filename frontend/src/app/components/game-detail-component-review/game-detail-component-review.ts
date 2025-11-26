import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { Game } from '../../services/games';
@Component({
  selector: 'app-game-detail-component-review',
  imports: [],
  templateUrl: './game-detail-component-review.html',
  styleUrl: './game-detail-component-review.css',
})
export class GameDetailComponentReview implements OnChanges {
  @Input() game: Game | undefined;
  reviewText: string = '...';
  constructor(private reviewService: ReviewService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.game?.id) {
      this.reviewService.getReview(this.game.id).subscribe((res) => {
        this.reviewText = res.response;
      });
    }
  }
}
