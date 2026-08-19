import { Injectable } from '@angular/core';

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

  login({ username, password }: LoginCredentials): boolean {
    const isValidUser = username === 'master@lemoncode.net' && password === '12345678';

    if (isValidUser) {
      this.username = username;
      localStorage.setItem(this.storageKey, username);
    }

    return isValidUser;
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
