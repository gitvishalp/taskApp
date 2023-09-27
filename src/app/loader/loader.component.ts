import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `<div *ngIf="show" class="loader-container">
  <div class="loader"></div>
</div>`,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input() show: boolean = false;
}
