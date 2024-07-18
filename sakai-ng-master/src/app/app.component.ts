import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig, private router: Router,) { }

    ngOnInit() {
        //this.primengConfig.ripple = true;
        this.checkLocalStorage();
    }

    checkLocalStorage()
    {
        // Verifica se o item no localStorage é nulo ou indefinido
        const token = localStorage.getItem("TOKEN-Application");

        if (!token) {
        // Se o item for nulo, redireciona para a página de login
            this.router.navigate(['auth/login']);
        }
    }
}
