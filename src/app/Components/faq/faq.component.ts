import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  toggleAccordion(event: Event) {
    const button = event.currentTarget as HTMLElement;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const accordionButtons = document.querySelectorAll('.accordion button');

    accordionButtons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));

    if (!isExpanded) {
      button.setAttribute('aria-expanded', 'true');
    }
  }
}