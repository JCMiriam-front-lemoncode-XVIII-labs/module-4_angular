import { SlicePipe } from '@angular/common';
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
  imports: [SlicePipe, MatButtonModule, MatIconModule],
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
  currentPage = 0;
  imageSize = 100;
  isPlaying = false;
  readonly pageSize = 3;
  private playerId?: number;

  get selectedImage(): GalleryImage {
    return this.images[this.selectedIndex];
  }

  get pageStart(): number {
    return this.currentPage * this.pageSize;
  }

  get pageEnd(): number {
    return this.pageStart + this.pageSize;
  }

  get totalPages(): number {
    return Math.ceil(this.images.length / this.pageSize);
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
    this.currentPage = Math.floor(index / this.pageSize);
  }

  previous(): void {
    if (this.selectedIndex > 0) {
      this.selectImage(this.selectedIndex - 1);
    }
  }

  next(): void {
    if (this.selectedIndex < this.images.length - 1) {
      this.selectImage(this.selectedIndex + 1);
    }
  }

  increaseSize(): void {
    this.imageSize = Math.min(this.imageSize + 10, 160);
  }

  decreaseSize(): void {
    this.imageSize = Math.max(this.imageSize - 10, 60);
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  play(): void {
    if (this.isPlaying) {
      return;
    }

    this.isPlaying = true;
    this.playerId = window.setInterval(() => {
      this.selectImage((this.selectedIndex + 1) % this.images.length);
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
