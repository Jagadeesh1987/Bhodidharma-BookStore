import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isCurrentUserAdmin: boolean = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder){
     }
    handleSubmit(e: any) {
      this.isCurrentUserAdmin = false;
      if (e.charCode === 13) {
        $('.login-button').click();
      }
    }
    get f() { return this.loginForm.controls; }

  ngOnInit() { 
    this.isCurrentUserAdmin = false;
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
  });
  }

  onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
          return;
      } else {     
        const username = this.loginForm.value.userName;
        const password = this.loginForm.value.password;
        if(username === 'admin' && password === 'admin123'){
          this.isCurrentUserAdmin = true;
        }
        else if(username === 'user1' && password === 'user123') {
          this.isCurrentUserAdmin = false;
        }
        this.router.navigate(['/bookSection'], { state: { isCurrentUserAdmin: this.isCurrentUserAdmin } });
        localStorage.setItem('isAdmin', this.isCurrentUserAdmin.toString())
      }
  }

  login() {
  }

}


