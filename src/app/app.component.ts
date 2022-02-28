import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faHome, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { ApplicationStateService } from '@app/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alt';
  faGithub = faGithub;
  faHeart = faHeart;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faGlobe = faGlobe;
  faHome = faHome;
  sidebarOpen = false;
  isMobile = false;
  page: string = "welcome";

  constructor(
    private applicationStateService: ApplicationStateService
  ) {
    if (this.applicationStateService.getIsMobileResolution()) {
      this.isMobile = true;
    }
    else {
      this.isMobile = false;
    }
  }

  toggleSidebar() {
    const opposite = !this.sidebarOpen;
    this.sidebarOpen = opposite;
  }

  changePage(changePage: string) {
    this.page = changePage;
  }

}
