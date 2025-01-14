import { Component } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'rdm-home',
  imports: [PhotoComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
