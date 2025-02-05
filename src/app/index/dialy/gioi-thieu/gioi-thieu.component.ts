import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gioi-thieu',
  templateUrl: './gioi-thieu.component.html',
  styleUrls: ['./gioi-thieu.component.css'],
})
export class GioiThieuComponent implements OnInit {
  currentSlide: number = 1;
  constructor(private location: Location) {}

  ngOnInit(): void {
    let currentIndex = 1; // Start from the first slide
    const slideItems = document.querySelectorAll<HTMLElement>('.slide-item');
    const totalSlides = slideItems.length;

    if (totalSlides === 0) return; // Exit if no slides exist

    setInterval(() => {
      this.goToNextSlide();
      currentIndex = (currentIndex % totalSlides) + 1; // Loop back to the first slide
    }, 5000);
  }

  cancel() {
    this.location.back();
  }

  goToNextSlide() {
    this.currentSlide = this.currentSlide + 1 > 5 ? 1 : this.currentSlide + 1;
    // Get all elements with class 'slide-item'
    const slideItems = document.querySelectorAll<HTMLElement>('.slide-item');

    // Remove 'active' class from all slide items
    slideItems.forEach((item) => item.classList.remove('active'));

    // Find the element with the same number in its id and set it as active
    slideItems.forEach((item) => {
      const itemNumber = item.id.replace(/\D/g, ''); // Extract number from the item's id
      if (+itemNumber === this.currentSlide) {
        item.classList.add('active');
        return;
      }
    });
  }

  goToPrevSlide() {
    this.currentSlide = this.currentSlide - 1 <= 0 ? 5 : this.currentSlide - 1;
    // Get all elements with class 'slide-item'
    const slideItems = document.querySelectorAll<HTMLElement>('.slide-item');

    // Remove 'active' class from all slide items
    slideItems.forEach((item) => item.classList.remove('active'));

    // Find the element with the same number in its id and set it as active
    slideItems.forEach((item) => {
      const itemNumber = item.id.replace(/\D/g, ''); // Extract number from the item's id
      if (+itemNumber === this.currentSlide) {
        item.classList.add('active');
        return;
      }
    });
  }
}
