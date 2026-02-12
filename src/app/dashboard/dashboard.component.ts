import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
// import { HeaderBannerComponent } from '../shared/header-banner/header-banner.component';
import { FILERS_LIST } from '../config/filers';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatDividerModule, MatIconModule,MatToolbarModule,MatCardModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
filersList = [] as any;
sidebarOpen : boolean = false;

ngOnInit() {
  debugger
   this.filersList = FILERS_LIST;
    window.addEventListener('sidebarToggle', (event: any) => {
      console.log(event);
      
      const isSidebarOpen = event.detail.isOpen;
      this.sidebarOpen = isSidebarOpen;
      // Apply layout change
      this.updateLayoutBasedOnSidebar(isSidebarOpen);
    });  
  }

  updateLayoutBasedOnSidebar(isSidebarOpen: any) {
    const exampleContainers = document.getElementsByClassName("main-container");
    const innerWidth = window.innerWidth;
    
    if (isSidebarOpen && innerWidth>767) {
      for (let i = 0; i < exampleContainers.length; i++) {
        (exampleContainers[i] as HTMLElement).style.marginLeft = "250px";
      }
    } else {
      for (let i = 0; i < exampleContainers.length; i++) {
        (exampleContainers[i] as HTMLElement).style.marginLeft = "0px";
      }
    }
  }

}
