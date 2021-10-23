import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl ,Validators} from '@angular/forms';


@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.scss']
})
export class PaginasComponent implements OnInit {
  contador:number;
  form: FormGroup;
  notaFinal:number;
  punto1:number;
  punto2:number;
  punto3:number;
  punto4:number;
  punto5:number;
  punto6:number;
  punto7:number;
  punto8:number;
  punto9:number;
  punto10:number;
  preguntasBuenas:number;
  estado:string;

  constructor(private formBuilder: FormBuilder) {  
    this.form = new FormGroup({})
    this.formPreguntas();
    this.contador=1;
    this.notaFinal=0;
    this.punto1= this.punto2=this.punto3=this.punto4=this.punto5=this.punto6=this.punto7=this.punto8=this.punto9=this.punto10=0;
   this.preguntasBuenas=0;
   this.estado="";
  }

  ngOnInit(): void {
   
  }
  private formPreguntas() {
    this.form = this.formBuilder.group({
      p1:[''],
      p2: [''],
      p3: [''],
      p4: [''],
      p5: [''],
      p6: [''],
      p7: [''],
      p8: [''],
      p9: [''],
      p10: ['']
    
    });

   
  }

  cambiarContador(contadorp:number){
  this.contador=contadorp;
  }
  siguiente(){
   this.contador++;
   
  }
  anterior(){
    this.contador--;
  }

  terminar(){
    this.contador++;
    console.log(this.form.value);
     if(this.form.value.p1==='1'){
       this.punto1=1;
     }

     if(this.form.value.p2==='2'){
      this.punto2=1;
    }
    if(this.form.value.p3==='2'){
      this.punto3=1;
    }
    if(this.form.value.p4==='3'){
      this.punto4=1;
    }
    if(this.form.value.p5==='1'){
      this.punto5=1;
    }

    if(this.form.value.p6==='3'){
      this.punto6=1;
    }

    if(this.form.value.p7==='3'){
      this.punto7=1;
    }

    if(this.form.value.p8==='3'){
      this.punto8=1;
    }

    if(this.form.value.p9==='1'){
      this.punto9=1;
    }

    if(this.form.value.p10==='3'){
      this.punto10=1;
    }
    this.notaFinal=(this.punto1+this.punto2+this.punto3+this.punto4+this.punto5+this.punto6+
      this.punto7+this.punto8+this.punto9+this.punto10)/2;
    
    this.preguntasBuenas=(this.punto1+this.punto2+this.punto3+this.punto4+this.punto5+this.punto6+
      this.punto7+this.punto8+this.punto9+this.punto10);

      if(this.notaFinal>=3){
        this.estado="Aprobo";
      }else{
        this.estado="Reprobo";
      }
  }
}
