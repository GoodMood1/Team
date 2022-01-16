import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements AfterViewInit {
  displayedColumns: string[] = ['check', 'name', 'img', 'phone', 'title', 'company', 'email', 'lead_status', 'lead_created', 'owner', 'icon', 'actions'];
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
  name: string;
  img: string;
  phone: number;
  title: string;
  company: string;
  email: string;
  lead_status: string;
  lead_created: string;
  owner: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Anne',
    title: 'VP of Sales',
    phone: 4066533860,
    img: 'assets/images/avatar.jpeg',
    company: 'Umbrella',
    email: 'abc@email.com',
    lead_status: 'OPEN - Contacted',
    lead_created: '03-Jun-20 1:14 AM',
    owner: 'Artem K.',
    icon: 'star'
  },
  {
    name: 'Carvo',
    title: 'VP of Sales',
    phone: 4066533860,
    img: 'assets/images/avatar.jpeg',
    company: 'Soylent Corp',
    email: 'abc@email.com',
    lead_status: 'OPEN - NotContacted',
    lead_created: '03-Jun-20 1:14 AM',
    owner: 'Artem K.',
    icon: 'star'
  },
  {
    name: 'Danil',
    title: 'VP of Sales',
    phone: 4066533860,
    img: 'assets/images/avatar.jpeg',
    company: 'Acme Corporation',
    email: 'abc@email.com',
    lead_status: 'OPEN - Contacted',
    lead_created: '03-Jun-20 1:14 AM',
    owner: 'Artem K.',
    icon: 'star'
  },
  {
    name: 'Jen',
    title: 'VP of Sales',
    phone: 4066533860,
    img: 'assets/images/avatar.jpeg',
    company: 'Umbrella',
    email: 'abc@email.com',
    lead_status: 'OPEN - NotContacted',
    lead_created: '03-Jun-20 1:14 AM',
    owner: 'Artem K.',
    icon: 'star'
  },
  {
    name: 'Mary',
    title: 'VP of Sales',
    phone: 4066533860,
    img: 'assets/images/avatar.jpeg',
    company: 'Howe-Blanda LLC',
    email: 'abc@email.com',
    lead_status: 'OPEN - Contacted',
    lead_created: '03-Jun-20 1:14 AM',
    owner: 'Artem K.',
    icon: 'star'
  },
  {
    name: 'Jacob',
    title: 'VP of Sales',
    phone: 4066533860,
    img: 'assets/images/avatar.jpeg',
    company: 'Acme Corporation',
    email: 'abc@email.com',
    lead_status: 'OPEN - NotContacted',
    lead_created: '03-Jun-20 1:14 AM',
    owner: 'Artem K.',
    icon: 'star'
  },
  {
    name: 'Ben',
    title: 'VP of Sales',
    phone: 4066533860,
    img: 'assets/images/avatar.jpeg',
    company: 'ItStep',
    email: 'abc@email.com',
    lead_status: 'OPEN - Contacted',
    lead_created: '03-Jun-20 1:14 AM',
    owner: 'Artem K.',
    icon: 'star'
  },
];
