import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//Import Material Design Modules
import { MatButtonModule, MatListModule, MatIconModule, MatIconRegistry, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule,
  MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatSnackBarModule, MatToolbarModule,
  MatTabsModule, MatSidenavModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule,
  MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Import Covalent Modules
import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule,
  CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
  CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule } from '@covalent/core';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { LinkComponent } from './nav/link/link.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,
  ],
  declarations: [
    HeaderComponent,
    NavComponent,
    LinkComponent,
    SidenavComponent,
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    LinkComponent,
    SidenavComponent,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,
  ]
})
export class CoreModule { }
