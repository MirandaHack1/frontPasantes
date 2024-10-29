import { Component } from '@angular/core';
import { RouterOutlet,Router} from '@angular/router';
import { TestService } from './services/test.service';
// import {}
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './componentes/menu/menu.component';
import { HeaderComponent } from './componentes/header/header.component';
import {FooterComponent } from './componentes/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MenuComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  

})
export class AppComponent {
  
  
  

}

