import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'web-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
