import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import { englishGuard } from './Guards/all.guard';
import { HomeComponent } from './Pages/home/home.component';
import { FaqComponent } from './Components/faq/faq.component';
import { QuizComponent } from './Components/quiz/quiz.component';
import { AIComponent } from './Components/ai/ai.component';
import { CertificateComponent } from './Components/certificate/certificate.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'home', component: HomeComponent},
  {path: 'FAQ', component: FaqComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'ai', component: AIComponent},
  {path: 'certificate', component: CertificateComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
