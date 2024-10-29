import { Component } from '@angular/core';
import { RouterOutlet,Router} from '@angular/router';
import { TestService } from './services/test.service';
// import {}
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  

})
export class AppComponent {
  
  
  

}

