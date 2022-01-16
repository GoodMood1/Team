import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  questionList: any[] = [
    {
      title: 'Anim pariatur cliche reprehenderit?',
      content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n' +
        '        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n' +
        '        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.\n' +
        '        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n' +
        '        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n' +
        '        raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
    },
    {
      title: 'Parsnip lotus root celery?',
      content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n' +
        '        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n' +
        '        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.\n' +
        '        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n' +
        '        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n' +
        '        raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
    },
    {
      title: 'Ad vegan excepteur butcher?',
      content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n' +
        '        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n' +
        '        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.\n' +
        '        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n' +
        '        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n' +
        '        raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
    },
    {
      title: 'Ad vegan excepteur butcher vice lomo?',
      content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n' +
        '        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n' +
        '        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.\n' +
        '        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n' +
        '        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n' +
        '        raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
    },
    {
      title: 'Cupidatat skateboard dolor brunch?',
      content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n' +
        '        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n' +
        '        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.\n' +
        '        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n' +
        '        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n' +
        '        raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}
