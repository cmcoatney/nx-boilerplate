import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'web-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent implements OnInit {
  posts$ :Observable<[]> = new Observable<[]>();

  constructor() {}

  ngOnInit(): void {}
}
