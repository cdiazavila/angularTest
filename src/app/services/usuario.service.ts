import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 private datos=new Subject<string>()
  constructor() { }

  obtenerDate(dato:any):void{
   this.datos.next(dato)
  }
  getTexto(): Observable<any>{
    return this.datos.asObservable()
  }
  
}
