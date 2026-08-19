import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

export interface LoginCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly storageKey = 'angular-lab.username';
  private username = localStorage.getItem(this.storageKey) ?? '';

  login({ username, password }: LoginCredentials): Observable<boolean> {
    const isValidUser = username === 'master@lemoncode.net' && password === '12345678';

    return of(isValidUser).pipe(
      delay(2000),
      tap((isLogged) => {
        if (isLogged) {
          this.username = username;
          localStorage.setItem(this.storageKey, username);
        }
      }),
    );
  }

  logout(): void {
    this.username = '';
    localStorage.removeItem(this.storageKey);
  }

  isLogged(): boolean {
    return this.username.length > 0;
  }

  getUsername(): string {
    return this.username;
  }
}
