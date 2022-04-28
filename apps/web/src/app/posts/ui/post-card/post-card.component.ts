import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'web-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent {
  @Input() image: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  @Input() title: string = 'Shiba Inu'
  @Input() description: string =
    ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
  @Input() author: string = 'Mathias'
  @Input() updatedAt: string = ''
  @Input() alt: string = 'Photo of a Shiba Inu'
}
