import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../registration/registration.component.css']
})
export class LoginComponent implements OnInit {

  public validate = {
    name: 'test',
    password: 'test',
  }
  public name: string = '';
  public password: string = '';
  loading = false;

  constructor(
    private router: Router,
    private notifier: NotifierService,
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    if (this.validate.name === this.name && this.validate.password === this.password) {
      localStorage.setItem('token', 'token');
      this.router.navigate(['main']);
    } else {
      if (this.validate.name !== this.name && this.validate.password !== this.password) this.notifier.notify("error", 'Wrong password and name');
      if (this.validate.name !== this.name) this.notifier.notify("error", 'Wrong name');
      if (this.validate.password !== this.password) this.notifier.notify("error", 'Wrong password');

      this.loading = false;
    }
  }
}
