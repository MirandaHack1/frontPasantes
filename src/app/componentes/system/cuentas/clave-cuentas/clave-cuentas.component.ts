import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { TestService } from '../../../../services/test.service';

@Component({
  selector: 'app-clave-cuentas',
  standalone: true,
  imports: [ RouterOutlet,FormsModule],
  templateUrl: './clave-cuentas.component.html',
  styleUrl: './clave-cuentas.component.scss'
})
export class ClaveCuentasComponent {
  contrasena = "";
  idcuentas = ""; 
constructor(private test: TestService, private router: Router) {
}
ngOnInit() { 
  const idcuentas = history.state.data;
    this.idcuentas = idcuentas;

}



  cambioContrasena() {
    let data ={
      "loCode": this.idcuentas,
      "loContrasena": this.contrasena
    }
    this.test.putclaveCuentas(data).subscribe(
      (res:any)=>{
        console.log(res);
        this.regresar();
      },
      (error:any)=>{ 
        console.log(error);
      } 
    )
  }

  regresar() {
    this.router.navigate(['system/cuentasRegistros']);
  }
}
