import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { IntroComponent } from './Components/intro/intro.component';
import { TeamComponent } from './Components/team/team.component';
import { OffersComponent } from './Components/offers/offers.component';
import { FaqComponent } from './Components/faq/faq.component';
import { FooterComponent } from './Components/footer/footer.component';
import { QuizComponent } from './Components/quiz/quiz.component';
import { AIComponent } from './Components/ai/ai.component';
import { CertificateComponent } from './Components/certificate/certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    NotFoundComponent,
    HomeComponent,
    NavbarComponent,
    IntroComponent,
    TeamComponent,
    OffersComponent,
    FaqComponent,
    FooterComponent,
    QuizComponent,
    AIComponent,
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }