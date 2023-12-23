import { Component } from '@angular/core';
import { Users } from './userModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from './servizi/localStorage.service';

interface ApiResponse {
  token: string;
  refreshToken: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'negozio';
  constructor(private http: HttpClient, private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    const utenteString = localStorage.getItem('utente');
    if (utenteString) {
      const utente = JSON.parse(utenteString);
      const user = new Users(utente.name, false);
      localStorage.setItem('utente', JSON.stringify(user));
      this.http.post('http://localhost:3000/api/token',
        {},
        {withCredentials: true}
      ).pipe(
        catchError((error: any) => {
          if(error.status === 401){
            console.log('utente non loggato');
          }
          if(error.status === 403){
            console.log('ora mando refresh');
          
            this.http.post<ApiResponse>('http://localhost:3000/api/refresh', {}, { })
            .pipe(
              catchError((error: any) => {
                return throwError(error);
              })
            ).subscribe((response: ApiResponse) => {
              console.log(response);
              console.log("entrato nel refresh");
              user.isLoggedUser = true;
              this.localStorageService.setItem('utente', JSON.stringify(user));
              console.log(user);
              this.router.navigate(['/home']);
            });
          }
          return throwError(error);
        })
      ).subscribe(response => {
        console.log(response);
        user.isLoggedUser = true;
        this.localStorageService.setItem('utente', JSON.stringify(user));
        this.router.navigate(['/home']);

      });
    }else{
      console.log('utente non loggato');
    }
  }
}
