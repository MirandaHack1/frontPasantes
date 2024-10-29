import { Component } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

  providers: [TestService]
})
export class LoginComponent {
  title = 'frontPasantes';
  nombre ="";
  edad="";
  fecha="";
  texto:any
  
  //variables de inicio de sesion
  correo = ""; 
  contrasena = "";

  constructor(
    private _testService: TestService, private router:Router
  ){}

  ngOnInit(){
    this.getTest();
  }

  getTest(){
    this._testService.getTest().subscribe(
      (response: { message: any; })=>{
        this.texto = response.message;
        
      },
      (error: any)=>{
        console.log(error)
      }
    )
  }

  postTest(){
    let data = {
      "inNombre":this.nombre,
      "inedad":this.edad,
      "infecha":this.fecha,
    }
    this._testService.postTest(data).subscribe(
      (response: { message: any; })=>{
        this.texto = response.message;
      },
      (error: any)=>{
        console.log(error)
      }
    )
  }

  postLogin(){
    let data = {
      "loCorreo":this.correo,
      "loContrasena":this.contrasena,
      
    }
    console.log(data)
    this._testService.postLogin(data).subscribe(
      (response: { message: any; })=>{
        this.texto = response.message;
       
      },
      (error: any)=>{
        console.log(error)
      }
    )
  }

  resgistrarUsuario(){
    this.router.navigate(['/registrar']);
  }
}
