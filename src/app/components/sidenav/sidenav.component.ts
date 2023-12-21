import {Component} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { StepperVerticalExample } from "../login/stepper.component";
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { Router } from '@angular/router';
import { LocalStorageService } from '../../servizi/localStorage.service';


@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
    standalone: true,
    imports: [
        NgIf,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatDividerModule,
        BrowserAnimationsModule,
        MatIconModule,
        StepperVerticalExample,
        RouterModule,
        ToolbarComponent
    ]
})
export class SidenavComponent {

  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  [x: string]: any;
  elementi = ['Home', 'Person', 'Settings'];
  icone = ['home', 'person', 'settings'];
  routeLinks = [ '/home', '/person', '/settings'];


  logOut() {
    this.localStorageService.removeItem('utente');
    this.router.navigate(['/login']);
  }
}
