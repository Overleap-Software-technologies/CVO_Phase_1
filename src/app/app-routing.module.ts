import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminandbviewComponent } from './adminandbview/adminandbview.component';
import { LoginComponent } from './login/login.component';
import { CmeComponent } from './managecredentials/cme/cme.component';
import { LicensureComponent } from './managecredentials/licensure/licensure.component';
import { ManagecredentialsComponent } from './managecredentials/managecredentials.component';
import { MedicalMalpracticeComponent } from './managecredentials/medical-malpractice/medical-malpractice.component';
import { PayorsInfoComponent } from './managecredentials/payors-info/payors-info.component';
import { PeerReferencesComponent } from './managecredentials/peer-references/peer-references.component';
import { PersonalInfoComponent } from './managecredentials/personal-info/personal-info.component';
import { ProfessionalandeduInfoComponent } from './managecredentials/professionalandedu-info/professionalandedu-info.component';
import { WorkExperienceComponent } from './managecredentials/work-experience/work-experience.component';
import { PhysiciandbviewComponent } from './physiciandbview/physiciandbview.component';
import { TableComponent } from './table/table.component'

const routes: Routes = [

  {
    path: 'Admin', component: AdminandbviewComponent,
  },

  {
    path: 'Physician', component: PhysiciandbviewComponent,
  },

  {
    path: 'ManageCredentials', component: ManagecredentialsComponent,
  },

  {
    path: 'Professional-Educational-Info', component: ProfessionalandeduInfoComponent,
  },

  {
    path: 'work-experience', component: WorkExperienceComponent,
  },

  {
    path: 'medical-malpractice', component: MedicalMalpracticeComponent,
  },

  {
    path: 'Peer-References', component: PeerReferencesComponent,
  },

  {
    path: 'licensure', component: LicensureComponent,
  },

  {
    path: 'Payors-info', component: PayorsInfoComponent,
  },

  {
    path: 'CME', component: CmeComponent,
  },

  {
    path: 'test', component:PersonalInfoComponent,
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
