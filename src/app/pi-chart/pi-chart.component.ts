import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, OnSameUrlNavigation, Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-pi-chart',
  templateUrl: './pi-chart.component.html',
  styleUrls: ['./pi-chart.component.css']
})
export class PiChartComponent implements OnInit {

  ngOnInit(): void {
    this.GetEmployee();
    this.createChart();
   
  }

 

  employeedata!:Employee[];

  constructor(private studentservices:EmployeeService,private _route:ActivatedRoute,private _router:Router){

  }
  

  timeSumMap:Map<string,number> = new Map();
  // hello=[{"Abhay Singh":0}]
  GetEmployee() {
    this.studentservices.getEmployee().subscribe((response)=>{
      response.forEach((emp)=>{
        let diff = this.findDiff(emp.StarTimeUtc, emp.EndTimeUtc)
        if (this.timeSumMap.has(emp.EmployeeName)) {
          this.timeSumMap.set(emp.EmployeeName, this.timeSumMap.get(emp.EmployeeName)! + diff)
        } else {
          this.timeSumMap.set(emp.EmployeeName, diff)
        }
      })
    })
  }

  findDiff(startTime:any,endTime:any) {
    var startDate = new Date(startTime);
    var endDate = new Date(endTime);
    var timeDiff = endDate.getTime() - startDate.getTime();
    var secondsDiff = Math.floor(timeDiff / 1000);

    var minutesDiff = Math.floor(secondsDiff / 60);
    var hoursDiff = Math.floor(minutesDiff / 60);
    var daysDiff = Math.floor(hoursDiff / 24);

    var seconds = secondsDiff % 60;
    var minutes = minutesDiff % 60;
    var hours = hoursDiff % 24;
    var days = daysDiff;

    return hoursDiff+(minutesDiff)/100;
    }


    public chart: any;
    createChart(){
  
      this.chart = new Chart("MyChart", {
        type: 'pie', //this denotes tha type of chart
        
        data: {// values on X-Axis
          labels: ["Abhay Singh","Tamoy Smith","Mary Poppins","Patrick Huthinson","Kavvay Verma","John Black","Tim Perkinson","Rita Alley","Raju Sunuwar","Stewart Malachi"],
           datasets: [{
      label: 'My First Dataset',
      data: [261.4500000000001,120.54000000000002,234.15999999999997,295.4799999999998,219.08999999999992,271.5699999999999,	228.49,154.16000000000008,131.33000000000004,283.97999999999996,41.25],
      backgroundColor: [
        '#004b44',
        '#005a52',
        '#00695f',
        '#00786d',
        '#00877a',
        '#00baa9',
        '#00dec9',
        '#03ffe7',
        '#27ffeb',
        '#4bffee',
        '#003c36',			
      ],
      hoverOffset: 4
    }],
        },
        options: {
          aspectRatio:2.5
        }
  
      });
    }
  
}
