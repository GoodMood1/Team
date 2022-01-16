import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements AfterViewInit {
  displayedColumns: string[] = ['check', 'subject', 'company_deal', 'contact', 'email', 'phone', 'company', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;


  constructor() {
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;

  }

}

export interface PeriodicElement {
  subject: string;
  company_deal: string;
  contact: string;
  email: string;
  phone: number;
  company: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    subject: 'Call',
    company_deal: 'Ansanio tech',
    contact: 'Rik',
    email: 'company@gmail.com',
    phone: 9874565464,
    company: 'Umbrella'
  },
  {
    subject: 'Phone',
    company_deal: 'Feneldo',
    contact: 'John Doe',
    email: 'company@gmail.com',
    phone: 9874565464,
    company: 'Soylent Corp'
  },
  {
    subject: 'Lunch',
    company_deal: 'Bensolet',
    contact: 'Cravo Ansanio',
    email: 'company@gmail.com',
    phone: 9874565464,
    company: 'Acme'
  },
  {
    subject: 'Phone',
    company_deal: 'Ansanio tech',
    contact: 'Williams',
    email: 'company@gmail.com',
    phone: 9874565464,
    company: 'Tesla'
  },
  {
    subject: 'Lesson',
    company_deal: 'Feneldo',
    contact: 'Mag',
    email: 'company@gmail.com',
    phone: 9874565464,
    company: 'ItStep'
  },
  {
    subject: 'Call',
    company_deal: 'Feneldo',
    contact: 'Williams',
    email: 'company@gmail.com',
    phone: 9874565464,
    company: 'Samsung'
  },
  {
    subject: 'Meet',
    company_deal: 'Bensolet',
    contact: 'Pety',
    email: 'company@gmail.com',
    phone: 9874565464,
    company: 'Apple'
  },
];
