import { Component } from '@angular/core';
import { TestService } from '../../../services/test.service';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { mergeNsAndName } from '@angular/compiler';
import { text } from 'stream/consumers';
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
  nombre = "";
  edad = "";
  fecha = "";
  texto: any
  status: any;

  //variables de inicio de sesion
  correo = "";
  contrasena = "";

  constructor(
    private _testService: TestService, private router: Router
  ) { }

  ngOnInit() {
  }



  postTest() {
    let data = {
      "inNombre": this.nombre,
      "inedad": this.edad,
      "infecha": this.fecha,
    }
    this._testService.postTest(data).subscribe(
      (response: { message: any; }) => {
        this.texto = response.message;
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  postLogin() {
    let data = {
      "loCorreo": this.correo,
      "loContrasena": this.contrasena,
    }
    this._testService.postLogin(data).subscribe(
      (response:any) => {
      if(response.status == 200){
        sessionStorage.setItem('idusuario', response.data.loCode);
        sessionStorage.setItem('loNombre', response.data.loNombre);
        sessionStorage.setItem('loApellido', response.data.loApellido);
        sessionStorage.setItem('loCorreo', response.data.loCorreo); 
        this.router.navigate(['system']);
      }
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  resgistrarUsuario() {
    this.router.navigate(['/registrar']);
  }
}
