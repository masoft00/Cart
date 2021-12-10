import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  files = [];
  resulallcard: any;

  hide = true;
  srcResult: any;
  constructor(
    private titleService: Title,
    private service: AuthService
  ) {
    this.titleService.setTitle('SignUp');
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  ngOnInit(): void {
    this.getallmytypecard();
  }

  getallmytypecard() {
    this.service.getcardtype().subscribe(data => {
      this.resulallcard = data
      console.log(this.resulallcard);

    })
  }
}
