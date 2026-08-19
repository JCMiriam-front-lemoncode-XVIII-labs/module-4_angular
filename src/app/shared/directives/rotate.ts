import { Directive, ElementRef, HostListener, OnInit, input, numberAttribute } from '@angular/core';

@Directive({
  selector: 'img[rotate]',
})
export class Rotate implements OnInit {
  readonly rotate = input(0, { transform: numberAttribute });
  readonly step = input(10, { transform: numberAttribute });

  private degrees = 0;

  constructor(private readonly element: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    this.degrees = this.rotate();
    this.applyRotation();
  }

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent): void {
    this.degrees += event.shiftKey ? -this.step() : this.step();
    this.applyRotation();
  }

  private applyRotation(): void {
    this.element.nativeElement.style.transform = `rotate(${this.degrees}deg)`;
  }
}
