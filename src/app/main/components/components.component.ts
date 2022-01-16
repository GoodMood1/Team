import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  alertsList: any[] =[
    {
      content: '<strong>Holy guacamole!</strong> You should check in on some of those fields below.',
      alertClass: 'alert-primary'
    },
    {
      content: '<strong>Holy guacamole!</strong> You should check in on some of those fields below.',
      alertClass: 'alert-secondary'
    },
    {
      content: `<strong>Warning!</strong> There was a problem with your <a href="#" class="alert-link">network connection</a>.`,
      alertClass: 'alert-warning'
    },
    {
      content: `<strong>Error!</strong> A <a href="#" class="alert-link">problem</a> has been occurred while submitting your data.`,
      alertClass: 'alert-danger'
    },
    {
      content: `<strong>Success!</strong> Your <a href="#" class="alert-link">message</a> has been sent successfully.`,
      alertClass: 'alert-success'
    },
    {
      content: `<strong>Note!</strong> Please read the <a href="#" class="alert-link">comments</a> carefully.`,
      alertClass: 'alert-info'
    },
    {
      content: `<strong>Holy guacamole!</strong> You should check in on some of those fields below.`,
      alertClass: 'alert-light'
    },
    {
      content: `<strong>Holy guacamole!</strong> You should check in on some of those fields below.`,
      alertClass: 'alert-dark'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
