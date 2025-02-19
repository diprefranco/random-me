import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ConsoleService } from './services/console.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  providers: [DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private consoleService = inject(ConsoleService);

  ngOnInit() {
    this.consoleService.logWelcomeMessage();
  }
}
