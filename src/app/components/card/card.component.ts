import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameCover:string = "";
  @Input()
  gameLabelIsAlive:boolean = true;
  @Input()
  gameLabel:string = "";
  @Input()
  title:string = "Jogue Agora!"
  @Input()
  gameType:string = "DIGITAL | PS4"
  @Input()
  gamePrice:string = "R$ 249,00"

  constructor() { }

  ngOnInit(): void {
  }

}
