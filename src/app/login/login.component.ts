import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj = {
    userName: '',
    password: ''
  };
  constructor(private router: Router){}

  onLogin() {
    if(this.loginObj.userName == "admin" && this.loginObj.password == "334455") {
      alert('You are Entering as a Admin')
 
      this.router.navigateByUrl('/products')

    } else {
      alert('You are Entering as a User')
      this.router.navigateByUrl('/user')
    }
  }

  }

  
  

