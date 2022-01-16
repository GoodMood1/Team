import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public active: string[] = ['', '', '', '', '', '', ''];
  public trans: string[] = ['', '', '', '', '', '', ''];

  public AddActive(num: number): void {
    if (this.active[num] == '') {
      this.active[num] = 'active';
      this.trans[num] = "transform: rotate(90deg); transition: 0.4s;"
    } else {
      this.active[num] = '';
      this.trans[num] = ""
    }
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logOut() {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      this.router.navigate(['login']);
    }
  }
}
