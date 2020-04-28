import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//manny


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  // se crea la forma para el login
  loginForm: FormGroup;
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.initForm();// se manda llamar la forma
  }

  initForm(): void {//la forma para el login donde se ingresa el usuario y contraseña
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(6)])
    });
  }
  onSubmit(): void{
    console.log("login");
    if(this.loginForm.valid) {
      const email = this.loginForm.controls.email.value;
      const password = this.loginForm.controls.password.value;
      // falta resolver error con libreria de angularfire
      //this.auth.login(email, password);

    }else {
      alert("error contraseña o correo incorrecto, intento nuevamente");
    }
    
  }
    
  GoToSignup(): void {
    this.navCtrl.navigateForward(["signup"]);
  }
  
}
