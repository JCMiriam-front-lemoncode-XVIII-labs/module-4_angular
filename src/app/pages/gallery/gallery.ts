import { Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery implements OnDestroy {
  readonly images: GalleryImage[] = [
    { id: 1, src: 'assets/gallery/lake.png', title: 'Lago de montaña' },
    { id: 2, src: 'assets/gallery/coast.png', title: 'Costa con faro' },
    { id: 3, src: 'assets/gallery/desert.png', title: 'Dunas del desierto' },
    { id: 4, src: 'assets/gallery/city.png', title: 'Ciudad al atardecer' },
    { id: 5, src: 'assets/gallery/flowers.png', title: 'Flores silvestres' },
    { id: 6, src: 'assets/gallery/waterfall.png', title: 'Cascada en el bosque' },
    { id: 7, src: 'assets/gallery/autumn.png', title: 'Bosque de otoño' },
    { id: 8, src: 'assets/gallery/aurora.png', title: 'Aurora boreal' },
  ];

  selectedIndex = 0;
  imageSize = 100;
  isPlaying = false;
  private playerId?: number;

  get selectedImage(): GalleryImage {
    return this.images[this.selectedIndex];
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  previous(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }

  next(): void {
    if (this.selectedIndex < this.images.length - 1) {
      this.selectedIndex++;
    }
  }

  increaseSize(): void {
    this.imageSize = Math.min(this.imageSize + 10, 160);
  }

  decreaseSize(): void {
    this.imageSize = Math.max(this.imageSize - 10, 60);
  }

  play(): void {
    if (this.isPlaying) {
      return;
    }

    this.isPlaying = true;
    this.playerId = window.setInterval(() => {
      this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    }, 2000);
  }

  stop(): void {
    if (this.playerId !== undefined) {
      window.clearInterval(this.playerId);
      this.playerId = undefined;
    }

    this.isPlaying = false;
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
