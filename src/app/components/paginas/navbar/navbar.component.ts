import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 @Input() nota: number;
 @Input() contadornav:number;
 @Input() preguntasBuenas:number;
  constructor() { 
    this.nota=this.contadornav=this.preguntasBuenas=0;
  }

  ngOnInit(): void {
  }

}
