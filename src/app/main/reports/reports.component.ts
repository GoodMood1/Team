import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements AfterViewInit {
  displayedColumns: string[] = ['subject', 'deal', 'created', 'company'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  currentNumber = 'My Personal Reports';


  constructor(public dialog: MatDialog) {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
  }

  forTable1() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
    this.currentNumber="My Personal Reports";
  }
  forTable2() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA2);
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
    this.currentNumber="Shared Reports";
  }
  forTable3() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA3);
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
    this.currentNumber="All Reports";
  }
  forTable4() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA4);
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
    this.currentNumber="Task Reports";
  }
  forTable5() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA5);
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
    this.currentNumber="Contact Reports";
  }
  forTable6() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA6);
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
    this.currentNumber="Company Reports";
  }
  forTable7() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA7);
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
    this.currentNumber="Lead Reports";
  }
  forTable8() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA8);
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
    this.currentNumber="Deal Reports";
  }
  forTable9() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA9);
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
    this.currentNumber="Project Reports";
  }
  forTable10() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA10);
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
    this.currentNumber="Other Reports";
  }




}
export interface PeriodicElement {
  subject: string;
  deal: string;
  created: string;
  company: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {subject: 'Evaluation', deal: '07, Aug 2020', created: 'John Doe', company: '-'},
  {subject: 'Inventry', deal: '02, june 2020', created: 'John Doe',  company: '-'},
  {subject: 'Project Management', deal: '02, April 2020', created: 'John Doe', company: '-'},
];
const ELEMENT_DATA2: PeriodicElement[] = [
  {subject: 'Shared Report', deal: '03, April 2021', created: 'Johny Dy', company: '-'},
  {subject: 'Evaluation', deal: '04, April 2020', created: 'Sad boy',  company: '-'},
  {subject: 'Project Management', deal: '25, April 2021', created: 'Happy boy', company: '-'},
];
const ELEMENT_DATA3: PeriodicElement[] = [
  {subject: 'All Report', deal: '04, April 2020', created: 'Jacky Chan', company: '-'},
  {subject: 'Evaluation', deal: '09, june 2020', created: 'George Wash',  company: '-'},
  {subject: 'Project Management', deal: '02, April 2020', created: 'Someone An', company: '-'},
];
const ELEMENT_DATA4: PeriodicElement[] = [
  {subject: 'Task Report', deal: '03, june 2020', created: 'Asd sff', company: '-'},
  {subject: 'Evaluation', deal: '22, April 2020', created: 'Johny Dy',  company: '-'},
  {subject: 'Project Management', deal: '02, April 2020', created: 'Johny Dy', company: '-'},
];
const ELEMENT_DATA5: PeriodicElement[] = [
  {subject: 'Contact Report', deal: '12, Aug 2020', created: 'Johny Do', company: '-'},
  {subject: 'Evaluation', deal: '22, April 2020', created: 'Johny Dy',  company: '-'},
  {subject: 'Project Management', deal: '01, Aug 2020', created: 'Johny Doy', company: '-'},
];
const ELEMENT_DATA6: PeriodicElement[] = [
  {subject: 'Company Report', deal: '02, june 2020', created: 'George Wash', company: '-'},
  {subject: 'Evaluation', deal: '02, Aug 2020', created: 'Johny Dty',  company: '-'},
  {subject: 'Project Management', deal: '02, june 2020', created: 'Johny Do', company: '-'},
];
const ELEMENT_DATA7: PeriodicElement[] = [
  {subject: 'Lead Report', deal: '03, Aug 2020', created: 'Johny Dety', company: '-'},
  {subject: 'Evaluation', deal: '02, june 2020', created: 'Johny Jo',  company: '-'},
  {subject: 'Project Management', deal: '02, june 2020', created: 'Johny Do', company: '-'},
];
const ELEMENT_DATA8: PeriodicElement[] = [
  {subject: 'Deal Report', deal: '12, june 2020', created: 'Johny Do', company: '-'},
  {subject: 'Evaluation', deal: '11, Aug 2020', created: 'Johny Dety',  company: '-'},
  {subject: 'Project Management', deal: '02, june 2020', created: 'Johny Dy', company: '-'},
];
const ELEMENT_DATA9: PeriodicElement[] = [
  {subject: 'Project Report', deal: '07, Aug 2020', created: 'Johny Dy', company: '-'},
  {subject: 'Evaluation', deal: '05, Aug 2020', created: 'Johny Do',  company: '-'},
  {subject: 'Project Management', deal: '05, Aug 2020', created: 'Johny Do', company: '-'},
];
const ELEMENT_DATA10: PeriodicElement[] = [
  {subject: 'Event Report', deal: '07, Aug 2020', created: 'Johny Do', company: '-'},
  {subject: 'Inventry', deal: '02, june 2020', created: 'Johny Dy',  company: '-'},
  {subject: 'Project Management', deal: '02, june 2020', created: 'Johny Do', company: '-'},
];
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
