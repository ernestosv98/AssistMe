import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable() // guards are services
export class AuthGuardService implements CanActivate {   // needs to implement CanActivate

  constructor(public auth: AuthService, public router: Router) {}

  

    
}