import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

import { Auth } from '../../services/auth';
import { PrivateNav } from '../private-nav/private-nav';
import { PublicNav } from '../public-nav/public-nav';

@Component({
  selector: 'app-site-header',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, PublicNav, PrivateNav],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly auth = inject(Auth);
  private readonly router = inject(Router);

  logout(): void {
    this.auth.logout();
    void this.router.navigate(['/home']);
  }
}
