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
import { PowerComponent } from './pages/power/power.component';
import { CloudComponent } from './pages/cloud/cloud.component';
import { StaffComponent } from './pages/staff/staff.component';
import { StackComponent } from './pages/stack/stack.component';
import { DesignComponent } from './pages/design/design.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { AiComponent } from './pages/ai/ai.component';
import { DevopsComponent } from './pages/devops/devops.component';
import { HomeComponent } from './pages/home/home.component';



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
  {path:'power',component:PowerComponent},
  {path:'cloud',component:CloudComponent},
  {path:'staff',component:StaffComponent},
  {path:'stack',component:StackComponent},
  {path:'design',component:DesignComponent},
  {path:'solutions',component:SolutionsComponent},
  {path: '', component:HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled',scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

