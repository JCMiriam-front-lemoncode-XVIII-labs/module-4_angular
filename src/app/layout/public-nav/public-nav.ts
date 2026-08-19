import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-public-nav',
  imports: [MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './public-nav.html',
  styleUrl: './public-nav.scss',
})
export class PublicNav {}
