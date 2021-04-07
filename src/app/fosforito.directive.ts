import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFosforito]'
})
export class FosforitoDirective {

  @Input('appFosforito') color: string;
  @Input() colorPorDefecto: string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    console.log(this.color);
    this.cambiarColorFondo(this.color || this.colorPorDefecto || '#FF0000');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.cambiarColorFondo(null);
  }

  cambiarColorFondo(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
