import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements AfterViewInit {
  displayedColumns: string[] = ['check', 'company', 'img', 'phone', 'street', 'city', 'state', 'country', 'icon', 'actions'];
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
  company: string;
  img: string;
  phone: number;
  street: string;
  city: string;
  state: string;
  country: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    company: 'Clampett Oil',
    img: 'assets/company/logo1.png',
    phone: 875455453,
    street: 'Escalon Street',
    city: 'Alto',
    state: 'CA',
    country: 'Usa',
    icon: 'star'
  },
  {
    company: 'Acme Corporation',
    img: 'assets/company/logo2.png',
    phone: 875455453,
    street: 'Havier Street',
    city: 'Alto',
    state: 'CA',
    country: 'Usa',
    icon: 'star'
  },
  {
    company: 'Soylent Corp',
    img: 'assets/company/logo3.png',
    phone: 875455453,
    street: 'Nephew Street',
    city: 'Soylent',
    state: 'CA',
    country: 'India',
    icon: 'star'
  },
  {
    company: 'Umbrella',
    img: 'assets/company/logo1.png',
    phone: 875455453,
    street: 'Albert Street',
    city: 'Umbrella',
    state: 'CA',
    country: 'Europe',
    icon: 'star'
  },
  {
    company: 'Silocon Valley',
    img: 'assets/company/logo2.png',
    phone: 875455453,
    street: 'RVN Street',
    city: 'Palto Alto',
    state: 'CA',
    country: 'USA',
    icon: 'star'
  },
  {
    company: 'Fringe',
    img: 'assets/company/logo3.png',
    phone: 875455453,
    street: 'Kutuzov Street',
    city: 'Moscow',
    state: 'CA',
    country: 'Russia',
    icon: 'star'
  },
  {
    company: 'ItStep',
    img: 'assets/company/logo1.png',
    phone: 875455453,
    street: 'Moscow Street',
    city: 'Moscow',
    state: 'CA',
    country: 'Russia',
    icon: 'star'
  },
];
