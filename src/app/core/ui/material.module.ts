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
        MatCardModule,
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
        MatCardModule,
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
        MatCardModule,
    ],

})
export class MaterialModule { }