import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    // styles: [`
    //     :host ::ng-deep .pi-eye,
    //     :host ::ng-deep .pi-eye-slash {
    //         transform:scale(1.6);
    //         margin-right: 1rem;
    //         color: var(--primary-color) !important;
    //     }
    // `]
})
export class LoginComponent implements OnInit{


    filterUser : User = {} as User;
    //valCheck: string[] = ['remember'];
    
    ngOnInit() 
    {
       
        this.checkExistingToken();
    }
    constructor(public layoutService: LayoutService,
        private authService : AuthService,
        private router: Router
    ) { }

   
    async setTokenApp()
    {
        try{
            console.log("filterUser.senha", this.filterUser.password);
            console.log("filterUser.login", this.filterUser.email);
            const token = await lastValueFrom(this.authService.sign(this.filterUser));
            console.log("Token", token.item);
            if(token.item)
                localStorage.setItem("TOKEN-Application", token.item);
                this.router.navigate(['/']);

        }catch (error) {}
        
    }

    private checkExistingToken() {
        const token = localStorage.getItem("TOKEN-Application");
        if (token) {
            this.router.navigate(['/']); // Redireciona se o token já existir
        }
    }


}
