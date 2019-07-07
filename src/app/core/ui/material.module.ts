import { NgModule } from '@angular/core';
import {
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        
} from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        
    ],

})
export class MaterialModule { }