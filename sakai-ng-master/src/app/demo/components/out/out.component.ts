import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './out.component.html',
  styleUrl: './out.component.scss'
})
export class OutComponent {

  constructor(private router: Router) {}
  ngOnInit() 
  {
       this.logout();

  }
  logout() {
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}

