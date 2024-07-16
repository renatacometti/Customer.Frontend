import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutRoutingModule } from './out-routing.module';
import { OutComponent } from './out.component';

@NgModule({
    imports: [
        CommonModule,
        OutRoutingModule,
    ],
    declarations: [OutComponent]
})
export class OutModule { }

