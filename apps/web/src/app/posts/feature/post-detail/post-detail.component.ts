import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'web-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}