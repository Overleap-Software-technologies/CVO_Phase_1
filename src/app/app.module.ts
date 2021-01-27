import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { PhysiciandbviewComponent } from './physiciandbview/physiciandbview.component';
import { AdminandbviewComponent } from './adminandbview/adminandbview.component';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginator } from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { ManagecredentialsComponent } from './managecredentials/managecredentials.component';
import { PersonalInfoComponent } from './managecredentials/personal-info/personal-info.component';
import { ProfessionalandeduInfoComponent } from './managecredentials/professionalandedu-info/professionalandedu-info.component';
import { WorkExperienceComponent } from './managecredentials/work-experience/work-experience.component';
import { MedicalMalpracticeComponent } from './managecredentials/medical-malpractice/medical-malpractice.component';
import { PeerReferencesComponent } from './managecredentials/peer-references/peer-references.component';
import { LicensureComponent } from './managecredentials/licensure/licensure.component';
import { PayorsInfoComponent } from './managecredentials/payors-info/payors-info.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { NavbarComponent } from './navbar/navbar.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatExpansionModule} from '@angular/material/expansion';
import { CmeComponent } from './managecredentials/cme/cme.component';
import { DialogMorenamesComponent } from './managecredentials/dialog-morenames/dialog-morenames.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TableComponent,
    PhysiciandbviewComponent,
    AdminandbviewComponent,
    ManagecredentialsComponent,
    PersonalInfoComponent,
    ProfessionalandeduInfoComponent,
    WorkExperienceComponent,
    MedicalMalpracticeComponent,
    PeerReferencesComponent,
    LicensureComponent,
    PayorsInfoComponent,
    NavbarComponent,
    CmeComponent,
    DialogMorenamesComponent
  ],
  entryComponents: [DialogMorenamesComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    NgbModule,
    MatSelectModule,
    MatIconModule,
    MatSlideToggleModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatSortModule,
    MatSidenavModule,
    MatGridListModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule, 
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,

    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    })
    
  ],
  // exports: [
  //   MatGridListModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatSelectModule,
  //   MatDatepickerModule,
  //   MatNativeDateModule,
  //   MatListModule,
  //   MatToolbarModule,
  //   MatButtonModule

  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
