import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import { HomeComponent } from './Components/home/home.component';
import { englishGuard } from './Guards/all.guard';
import { EnglishComponent } from './Components/english/english.component';

const routes: Routes = [
  {path: '', component: NotFoundComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'home', component: HomeComponent},
  {path: 'english', component: EnglishComponent, canActivate: [englishGuard]},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
