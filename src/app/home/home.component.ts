import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  x: number = 0;
  y: number = 0;

  onMouseMove(event: MouseEvent) {
      const gradientWidth = 150; // or appropriate value based on your CSS variable
      const gradientHeight = 150; // or appropriate value based on your CSS variable

      let calculatedX = event.clientX - gradientWidth / 2;
      let calculatedY = event.clientY - gradientHeight / 2;

      this.x = Math.min(1200, calculatedX);
      this.y = Math.min(300, calculatedY);
  }


  @HostListener('document:mousemove', ['$event'])
  handleMouseMove(event: MouseEvent) {
      this.onMouseMove(event);
  }
}
