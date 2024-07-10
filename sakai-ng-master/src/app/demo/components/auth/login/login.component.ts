import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit{


    filterUser : User = {} as User;
    valCheck: string[] = ['remember'];
    
    ngOnInit() 
    {
       this.generateToken();

    }
   

    constructor(public layoutService: LayoutService,
        private authService : AuthService
    ) { }

   
    async generateToken()
    {
      
        const token= await lastValueFrom(this.authService.sign(this.filterUser));
        localStorage.setItem('token', token);

    }


}
