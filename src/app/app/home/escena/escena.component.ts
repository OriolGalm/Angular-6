import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  public currentSentence:any;
  private cont: number = 0;

  @Input() public frases!: string[];

  constructor() { }

  ngOnInit(): void {
  }

  prev(res:any){
    if(this.cont > 0){
    this.cont--;
    this.currentSentence = res[this.cont];
    console.log(res[this.cont]);
    }
  }

  next(res:any){
    if(this.cont < 3){
    this.cont++;
    this.currentSentence = res[this.cont];
    console.log(res[this.cont]);
    }
  }

}
