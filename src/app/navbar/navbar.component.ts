import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
sp:any=document.querySelector(".navbar");
clicks(){
  this.sp.css='background-color: red'
}


}
