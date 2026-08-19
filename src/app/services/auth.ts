import { Injectable } from '@angular/core';

export interface LoginCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private username = '';

  login({ username, password }: LoginCredentials): boolean {
    const isValidUser = username === 'master@lemoncode.net' && password === '12345678';

    if (isValidUser) {
      this.username = username;
    }

    return isValidUser;
  }

  logout(): void {
    this.username = '';
  }

  isLogged(): boolean {
    return this.username.length > 0;
  }

  getUsername(): string {
    return this.username;
  }
}
