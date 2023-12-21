import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageSub= new BehaviorSubject<string>(localStorage.getItem('utente') || '{}');

  watchStorage(): Observable<string> {
    return this.storageSub.asObservable();
  }

  setItem(key: string, data: string): void {
    localStorage.setItem(key, data);
    this.storageSub.next(data);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
    this.storageSub.next('');
  }
}
