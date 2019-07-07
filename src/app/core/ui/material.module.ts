import { NgModule } from '@angular/core';
import {
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatTabsModule,
        
} from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatTabsModule,
        
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatTabsModule,
        
    ],

})
export class MaterialModule { }