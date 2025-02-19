import { inject, Injectable } from '@angular/core';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  private resourceService = inject(ResourceService);

  logWelcomeMessage() {
    const currentYear = new Date().getFullYear();
    const projectUrl = this.resourceService.getProjectUrl();

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
  ║                      Check it out here: ${projectUrl}                                  ║  
  ║                                                                                                                   ║  
  ║                                                © ${currentYear} Franco Dipre                                                ║  
  ╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝  
                                                                                                                         `,
        "font-size: 14px; color: #05f903; background-color: #191919");
    }, 1000);
  }
}
