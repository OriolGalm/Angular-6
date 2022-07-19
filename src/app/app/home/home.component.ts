import { Component, OnInit } from '@angular/core';

export interface Frase{
  txt: string;
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public welcome: boolean = true;

  public arrayFrases: Frase[] = [
    {"txt": "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial", "img": "assets/1.jpg"},
    {"txt": "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.", "img": "assets/2.jpg"},
    {"txt": "L'heroi va decidir travessar la porta que el portava a casa", "img": "assets/3.jpg"},
    {"txt": "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...", "img": "assets/4.jpg"} 
  ];

  constructor() { }

  ngOnInit(): void {
  }

  entrar(){
    this.welcome = false;
  }

}
