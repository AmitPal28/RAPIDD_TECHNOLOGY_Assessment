import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeedata!:Employee[];

  submitdata: Employee={
    Id:'',
    EmployeeName:'',
    StarTimeUtc:Date,
    EndTimeUtc:Date,
    EntryNotes: '',
    DeletedOn:null
  };
  constructor(private studentservices:EmployeeService,private _route:ActivatedRoute,private _router:Router){

  }
  ngOnInit(): void {
    this.GetEmployee();
  }

  finaldata!:Employee[];
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

  // findDiff(startTime:any,endTime:any) {
  //   var startDate = new Date(startTime);
  //   var endDate = new Date(endTime);
  //   var timeDiff = endDate.getTime() - startDate.getTime();
  //   var secondsDiff = Math.floor(timeDiff / 1000);
  //   var minutesDiff = Math.floor(secondsDiff / 60);
  //   var hoursDiff = Math.floor(minutesDiff / 60);
  //   var daysDiff = Math.floor(hoursDiff / 24);

  //   var seconds = secondsDiff % 60;
  //   var minutes = minutesDiff % 60;
  //   var hours = hoursDiff % 24;
  //   var days = daysDiff;
  //   return hours;
  //   }



}
