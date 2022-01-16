import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements AfterViewInit {
  displayedColumns: string[] = ['check', 'icon', 'purchase', 'descr', 'clip', 'daterespond'];
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
  purchase: string;
  descr: string;
  clip: string;
  daterespond: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { icon: 'star',purchase: 'John Doe',  descr: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', clip:'attach_file', daterespond: '13:14'},
  { icon: 'star',purchase: 'Envato Account',descr: 'Important account security update from Envato', clip:'',  daterespond: '8:42'},
  { icon: 'star',purchase: 'Twitter',  descr: 'HRMS Bootstrap Admin Template', clip:'attach_file',  daterespond: '30 Nov'},
  { icon: 'star',purchase: 'Richard Parker', descr: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', clip:'attach_file',  daterespond: '18 Sep'},
  { icon: 'star',purchase: 'John Smith',  descr: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', clip:'',  daterespond: '21 Aug'},
  { icon: 'star',purchase: 'me, Robert Smith (3)',  descr: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', clip:'attach_file',  daterespond: '1 Aug'},
  { icon: 'star',purchase: 'Codecanyon', descr: 'Welcome To Codecanyon', clip:'attach_file',  daterespond: 'Jul 13'},
  { icon: 'star',purchase: 'Richard Miles',  descr: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', clip:'',  daterespond: 'May 14'},
  { icon: 'star',purchase: 'John Smith',  descr: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', clip:'attach_file',  daterespond: '11/11/16'},
  { icon: 'star',purchase: 'Mike Litorus', descr: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', clip:'attach_file',  daterespond: '10/31/16'},
];
