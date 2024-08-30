import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
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





@NgModule({
  declarations: [
    AppComponent,
    SolutionsComponent,
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
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
