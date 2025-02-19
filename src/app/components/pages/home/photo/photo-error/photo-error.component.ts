import { Component, inject, OnInit } from '@angular/core';
import { ContactDataService } from '../../../../../services/contact-data.service';

@Component({
  selector: 'rdm-photo-error',
  imports: [],
  templateUrl: './photo-error.component.html',
  styleUrl: './photo-error.component.css'
})
export class PhotoErrorComponent implements OnInit {
  email!: string;
  emailUrl!: string;

  private contactDataService = inject(ContactDataService);

  ngOnInit() {
    this.init();
  }

  private init() {
    this.email = this.contactDataService.getEmail();
    this.emailUrl = this.contactDataService.getEmailUrl();
  }
}
