import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements AfterViewInit {
  displayedColumns: string[] = ['check', 'subject', 'deal', 'phone', 'email', 'contact', 'company', 'pipelines', 'actions'];
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
  deal: string;
  phone: number;
  email: string;
  contact: string;
  company: string;
  pipelines: boolean[];
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    subject: 'Call',
    deal: 'Ansanio tech',
    phone: 9874565464,
    email: 'anson@gmail.com',
    contact: 'Cravo Ansanio',
    company: 'Umbrella',
    pipelines: [true, false, true, true, false, false,]
  },
  {
    subject: 'Phone',
    deal: 'Fendelo',
    phone: 9874565464,
    email: 'williams@gmail.com',
    contact: 'Williams',
    company: 'Umbrella',
    pipelines: [true, false, true, true, false, false,]
  },
  {
    subject: 'Lunch',
    deal: 'Bensolet',
    phone: 9874565464,
    email: 'john@gmail.com',
    contact: 'John',
    company: 'Umbrella',
    pipelines: [true, false, true, true, false, false,]
  },
  {
    subject: 'Call',
    deal: 'Ansanio tech',
    phone: 9874565464,
    email: 'carvo@gmail.com',
    contact: 'Cravo',
    company: 'Umbrella',
    pipelines: [true, false, true, true, false, false,]
  },
  {
    subject: 'Lesson',
    deal: 'Bensolet',
    phone: 9874565464,
    email: 'williams@gmail.com',
    contact: 'Williams',
    company: 'Umbrella',
    pipelines: [true, false, true, true, false, false,]
  },
  {
    subject: 'Lesson',
    deal: 'Something',
    phone: 9874565464,
    email: 'williams@gmail.com',
    contact: 'Williams',
    company: 'Umbrella',
    pipelines: [true, false, true, true, false, false,]
  },
  {
    subject: 'Phone',
    deal: 'Fendelo',
    phone: 9874565464,
    email: 'john@gmail.com',
    contact: 'John Doe',
    company: 'Umbrella',
    pipelines: [true, false, true, true, false, false,]
  },
];
