import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mobileScreen = false;
  toggle = false;
  ngOnInit(): void {
    (window.innerWidth < 600)?this.mobileScreen = true:this.mobileScreen = false;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 600) {
      this.mobileScreen = true;
    }
    else{
      this.mobileScreen = false;
    }
  }
  toggleMenu() {
    if (this.toggle == true)
      this.toggle = false;
    else
      this.toggle = true;
    console.log("click button ",  this.toggle);
  }
}
