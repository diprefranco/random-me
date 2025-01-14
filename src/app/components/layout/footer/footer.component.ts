import { Component, inject, OnInit } from '@angular/core';
import { ResourceService } from '../../../services/resource.service';

@Component({
  selector: 'rdm-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  readonly currentYear = new Date().getFullYear();
  emailUrl!: string;
  linkedInUrl!: string;
  githubUrl!: string;
  stackoverflowUrl!: string;

  private resourceService = inject(ResourceService);

  ngOnInit() {
    this.init();
  }

  private init() {
    this.emailUrl = this.resourceService.getEmailUrl();
    this.linkedInUrl = this.resourceService.getLinkedInUrl();
    this.githubUrl = this.resourceService.getGithubUrl();
    this.stackoverflowUrl = this.resourceService.getStackoverflowUrl();
  }
}
