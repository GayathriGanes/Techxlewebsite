import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BannerComponent } from './pages/banner/banner.component';
import { CalloutComponent } from './pages/callout/callout.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ServiceComponent } from './pages/services/services.component';
import { HeaderComponent } from './pages/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MatCardModule } from "@angular/material/card";
import { PowerplatformComponent } from './pages/powerplatform/powerplatform.component';
import { CloudappComponent } from './pages/cloudapp/cloudapp.component';
import { StaffingComponent } from './pages/staffing/staffing.component';
import { UIComponent } from './pages/ui/ui.component';
import { FullstackComponent } from './pages/fullstack/fullstack.component';
import{MatExpansionModule} from '@angular/material/expansion';
import { LeadershipComponent } from './pages/leadership/leadership.component';
import { ServiceeComponent } from './pages/service/service.component';
import { MatButtonModule } from '@angular/material/button';
import { MissionComponent } from './pages/mission/mission.component';
import { SolutionbanComponent } from './pages/solutionban/solutionban.component';
import { PowerComponent } from './pages/power/power.component';
import { CloudComponent } from './pages/cloud/cloud.component';
import { StaffComponent } from './pages/staff/staff.component';
import { StackComponent } from './pages/stack/stack.component';
import { DesignComponent } from './pages/design/design.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AiComponent } from './pages/ai/ai.component';
import { DevopsComponent } from './pages/devops/devops.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';








@NgModule({
  declarations: [
    AppComponent,
    SolutionbanComponent,
    BannerComponent,
    CalloutComponent,
    FooterComponent,
    ServiceComponent,
    HeaderComponent,
    AboutusComponent,
    CareerComponent,
    ContactComponent,
    PowerplatformComponent,
    CloudappComponent,
    StaffingComponent,
    UIComponent,
    FullstackComponent,
    LeadershipComponent,
    ServiceeComponent,
    MissionComponent,
    SolutionbanComponent,
    PowerComponent,
    CloudComponent,
    StaffComponent,
    StackComponent,
    DesignComponent,
    SolutionsComponent,
    ContactComponent,
    AiComponent,
    DevopsComponent,
    HomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,

    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
