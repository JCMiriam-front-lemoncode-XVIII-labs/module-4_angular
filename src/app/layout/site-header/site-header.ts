import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PrivateNav } from '../private-nav/private-nav';
import { PublicNav } from '../public-nav/public-nav';

@Component({
  selector: 'app-site-header',
  imports: [MatIconModule, MatToolbarModule, PublicNav, PrivateNav],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {}
