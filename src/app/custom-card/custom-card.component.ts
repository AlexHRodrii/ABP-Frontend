import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent {
  @Input() headers: string[] = [];
  @Input() cardTitle: string = 'Card Title';
  @Input() cardData: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est sem, malesuada at luctus eget, ullamcorper in ante. Cras ut urna et nulla tempus cursus a quis est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
  @Input() detailsURL: string = ''
  @Input() cardImageURL: string = ''

  constructor(private route: ActivatedRoute, private router: Router) {}

  goToURL(url: string) {
    this.router.navigate([url]);
  }
}


