import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Student } from '../models/Student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
//manny
  //se crea forma para el signup
  signupForm: FormGroup;
  constructor(private navCtrl: NavController,
              private authService : AuthService,
              private studentService : StudentService) { }

  ngOnInit() {// se manda llamar
    this.initForm();
  }

  initForm(): void {// se crea la forma para el signup
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      aboutme: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(null,[Validators.required, Validators.minLength(6)])
    });
  }
  onSubmit(): void{
    if(this.signupForm.valid) {
      const name = this.signupForm.controls.name.value;
      const surname = this.signupForm.controls.surname.value;
      const aboutme = this.signupForm.controls.aboutme.value;
      const email = this.signupForm.controls.email.value;
      const password = this.signupForm.controls.password.value;
      
      
      
      this.authService.signupUser(email, password)
      var tempUser : Student = {
        id: " ",
        Name : name,
        Surname : surname,
        AboutMe : aboutme,
        PicURL : " ",
        Course : null
      }
      this.studentService.registerStudent(tempUser)
      this.GoToLogin()
    }
    
  }

  GoToLogin(): void {
    this.navCtrl.navigateBack(['login']);
  }
}
