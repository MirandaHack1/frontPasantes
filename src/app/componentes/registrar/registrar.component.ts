import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})
export class RegistrarComponent {

  nombre = "";
  apellido = "";
  correo = "";
  contrasena = "";
  texto="";
constructor(private testService:TestService, private router:Router){


}

ngOnInit(){

 
}

regresarLogin(){
  this.router.navigate(['']);

}
guardar (){
  let data = {
    nombre: this.nombre,
    apellido: this.apellido,
    correo: this.correo,
    contrasena: this.contrasena
  }
  this.testService.postLogin(data).subscribe(
    (response: { message: any; })=>{
      this.texto = response.message;
     
    },
    (error: any)=>{
      console.log(error)
    }
  )
}
  
}


