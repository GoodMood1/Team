import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public validate = {
    name: 'test',
    password: 'test',
  }
  public name: string = '';
  public password: string = '';


  @ViewChild('User') User: ElementRef | undefined;

  // convenience getter for easy access to form fields
  get f2() {
    return this.userr;
  }

  loading = false;
  submitted = false;
  userr = '';
  disp = 'none';
  disp1 = 'block';
  locations: any = ['Ukraine', 'Russia', 'Australia', 'Azerbaijan', 'Bangladesh', 'Iran', 'Canada', 'Latvia', 'Libya', 'Nigeria', 'France', 'Sweden', 'Austria', 'Great Britain', 'Israel', 'Malaysia', 'Norway', 'Barbados', 'Guyana', 'Honduras', 'Belarus', 'Djibouti', 'Zambia', 'Indonesia', 'Iran', 'Lesotho', 'Rwanda', 'Albania', 'Bangladesh', 'Bulgaria', 'Guinea', 'Grenada', 'Yemen', 'Lesotho', 'Nauru', 'Nepal', ' Argentina ', ' Armenia ', ' Hungary ', ' Honduras', 'Georgia', 'Colombia', 'Mauritius', ' Niger '];

  constructor(
    private router: Router,) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.validate.name === this.name && this.validate.password === this.password) {
      localStorage.setItem('token', 'token');
      this.router.navigate(['main']);
    } else {
      this.loading = false;
    }
  }
}
