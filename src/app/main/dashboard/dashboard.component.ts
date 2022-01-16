import {Component, ElementRef, OnInit} from '@angular/core';
import {ScaleType} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  width: number = 700;
  height: number = 300;
  containerRef!: ElementRef;
  fitContainer: boolean = false;
  // options for the chart
  isDoughnut: boolean = false;
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  timeline = true;
  doughnut = true;
  showLabels = true;

  yAxisLabel = 'Sales';
  xAxisLabel = 'Country';

  yProjectAxisLabel = 'Country';
  xProjectAxisLabel = 'Total Revenue';
  public single = [
    {
      "name": "China",
      "value": 2243772
    },
    {
      "name": "USA",
      "value": 1126000
    },
    {
      "name": "Norway",
      "value": 296215
    },
    {
      "name": "Japan",
      "value": 257363
    },
    {
      "name": "Germany",
      "value": 196750
    },
    {
      "name": "France",
      "value": 204617
    }
  ];
  public multi = [
    {
      "name": "China",
      "series": [
        {
          "name": "2017",
          "value": 1227770
        },
        {
          "name": "2018",
          "value": 2243772
        },
        {
          "name": "2019",
          "value": 711051
        },
      ]
    },
    {
      "name": "USA",
      "series": [
        {
          "name": "2017",
          "value": 764666
        },
        {
          "name": "2018",
          "value": 1126000
        },
        {
          "name": "2019",
          "value": 2243772
        },
      ]
    },
    {
      "name": "Norway",
      "series": [
        {
          "name": "2017",
          "value": 209122
        },
        {
          "name": "2018",
          "value": 296215
        },
        {
          "name": "2019",
          "value": 234318
        },
      ]
    },
    {
      "name": "Japan",
      "series": [
        {
          "name": "2017",
          "value": 205350
        },
        {
          "name": "2018",
          "value": 257363
        },
        {
          "name": "2019",
          "value": 226712
        },
      ]
    },
    {
      "name": "Germany",
      "series": [
        {
          "name": "2017",
          "value": 129246
        },
        {
          "name": "2018",
          "value": 196750
        },
        {
          "name": "2019",
          "value": 590708
        },
      ]
    },
    {
      "name": "France",
      "series": [
        {
          "name": "2017",
          "value": 149797
        },
        {
          "name": "2018",
          "value": 204617
        },
        {
          "name": "2019",
          "value": 507514
        },
      ]
    }
  ];

  public project = [
    {
      "name": "Ukraine",
      "value": 379678
    },
    {
      "name": "Russia",
      "value": 636906
    },
    {
      "name": "USA",
      "value": 901799
    },
    {
      "name": "Japan",
      "value": 852496
    },
    {
      "name": "Germany",
      "value": 309234
    },
    {
      "name": "England",
      "value": 774377
    }
  ];
  public projectMulti = [
    {
      "name": "Ukraine",
      "series": [
        {
          "name": "2020",
          "value": 8897468
        },
        {
          "name": "2021",
          "value": 9082303
        },
      ]
    },
    {
      "name": "Russia",
      "series": [
        {
          "name": "2020",
          "value": 9620144
        },
        {
          "name": "2021",
          "value": 9961778
        },
      ]
    },
    {
      "name": "USA",
      "series": [
        {
          "name": "2020",
          "value": 6621426
        },
        {
          "name": "2021",
          "value": 4855635
        },
      ]
    },
    {
      "name": "Japan",
      "series": [
        {
          "name": "2020",
          "value": 6039820
        },
        {
          "name": "2021",
          "value": 4709926
        },
      ]
    },
    {
      "name": "Germany",
      "series": [
        {
          "name": "2020",
          "value": 1605688
        },
        {
          "name": "2021",
          "value": 6481619
        },
      ]
    },
    {
      "name": "England",
      "series": [
        {
          "name": "2020",
          "value": 1739840
        },
        {
          "name": "2021",
          "value": 9016761
        },
      ]
    }
  ];
  public singleLead = [
    {
      "name": "Europe",
      "value": 1543772
    },
    {
      "name": "Asia",
      "value": 926000
    },
    {
      "name": "USA",
      "value": 896215
    },
  ];
  public multiLead = [
    {
      "name": "Europe",
      "series": [
        {
          "name": "2018",
          "value": 1024455
        },
        {
          "name": "2019",
          "value": 939820
        },
        {
          "name": "2020",
          "value": 1239820
        },
        {
          "name": "2021",
          "value": 1543772
        },
      ]
    },
    {
      "name": "Asia",
      "series": [
        {
          "name": "2018",
          "value": 539213
        },
        {
          "name": "2019",
          "value": 639820
        },
        {
          "name": "2020",
          "value": 1005688
        },
        {
          "name": "2021",
          "value": 926000
        },
      ]
    },
    {
      "name": "USA",
      "series": [
        {
          "name": "2018",
          "value": 399820
        },
        {
          "name": "2019",
          "value": 539820
        },
        {
          "name": "2020",
          "value": 439840
        },
        {
          "name": "2021",
          "value": 896215
        },
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
