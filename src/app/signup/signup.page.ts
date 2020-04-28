import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
//manny
  //se crea forma para el signup
  signupForm: FormGroup;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {// se manda llamar
    this.initForm();
  }

  initForm(): void {// se crea la forma para el signup
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(null,[Validators.required, Validators.minLength(6)])
    });
  }
  onSubmit(): void{
    console.log("signup")
  }

  GoToLogin(): void {
    this.navCtrl.navigateBack(['login']);
  }
}
