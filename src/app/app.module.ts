import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
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
import { MatButtonModule } from '@angular/material/button';
import { MissionComponent } from './pages/mission/mission.component';
import { DesignComponent } from './pages/design/design.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
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
import {NgbModule, NgbScrollSpyModule} from '@ng-bootstrap/ng-bootstrap';







@NgModule({
  declarations: [
    AppComponent,
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
    MissionComponent,
    DesignComponent,
    SolutionsComponent,
    ContactComponent,
    AiComponent,
    DevopsComponent,
    HomeComponent,
    InventoryComponent,
    AcquisComponent,
    SampleComponent,
    ProjectComponent,
    ReviewComponent,
    GrantComponent,
    HealthcareComponent,
    PsComponent,
    SaleComponent
    
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
    ReactiveFormsModule,
    NgbScrollSpyModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
