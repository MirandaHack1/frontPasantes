import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../fronted/menu/menu.component'; 
import { HeaderComponent } from '../fronted/header/header.component';
import { FooterComponent } from '../fronted/footer/footer.component';

@Component({
  selector: 'app-visual',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MenuComponent, HeaderComponent, FooterComponent],
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent {

}
