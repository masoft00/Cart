import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide = true;

  users!: any[];
  loading = true;
  error: any;


  constructor(
    private titleService:Title,
    private apollo: Apollo
    ) {
    this.titleService.setTitle("SignIn");
   }


   ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.users = result?.data?.users;
        this.loading = result.loading;
        this.error = result.error;
      });
  }


}
