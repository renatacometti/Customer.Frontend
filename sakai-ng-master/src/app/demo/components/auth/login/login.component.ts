import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/services/auth.service';
import { APIResponse } from 'src/app/interfaces/api-response.interface';

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
    errorMessage: string = '';    // Mensagem de erro para exibir no front-end
    successMessage: string = '';  // Mensagem de sucesso
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
        this.errorMessage = '';
        this.successMessage = '';
        try{
            //console.log("filterUser.senha", this.filterUser.password);
            //console.log("filterUser.login", this.filterUser.email);
            const response = await lastValueFrom(this.authService.sign(this.filterUser)); // retorna o Token
            //console.log("Token", token.item);
            if(response.success)
                //this.successMessage = "Login realizado com sucesso!"; se quiser apresentar msg de sucesso
                localStorage.setItem("TOKEN-Application", response.item);
                this.router.navigate(['/']);
            
        }catch (error) 
        {
            this.errorMessage = "Usuario não encontrado";
            //console.error("Erro ao realizar login:", error);
        }
        
    }

    private checkExistingToken() {
        const token = localStorage.getItem("TOKEN-Application");
        if (token) {
            this.router.navigate(['/']); // Redireciona se o token já existir
        }
    }


}
