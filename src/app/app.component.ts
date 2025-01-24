import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ResourceService } from './services/resource.service';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private resourceService = inject(ResourceService);

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    const projectUrl = this.resourceService.getProjectUrl();
    this.logConsoleWelcomeMessage(currentYear, projectUrl);
  }

  private logConsoleWelcomeMessage(year: number, projectUrl: string) {
    setTimeout(() => {
      console.log(`%c
                                                                                                                         
  ██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗    ███████╗███████╗██╗     ██╗      █████╗ ███████╗██╗  
  ██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝    ██╔════╝██╔════╝██║     ██║     ██╔══██╗██╔════╝██║  
  ██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗      █████╗  █████╗  ██║     ██║     ███████║███████╗██║  
  ██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝      ██╔══╝  ██╔══╝  ██║     ██║     ██╔══██║╚════██║╚═╝  
  ╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗    ██║     ███████╗███████╗███████╗██║  ██║███████║██╗  
   ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝    ╚═╝     ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  
                                                                                                                         
  ╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗  
  ║                      The site code you're exploring might be minimized.                                           ║  
  ║                      Check it out here: ${projectUrl}                   ║  
  ║                                                                                                                   ║  
  ║                                                © ${year} Franco Dipre                                                ║  
  ╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝  
                                                                                                                         `,
        "font-size: 14px; color: #05f903; background-color: #191919");
    }, 1000);
  }
}
