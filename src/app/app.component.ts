import { Component } from '@angular/core';
import { RouterOutlet,Router} from '@angular/router';
import { TestService } from './services/test.service';
// import {}
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './componentes/fronted/menu/menu.component';
import { HeaderComponent } from './componentes/fronted/header/header.component';
import {FooterComponent } from './componentes/fronted/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MenuComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  

})
export class AppComponent {
  
}

