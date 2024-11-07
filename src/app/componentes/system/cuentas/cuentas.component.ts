import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'; 
import { TestService } from '../../../services/test.service';
import { FormsModule } from '@angular/forms'; 
import { NgFor, NgIf } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import Swal from 'sweetalert2'; 
@Component({
  selector: 'app-cuentas',
  standalone: true,
  imports: [FormsModule, RouterOutlet, NgFor, NgIf],
  templateUrl: './cuentas.component.html',
  styleUrl: './cuentas.component.scss'
})
export class CuentasComponent {
  
  busqueda = '';  
  data: any[] = [];    
  dropdownOpen: number | null = null;  
  isSmallScreen = false;

  constructor(
    private test: TestService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.listarCuentas();
    this.checkScreenSize();  
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    // Verifica si estamos en un entorno de navegador antes de usar `window`
    if (isPlatformBrowser(this.platformId)) {
      this.isSmallScreen = window.innerWidth <= 768;
    }
  }

  toggleDropdown(cuentaId: number) {
    if (this.dropdownOpen === cuentaId) {
      this.dropdownOpen = null;  
    } else {
      this.dropdownOpen = cuentaId; 
    }
  }

  listarCuentas() {
    this.test.getCuentas(this.busqueda).subscribe(
      (res: any) => {
        this.data = res;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  eliminarCuenta(id: any) {
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar esta cuenta?',
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      // Aquí manejamos la respuesta de la alerta
      if (result.isConfirmed) {  // Si el usuario hace clic en "Sí"
        this.test.deleteCuenta(id).subscribe(
          (res: any) => {
            console.log(res);  
            this.listarCuentas();  // Vuelve a cargar la lista de cuentas
            Swal.fire('Cuenta eliminada', 'La cuenta ha sido eliminada con éxito', 'success');
          },
          (error: any) => {
            console.log(error);  
            Swal.fire('Error', 'Hubo un error al eliminar la cuenta', 'error');
          }
        );
      } else {
        // Si el usuario hace clic en "No", no hacemos nada (o puedes mostrar algún mensaje si lo prefieres)
        console.log('La cuenta no ha sido eliminada.');
      }
    });
  }
  

  nuevaCuenta() {
    this.router.navigate(['system/cuentasmodalRegistros']);
  }

  editar(id: any) {
    this.router.navigate(['system/cuentasmodalRegistros'], { state: { data: id } });
  }

  cambioContrasena(id: any) {
    this.router.navigate(['system/claveCuentas'], { state: { data: id } });
  }

}
