import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {AfterViewInit} from "@angular/core";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements AfterViewInit {
  displayedColumns: string[] = ['check', 'name', 'percentage', 'user', 'date', 'owner', 'status', 'actions'];
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
  percentage: number;
  user: string;
  date: string;
  owner: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Some Task', percentage: 10, user: 'Mary B.', date: '31.12.2021', owner: 'Danil S.', status: 'Not Comlete'},
  {name: 'Some Task', percentage: 100, user: 'Artem K.', date: '31.12.2021', owner: 'Danil S.', status: 'Comlete'},
  {name: 'Some Task', percentage: 30, user: 'Artem K.', date: '31.12.2021', owner: 'Danil S.', status: 'Not Comlete'},
  {name: 'Some Task', percentage: 100, user: 'Mary B.', date: '31.12.2021', owner: 'Danil S.', status: 'Comlete'},
  {name: 'Some Task', percentage: 55, user: 'Danil M.', date: '31.12.2021', owner: 'Danil S.', status: 'Not Comlete'},
  {name: 'Some Task', percentage: 23, user: 'Danil M.', date: '31.12.2021', owner: 'Danil S.', status: 'Not Comlete'},
  {name: 'Some Task', percentage: 56, user: 'Artem K.', date: '31.12.2021', owner: 'Danil S.', status: 'Not Comlete'},
  {name: 'Some Task', percentage: 43, user: 'Danil S.', date: '31.12.2021', owner: 'Danil S.', status: 'Not Comlete'},
  {name: 'Some Task', percentage: 61, user: 'Mary B.', date: '31.12.2021', owner: 'Danil S.', status: 'Not Comlete'},
  {name: 'Some Task', percentage: 88, user: 'Danil S.', date: '31.12.2021', owner: 'Danil S.', status: 'Not Comlete'},
  {name: 'Some Task', percentage: 81, user: 'Kostya K.', date: '31.12.2021', owner: 'Danil S.', status: 'Not Comlete'},
  {name: 'Some Task', percentage: 92, user: 'Kostya K.', date: '31.12.2021', owner: 'Danil S.', status: 'Not Comlete'},
];
