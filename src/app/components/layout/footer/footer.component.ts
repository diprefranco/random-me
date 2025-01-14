import { Component, inject, OnInit } from '@angular/core';
import { ContactDataService } from '../../../services/contact-data.service';

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

  private contactDataService = inject(ContactDataService);

  ngOnInit() {
    this.init();
  }

  private init() {
    this.emailUrl = this.contactDataService.getEmailUrl();
    this.linkedInUrl = this.contactDataService.getLinkedInUrl();
    this.githubUrl = this.contactDataService.getGithubUrl();
    this.stackoverflowUrl = this.contactDataService.getStackoverflowUrl();
  }
}
