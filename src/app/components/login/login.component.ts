import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl ,Validators} from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  nombre:string;
   apellidos:string;
  constructor(private formBuilder: FormBuilder, private UsuarioService: UsuarioService) { 
  this.nombre="";
  this.apellidos="";
    this.form = new FormGroup({})
    this.buildForm();
  }

  ngOnInit(): void {
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      name:['', [Validators.required]],
      apellidos: ['', [Validators.required]]
    
    });

    // this.form.valueChanges
    // .pipe(
    //   debounceTime(500)
    // )
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  save(event: Event) {
    event.preventDefault();
    if(this.form.valid){
       const value = this.form.value;
       
       this.UsuarioService.obtenerDate(value);
       this.nombre=this.form.value.name;
       this.apellidos=this.form.value.apellidos;
      //  window.location.href='/paginas';
     
    }else{
      this.form.markAllAsTouched();
    }
   
  }

  get nameField(){
    return this.form.controls['name'];
  }
  get apellidosField(){
    return this.form.controls['apellidos'];
  }
}
