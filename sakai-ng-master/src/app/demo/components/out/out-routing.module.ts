import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OutComponent } from './out.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: OutComponent }
    ])],
    exports: [RouterModule]
})
export class OutRoutingModule { }

