import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenav} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Users } from 'src/app/userModel';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../../servizi/localStorage.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, CommonModule],
})
export class ToolbarComponent implements OnInit, OnDestroy{
  @Input() sidenav: MatSidenav | undefined;
  isLogged: boolean;
  user: Users;
  private storageSub!: Subscription;

  constructor(private location: Location, private localStorageService: LocalStorageService) {
    const utente = JSON.parse(localStorage.getItem('utente') || '{}');
    this.user = new Users(utente.name, utente.isLogged);
    this.isLogged = this.user.getIsLoggedUser;
    this.updateUserFromLocalStorage();
  }

  ngOnInit(): void {
    this.storageSub = this.localStorageService.watchStorage().subscribe(() => {
      this.updateUserFromLocalStorage();
    });
  }

  ngOnDestroy(): void {
    if (this.storageSub) {
      this.storageSub.unsubscribe();
    }
  }

  updateUserFromLocalStorage(): void {
    const utente = JSON.parse(localStorage.getItem('utente') || '{}');
    this.user = new Users(utente.name, utente.isLogged);
    this.isLogged = this.user.getIsLoggedUser;
  }
  
  aprichiudi() {
    this.sidenav?.toggle();
  }

}
