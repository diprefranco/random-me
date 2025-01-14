import { Component, inject, OnInit } from '@angular/core';
import { ResourceService } from '../../../../services/resource.service';

@Component({
  selector: 'rdm-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  randomRoutineUrl!: string;
  templateUrl!: string;

  private resourceService = inject(ResourceService);

  ngOnInit() {
    this.randomRoutineUrl = this.resourceService.getRandomRoutineUrl();
    this.templateUrl = this.resourceService.getTemplateUrl();
  }
}
