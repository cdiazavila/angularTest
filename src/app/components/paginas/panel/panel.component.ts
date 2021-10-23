import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Output() contadorp = new EventEmitter<number>()
  constructor() { 
  
 
  }

  ngOnInit(): void {
  }


  pregunta1():void{
    this.contadorp.emit(1)
  }
  pregunta2():void{
    this.contadorp.emit(2)
  }
  pregunta3():void{
    this.contadorp.emit(3)
  }
  pregunta4():void{
    this.contadorp.emit(4)
  }
  pregunta5():void{
    this.contadorp.emit(5)
  }
  pregunta6():void{
    this.contadorp.emit(6)
  }
  pregunta7():void{
    this.contadorp.emit(7)
  }
  pregunta8():void{
    this.contadorp.emit(8)
  }
  pregunta9():void{
    this.contadorp.emit(9)
  }
  pregunta10():void{
    this.contadorp.emit(10)
  }


}
