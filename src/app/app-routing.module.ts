import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './pages/services/services.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareerComponent } from './pages/career/career.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PowerplatformComponent } from './pages/powerplatform/powerplatform.component';
import { CloudappComponent } from './pages/cloudapp/cloudapp.component';
import { StaffingComponent } from './pages/staffing/staffing.component';
import { FullstackComponent } from './pages/fullstack/fullstack.component';
import { UIComponent } from './pages/ui/ui.component';
import { LeadershipComponent } from './pages/leadership/leadership.component';



const routes: Routes = [
  { path: 'services', component: ServiceComponent} ,
  {path:'services/powerplatform',component:PowerplatformComponent},
  {path:'services/cloudapp',component:CloudappComponent},
  {path:'services/staffing',component:StaffingComponent},
  {path:'services/fullstack',component:FullstackComponent},
  {path:'services/ui',component:UIComponent},
  {path:'solutions',component:SolutionsComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'aboutus/leadership',component:LeadershipComponent},
  {path:'career',component:CareerComponent},
  {path:'contact',component:ContactComponent},
  {path: '', redirectTo: '', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled',scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

