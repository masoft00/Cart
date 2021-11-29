import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    private titleService: Title,
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.titleService.setTitle('SignIn');
      (this.signinForm = this.fb.group({
        email: [''],
        password: [''],
      }));
  }

  ngOnInit(): void {}

  loginUser() {
    this.authService.signIn(this.signinForm.value);
  }
}
