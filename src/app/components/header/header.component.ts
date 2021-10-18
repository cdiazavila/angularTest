import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   datos:any;

  constructor(private UsuarioService:UsuarioService) { 
   
    this.UsuarioService.getTexto().subscribe(data=>{
 
     this.datos= 'Bienvenido/a '+data.name +' '+data.apellidos;
 
    })
  }

  ngOnInit(): void {
  }

}
