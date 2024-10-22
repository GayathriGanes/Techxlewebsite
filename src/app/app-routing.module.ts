import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareerComponent } from './pages/career/career.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PowerplatformComponent } from './pages/powerplatform/powerplatform.component';
import { CloudappComponent } from './pages/cloudapp/cloudapp.component';
import { StaffingComponent } from './pages/staffing/staffing.component';
import { FullstackComponent } from './pages/fullstack/fullstack.component';
import { UIComponent } from './pages/ui/ui.component';
import { LeadershipComponent } from './pages/leadership/leadership.component';
import { DesignComponent } from './pages/design/design.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { AiComponent } from './pages/ai/ai.component';
import { DevopsComponent } from './pages/devops/devops.component';
import { HomeComponent } from './pages/home/home.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { AcquisComponent } from './pages/acquis/acquis.component';
import { SampleComponent } from './pages/sample/sample.component';
import { ProjectComponent } from './pages/project/project.component';
import { ReviewComponent } from './pages/review/review.component';
import { GrantComponent } from './pages/grant/grant.component';
import { HealthcareComponent } from './pages/healthcare/healthcare.component';
import { PsComponent } from './pages/ps/ps.component';
import { SaleComponent } from './pages/sale/sale.component';


const routes: Routes = [
  { path: 'services', component: ServiceComponent} ,
  {path:'powerplatform',component:PowerplatformComponent},
  {path:'cloudapp',component:CloudappComponent},
  {path:'staffing',component:StaffingComponent},
  {path:'fullstack',component:FullstackComponent},
  {path:'ui',component:UIComponent},
  {path:'ai',component:AiComponent},
  {path:'devops',component:DevopsComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'leader',component:LeadershipComponent},
  {path:'career',component:CareerComponent},
  {path:'contact',component:ContactComponent},
  {path:'lab-automation-&-reservation',component:DesignComponent},
  {path:'solutions',component:SolutionsComponent},
  {path:'inventory-management',component:InventoryComponent},
  {path:'acquisition-support-for-labs',component:AcquisComponent},
  {path:'sample-tracking',component:SampleComponent},
  {path:'project-portfolio-management',component:ProjectComponent},
  {path:'review-board-management',component:ReviewComponent},
  {path:'grant-applications',component:GrantComponent},
  {path:'healthcare-portal',component:HealthcareComponent},
  {path:'psr',component:PsComponent},
  {path:'custom-sales-crm-platform',component:SaleComponent},
  {path: '', component:HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled',scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

