import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-private-nav',
  imports: [MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './private-nav.html',
  styleUrl: './private-nav.scss',
})
export class PrivateNav {}
