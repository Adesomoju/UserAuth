import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormGroup,  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersFeedbackComponent } from './users-feedback/users-feedback.component';
import { FooterComponent } from './footer/footer.component';
import { RoutingModule } from './routing/routing.module';
import { MaterialModule } from './/material.module';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersFeedbackComponent,
    FooterComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    RoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
