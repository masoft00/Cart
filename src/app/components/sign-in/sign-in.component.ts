import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide = true;
  constructor(private titleService:Title) {
    this.titleService.setTitle("SignIn");
   }


  ngOnInit(): void {
  }

}
