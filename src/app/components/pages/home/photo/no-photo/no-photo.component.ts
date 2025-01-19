import { Component, inject, OnInit } from '@angular/core';
import { ResourceService } from '../../../../../services/resource.service';

@Component({
  selector: 'rdm-no-photo',
  imports: [],
  templateUrl: './no-photo.component.html',
  styleUrl: './no-photo.component.css'
})
export class NoPhotoComponent implements OnInit {
  projectUrl!: string;

  private resourceService = inject(ResourceService);

  ngOnInit() {
    this.projectUrl = this.resourceService.getProjectUrl();
  }
}
