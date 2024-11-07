import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TestService } from '../../../../services/test.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuentas-modal',
  standalone: true,
  imports: [FormsModule, RouterOutlet, NgIf],
  templateUrl: './cuentas-modal.component.html',
  styleUrl: './cuentas-modal.component.scss'
})
export class CuentasModalComponent {
  idcuentas = "";
  nombre = "";
  apellido = "";
  correo = "";
  contrasena = "";

  constructor(private test: TestService, private router: Router) {

  }
  
  ngOnInit() {
    
    const idcuentas = history.state.data;
    this.idcuentas = idcuentas;
    this.traerdatocuentas();
  }




  traerdatocuentas() {
    if(this.idcuentas === undefined){
      console.log("no hay datos");

    }else{
    this.test.getCuentasdatos(this.idcuentas).subscribe(
      (res: any) => {
        console.log(res);
        this.nombre = res[0].loNombre;
        this.apellido = res[0].loApellido;
        this.correo = res[0].loCorreo;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  }



  editaryguardarcuentas() {
    console.log(this.idcuentas);

    if (this.idcuentas === undefined) {
      let data = {
        "loNombre": this.nombre,
        "loApellido": this.apellido,
        "loCorreo": this.correo,
        "loContrasena": this.contrasena
      }
      this.test.postUser(data).subscribe(
        (res: any) => {
          console.log(res);
          Swal.fire("Se guardaron los datos correctamente", "", "success");
          this.router.navigate(['system/cuentasRegistros']);
        },
        (error: any) => {
          console.log(error);
        }
      )
    } else {
      let data = {
        "loCode": this.idcuentas,
        "loNombre": this.nombre,
        "loApellido": this.apellido,
        "loCorreo": this.correo
      }
      this.test.putCuentas(data).subscribe(
        (res: any) => {
          console.log(res);
          Swal.fire("Se actualizaron los datos correctamente", "", "success");
          this.router.navigate(['system/cuentasRegistros']);
        },
        (error: any) => {
          console.log(error);
        }
      )
    }
  }


  regresar() {
    this.router.navigate(['system/cuentasRegistros']);
  }
}
