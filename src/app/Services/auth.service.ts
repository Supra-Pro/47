import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../Environments/environment.development';
import { Observable, map } from 'rxjs';
import { LoginRequest } from '../Interfaces/login-request';
import { LoginResponse } from '../Interfaces/login-response';
import { RegisterRequest } from '../Interfaces/register-request';
import { RegisterResponse } from '../Interfaces/register-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  apiUrl = environment.apiUrl;
  tokenKey: string = 'token';

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}Users/Login`, data).pipe(
      map((response) => {
        if (response.isSuccessful) {
          localStorage.setItem(this.tokenKey, response.token);
        } else {
          this.router.navigate(['/register']); 
        }
        return response; 
      })
    );
  }

  register(data1:RegisterRequest): Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(this.apiUrl+'Users/Register', data1);
  }


  logout(){
    localStorage.setItem(this.tokenKey, '');
  }


  checkRouting(data: string[]): boolean {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if(element == 'Admin'){
        this.router.navigate(['/english']);
        return true;
      } else if(element == 'Student'){
        this.router.navigate(['/404']);
        return true;
      }
    }
    this.router.navigate(['/login'])
    return false;
  }

}
