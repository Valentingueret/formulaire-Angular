import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: any = {};
  isSubmitted = false;

  onSubmit() {
    console.log(this.user); 
    this.isSubmitted = true;
  }
}
