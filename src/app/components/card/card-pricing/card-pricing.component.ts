import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

  @Input()
  title:string = "Jogue Agora!"
  @Input()
  gameType:string = "DIGITAL PS4"
  @Input()
  gamePrice:string = "R$ 249,00"

  constructor() { }

  ngOnInit(): void {
  }

}
