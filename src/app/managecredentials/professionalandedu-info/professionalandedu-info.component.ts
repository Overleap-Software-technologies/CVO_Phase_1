import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professionalandedu-info',
  templateUrl: './professionalandedu-info.component.html',
  styleUrls: ['./professionalandedu-info.component.css']
})
export class ProfessionalandeduInfoComponent {
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}