import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TestService } from '../../../services/test.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-info-personal',
  standalone: true,
  imports: [FormsModule, RouterOutlet, NgIf],
  templateUrl: './info-personal.component.html',
  styleUrl: './info-personal.component.scss'
})
export class InfoPersonalComponent {
  idcuentas = "";
  nombre = "";
  apellido = "";
  correo = "";
  contrasena = "";  


  constructor( private router: Router, private test: TestService) {

  }

  ngOnInit() {
    this.cargarDatos();
    
  }


  cargarDatos() {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      this.idcuentas = sessionStorage.getItem('idusuario') || '';
      this.nombre = sessionStorage.getItem('loNombre') || '';
      this.apellido = sessionStorage.getItem('loApellido') || ''; 
      this.correo = sessionStorage.getItem('loCorreo') || '';
    }
  }
  

  editarInfoPersonal() {
      let data = {
        "loCode": this.idcuentas,
        "loNombre": this.nombre,
        "loApellido": this.apellido,
        "loCorreo": this.correo,
      }
      this.test.putCuentas(data).subscribe(
        (res:any) => {
          console.log(res);
          this.router.navigate(['system']);
          Swal.fire("Se Actualizaron los datos correctamente", "", "success");
      },
      (error: any) => {

      }, 
      );

  }

 regresar() {
    this.router.navigate(['system']);
  }

  cambioContrasena(idcuentas: any) {
    this.router.navigate(['system/claveCuentas'], { state: { data: idcuentas } });
  }
}
