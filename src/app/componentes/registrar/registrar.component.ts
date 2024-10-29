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
    loNombre: this.nombre,
    loApellido: this.apellido,
    loCorreo: this.correo,
    loContrasena: this.contrasena
  }
  console.log(data);
  this.testService.postUser(data).subscribe(
    (response:any)=>{
      this.texto = response.message;
      if(response.status == 200){
        alert('Usuario registrado correctamente');

      }
    },
    (error: any)=>{
      console.log(error)
    }
  )
}
  
}


