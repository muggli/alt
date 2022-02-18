import { Component } from '@angular/core';
import { faGithub, faLinkedin, faAngular } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

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
  faAngular = faAngular;
  faHome = faHome;
  sidebarOpen = false;
  page: string = "welcome";

  toggleSidebar() {
    const opposite = !this.sidebarOpen;
    this.sidebarOpen = opposite;
  }

  changePage(changePage: string) {
    this.page = changePage;
  }

}
