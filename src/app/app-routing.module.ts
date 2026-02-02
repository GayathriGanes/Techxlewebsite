import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PowerplatformComponent } from './pages/powerplatform/powerplatform.component';
import { CloudappComponent } from './pages/cloudapp/cloudapp.component';
import { StaffingComponent } from './pages/staffing/staffing.component';
import { FullstackComponent } from './pages/fullstack/fullstack.component';
import { UIComponent } from './pages/ui/ui.component';
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
import { LabaxLimsComponent } from './pages/labax-lims/labax-lims.component';
import { ErpSolutionsComponent } from './pages/erp-solutions/erp-solutions.component';
import { RagComponent } from './pages/rag/rag.component';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';


const routes: Routes = [
  { path: 'services', component: ServiceComponent} ,
  {path:'services/power-platform-solution',component:PowerplatformComponent},
  {path:'services/cloud-app-development',component:CloudappComponent},
  {path:'services/staffing-service',component:StaffingComponent},
  {path:'services/full-stack-development',component:FullstackComponent},
  {path:'services/ui-ux-designing',component:UIComponent},
  {path:'services/ai-application',component:AiComponent},
  {path:'services/devops',component:DevopsComponent},
  {path:'about-us',component:AboutusComponent},
  {path:'contact-us',component:ContactComponent},
  {path:'solutions/lab-automation-and-reservation',component:DesignComponent},
  {path:'solutions',component:SolutionsComponent},
  {path:'solutions/inventory-management',component:InventoryComponent},
  {path:'solutions/acquisition-support-for-labs',component:AcquisComponent},
  {path:'solutions/sample-tracking',component:SampleComponent},
  {path:'solutions/project-portfolio-management',component:ProjectComponent},
  {path:'solutions/review-board-management',component:ReviewComponent},
  {path:'solutions/grant-applications',component:GrantComponent},
  {path:'solutions/healthcare-portal',component:HealthcareComponent},
  {path:'solutions/psr',component:PsComponent},
  {path:'solutions/custom-sales-crm-platform',component:SaleComponent},
  {path:'solutions/labax-lims',component:LabaxLimsComponent},
  {path:'solutions/erp-solutions',component:ErpSolutionsComponent},
  {path:'solutions/agentic-rag',component:RagComponent},
  { path: ':demoKey', component: VideoPlayerComponent },
  {path: '', component:HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled',scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

