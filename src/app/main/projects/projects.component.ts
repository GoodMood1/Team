import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  displayedColumns: string[] = ['check', 'name', 'img', 'status', 'user', 'category', 'project', 'icon', 'actions'];
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
  status: string;
  user: string;
  category: string;
  project: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Astronaut',
    img: 'assets/images/avatar.jpeg',
    status: 'In Progress',
    user: 'Mary B.',
    category: '-',
    project: '03-Jun-20 1:14 AM',
    icon: 'star'
  },
  {
    name: 'Barcelona',
    img: 'assets/images/avatar.jpeg',
    status: 'In Progress',
    user: 'Artem K.',
    category: '-',
    project: '03-Jun-20 1:14 AM',
    icon: 'star'
  },
  {
    name: 'Casanova',
    img: 'assets/images/avatar.jpeg',
    status: 'In Progress',
    user: 'Shakhov D.',
    category: 'Phone call',
    project: '03-Jun-20 1:14 AM',
    icon: 'star'
  },
  {
    name: 'Charming',
    img: 'assets/images/avatar.jpeg',
    status: 'In Progress',
    user: 'Melnik D.',
    category: 'Meeting',
    project: '03-Jun-20 1:14 AM',
    icon: 'star'
  },
  {
    name: 'Fireball',
    img: 'assets/images/avatar.jpeg',
    status: 'In Progress',
    user: 'Borov N.',
    category: 'Follow',
    project: '03-Jun-20 1:14 AM',
    icon: 'star'
  },
  {
    name: 'Gray',
    img: 'assets/images/avatar.jpeg',
    status: 'In Progress',
    user: 'Konovalov K.',
    category: 'Email',
    project: '03-Jun-20 1:14 AM',
    icon: 'star'
  },
  {
    name: 'Panthers',
    img: 'assets/images/avatar.jpeg',
    status: 'In Progress',
    user: 'Trukhmanov T.',
    category: '-',
    project: '03-Jun-20 1:14 AM',
    icon: 'star'
  },
];
