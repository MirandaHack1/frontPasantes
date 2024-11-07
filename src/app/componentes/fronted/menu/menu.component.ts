import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TestService} from '../../../services/test.service';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

constructor(private test:TestService,private router:Router){
  
}

ngOnInit(){ 
}



  cuentasR(){
    this.router.navigate(['system/cuentasRegistros']);
  }
  inicio(){
    this.router.navigate(['system']);
  }

  infoPersonal(){
    this.router.navigate(['system/infoPersonal']);
  }
}
