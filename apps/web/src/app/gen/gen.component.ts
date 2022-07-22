import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'gen-gen',
  templateUrl: './gen.component.html',
  styleUrls: ['./gen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [GenComponent],
  exports: [GenComponent],
})
export class GenComponentModule {}
