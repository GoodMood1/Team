import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements AfterViewInit {
  displayedColumns: string[] = ['check', 'name', 'photo', 'title', 'phone', 'email', 'tag', 'actions'];
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
  photo: string;
  title: string;
  phone: number;
  email: string;
  tag: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Kotelyuk A.',
    photo: 'assets/images/kotel.jpg',
    title: 'CEO',
    phone: 875455453,
    email: 'kotelyul@gmail.com',
    tag: 'Sample_data'
  },
  {
    name: 'Bakaeva M.',
    photo: 'assets/images/avatar.jpeg',
    title: 'CEO',
    phone: 875455453,
    email: 'bakaeva@gmail.com',
    tag: 'Sample_data'
  },
  {
    name: 'Melnik D.',
    photo: 'assets/images/melnik.jpg',
    title: 'CEO',
    phone: 875455453,
    email: 'melnik@gmail.com',
    tag: 'Sample_data'
  },
  {
    name: 'Borov N.',
    photo: 'assets/images/borov.jpg',
    title: 'CEO',
    phone: 875455453,
    email: 'borov@gmail.com',
    tag: 'Sample_data'
  },
  {
    name: 'Konovalov K.',
    photo: 'assets/images/avatar.jpeg',
    title: 'CEO',
    phone: 875455453,
    email: 'konovalov@gmail.com',
    tag: 'Sample_data'
  },
  {
    name: 'Shakhov D.',
    photo: 'assets/images/shakhov.jpg',
    title: 'CEO',
    phone: 875455453,
    email: 'shakhov@gmail.com',
    tag: 'Sample_data'
  },
];
