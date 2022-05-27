import { Component, OnInit } from '@angular/core';
import { Gamme } from 'src/app/interfaces/gamme';

@Component({
  selector: 'app-gamme',
  templateUrl: './gamme.component.html',
  styleUrls: ['./gamme.component.css'],
})
export class GammeComponent implements OnInit {
  gammes: Gamme[] = [];
  constructor() {}

  ngOnInit(): void {
    let husqvarna: Gamme = {
      nom: 'Husqvarna',
      lien: 'https://www.husqvarna.com',
      logo: 'assets/Husqvarna.png',
    };
    let pubert: Gamme = {
      nom: 'Pubert',
      lien: 'https://pubert.com/',
      logo: 'assets/pubert.jpg',
    };

    this.gammes.push(husqvarna);
    this.gammes.push(pubert);
  }
}
