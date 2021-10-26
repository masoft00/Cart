import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  files = [];

  hide = true;
  srcResult: any;
  constructor(
    private titleService: Title
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

  ngOnInit(): void {}
}
