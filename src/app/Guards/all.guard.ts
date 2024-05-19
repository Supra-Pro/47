import { HttpClientJsonpModule } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { elementAt, throttle } from 'rxjs';


const userRouter = false;
const adminRouter = true;
var tokenKey = 'token';
var tokenDecoded: any | null;

export const allGuard: CanActivateFn = (route, state) => {
  return true;
};

export const loginGuard: CanActivateFn = (route, state) => {
  console.log('state & route are HERE')
  return true;
};

export const englishGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)

 if(localStorage.getItem(tokenKey) != null) {
  const tokenDecoded: any = jwtDecode(localStorage.getItem(tokenKey)!)

  const data = tokenDecoded.role;

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if(element == 'Admin') {
      router.navigate(['/english'])
      console.log('Navigated to english');
      return true;
    } else if(element == 'Student') {
      console.log('Mr. English');
      router.navigate(['/404'])
      return true;
    }
  }
 }
  console.log('navigate boldi');
  router.navigate(['/login'])
  return false;
};