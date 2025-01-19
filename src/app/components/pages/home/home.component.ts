import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rdm-home',
  imports: [CommonModule, PhotoComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  photoComponentLoaded = false;

  ngOnInit() {
    this.setScrollAnimation();
  }

  private setScrollAnimation() {
    const sections = document.querySelectorAll('.show-animation-scrolling');
    const observer = this.getIntersectionObserver();
    sections.forEach(section => observer.observe(section));
  }

  private getIntersectionObserver(): IntersectionObserver {
    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
  }
}
