import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
//manny


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  // se crea la forma para el login
  loginForm: FormGroup;
  
  
  constructor(private navCtrl: NavController,
              private authService : AuthService,
              private router : Router,
              private alertCtrl : AlertController) { }

  ngOnInit() {
    this.initForm();// se manda llamar la forma

    this.authService.logoutUser()
    
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
      this.loginUser({email: email, password: password})
      

    }else {
      alert("error contraseña o correo incorrecto, intento nuevamente");
    }
    
  }

  async loginUser(credentials): Promise<void> {
    this.authService.loginUser(credentials.email, credentials.password).then(
      () => {
        this.router.navigateByUrl('home');
      },
      async error => {
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }],
        });
        await alert.present();
      }
    );
  }
    
  GoToSignup(): void {
    this.navCtrl.navigateForward(["signup"]);
  }
  
}
