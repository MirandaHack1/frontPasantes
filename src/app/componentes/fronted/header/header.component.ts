import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

constructor(private router:Router){ 

}
isMenuOpen = false; // Estado del menú hamburguesa

  // Método para cambiar el estado del menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  cerrarSesion(){
    this.router.navigate(['']);
  }
}
